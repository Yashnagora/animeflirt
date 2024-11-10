import React, { useEffect, useState } from 'react';

const MultipleAnime = () => {
  const [id, setId] = useState(''); // Anime ID state
  const [url, setUrl] = useState(''); // URL state
  const [episodes, setEpisodes] = useState([]); // Episodes state
  const [loading, setLoading] = useState(false); // Loading state
  const [server, setserver] = useState(''); // Loading state

  // Function to handle scraping episodes
  const fetchEpisodes = async () => {
    if (!id || !url || !server) {
      alert('Please enter a valid ID and URL.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/scrapeEpisodes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, url, server }), // Pass ID and URL to backend
      });
      const data = await response.json();

      if (data.episodes) {
        setEpisodes(data.episodes);
      }
    } catch (error) {
      console.error('Error fetching episodes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to add scraped episodes to the database
  const addAnimeToDatabase = async () => {
    if (episodes.length === 0) {
      alert('No episodes to save. Please scrape episodes first.');
      return;
    }

    try {
      const animeData = {
        id,
        episodes, // All scraped episodes
      };

      const response = await fetch('/api/add-anime', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([animeData]), // Send anime data as array
      });

      const result = await response.json();

      if (result.success) {
        alert('Anime data successfully added to the database!');
      } else {
        alert(`Error adding data: ${result.error}`);
      }
    } catch (error) {
      console.error('Error adding anime data:', error);
    }
  };

  return (
    <div className="episodes-data-container">
      <h1>Anime Scraper & Database Saver</h1>

      {/* ID and URL Inputs */}
      <div className="url-input-container">
        <label htmlFor="animeId">Enter Anime ID:</label>
        <input
          type="number"
          id="animeId"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="12345"
          className="url-input"
        />

        <label htmlFor="animeId">Enter Anime server:</label>
        <input
          type="text"
          id="animeId"
          value={server}
          onChange={(e) => setserver(e.target.value)}
          placeholder="server"
          className="url-input"
        />

        <label htmlFor="animeUrl">Enter Anime URL:</label>
        <input
          type="text"
          id="animeUrl"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com/anime-url"
          className="url-input"
        />

        <button onClick={fetchEpisodes} disabled={loading} className="scrape-button">
          {loading ? 'Scraping Episodes...' : 'Fetch Episodes'}
        </button>
      </div>

      {/* Display Scraped Episodes */}
      {episodes.length > 0 && (
        <div className="episodes-list-data">
          <h2>Scraped Episodes</h2>
          {episodes.map((episode, index) => (
            <div className="episode-card" key={index}>
              <h3>
                Episode {episode.episodeNumber}: {episode.EpisodeTitle}
              </h3>
              <p>Server Type: {episode.serverType}</p>
              <iframe
                src={episode.iframeSrc}
                title={`Episode ${episode.episodeNumber}`}
                width="100%"
                height="300px"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}

      {/* Save to Database Button */}
      {episodes.length > 0 && (
        <button onClick={addAnimeToDatabase} className="save-button">
          Save to Database
        </button>
      )}
    </div>
  );
};

export default MultipleAnime;
