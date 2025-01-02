import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL not provided' });
  }

  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const episodes = [];

    // Helper function to clean episodeNumber
    const cleanEpisodeNumber = (rawNumber) => {
      const match = rawNumber.match(/x(\d+)/); // Match the number after "x"
      return match ? parseInt(match[1], 10) : null; // Return as integer
    };

    // Scrape episode titles and numbers
    const episodeLinks = await page.$$eval('.post.dfx.fcl.episodes a.lnk-blk', links =>
      links.map(link => ({
        episodeNumber: link.parentElement.querySelector('.num-epi')?.textContent.trim(),
        episodeTitle: link.parentElement.querySelector('.entry-title')?.textContent.trim(),
        href: link.href,
      }))
    );

    for (const { episodeNumber, episodeTitle, href } of episodeLinks) {
      await page.goto(href, { waitUntil: 'networkidle2' });

      // Wait for iframe to load and get its src
      await page.waitForSelector('#options-0 iframe');
      const iframeSrc = await page.$eval('#options-0 iframe', iframe => iframe.src);

      // Add cleaned episodeNumber
      episodes.push({
        episodeNumber: cleanEpisodeNumber(episodeNumber), // Use helper to clean number
        episodeTitle,
        iframeSrc,
      });
    }

    await browser.close();

    console.log({ episodes });

    res.status(200).json({ episodes });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Scraping failed', details: error.message });
  }
}
