import puppeteer from 'puppeteer';

const SCRAPER_API_KEY = '0eb8369fc821229dbc8bbc47c9681d21'; 

export default async function handler(req, res) {
  const { url, url2, id } = req.body;
  if (!url || !url2 || !id) {
    return res.status(400).json({ error: 'URL or URL2 not provided' });
  }

  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-features=IsolateOrigins,site-per-process',
        '--disable-blink-features=AutomationControlled',
      ],
    });

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(60000);

    // Set user agent to mimic a real browser
    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    ];
    await page.setUserAgent(userAgents[Math.floor(Math.random() * userAgents.length)]);

    // Hide Puppeteer flags
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => false });
    });

    // Intercept and block unnecessary resources
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      const blockedResources = ['image', 'stylesheet', 'font', 'media'];
      if (blockedResources.includes(request.resourceType())) {
        request.abort();
      } else {
        request.continue();
      }
    });

    const episodes = [];

    // Scrape `episodeNumber` and `href` from `url`
    const scraperApiUrl = `http://api.scraperapi.com?api_key=${SCRAPER_API_KEY}&url=${encodeURIComponent(url)}&country_code=us&render=true`;
    await page.goto(scraperApiUrl, { waitUntil: 'domcontentloaded' });

    const episodeLinks = await page.$$eval('.post.dfx.fcl.episodes a.lnk-blk', links =>
      links.map(link => ({
        episodeNumber: link.parentElement.querySelector('.num-epi')?.textContent.trim(),
        href: link.href,
      }))
    );

    const cleanEpisodeNumber = (rawNumber) => {
      const match = rawNumber.match(/x(\d+)/); // Match the number after "x"
      return match ? parseInt(match[1], 10) : null; // Return as integer
    };

    // Scrape `episodeTitle` from `url2`
    const scraperApiUrl2 = `http://api.scraperapi.com?api_key=${SCRAPER_API_KEY}&url=${encodeURIComponent(url2)}&country_code=us&render=true`;
    await page.goto(scraperApiUrl2, { waitUntil: 'domcontentloaded' });

    const episodeTitles = await page.$$eval('.post.dfx.fcl.episodes a.lnk-blk', links =>
      links.map(link => link.parentElement.querySelector('.entry-title')?.textContent.trim())
    );

    // Combine data from `url` and `url2`
    for (let i = 0; i < episodeLinks.length; i++) {
      const { episodeNumber, href } = episodeLinks[i];
      const episodeTitle = episodeTitles[i] || 'Unknown Title';

      await new Promise(resolve => setTimeout(resolve, Math.random() * 5000 + 2000)); // Delay
      await page.goto(href, { waitUntil: 'domcontentloaded' });

      // Extract iframe src
      const targetSelector = '#options-0 iframe';
      await page.waitForSelector(targetSelector, { timeout: 30000 });

      const iframeSrc = await page.$eval(targetSelector, (iframe) => iframe.src);

      episodes.push({
        episodeNumber: cleanEpisodeNumber(episodeNumber),
        episodeTitle,
        iframeSrc,
      });
    }

    await browser.close();

    console.log({episodes})

    res.status(200).json({ episodes });
  } catch (error) {
    console.error('Error during navigation:', error);
    res.status(500).json({ error: 'Navigation failed', details: error.message });
  }
}
