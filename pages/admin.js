import React, { useState } from "react";

function Admin() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [trailer, setTrailer] = useState("");
  const [episodeNumber, setEpisodeNumber] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");
  const [serverType, setServerType] = useState("");
  const [EpisodeTitle, setEpisodeTitle] = useState("");
  const [episodesMap, setEpisodesMap] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "id":
        setId(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "slug":
        setSlug(value);
        break;
      case "image":
        setImage(value);
        break;
      case "Trailer":
        setTrailer(value);
        break;
      case "episodeNumber":
        setEpisodeNumber(value);
        break;
      case "iframeSrc":
        setIframeSrc(value);
        break;
      case "serverType":
        setServerType(value);
        break;
      case "EpisodeTitle":
        setEpisodeTitle(value);
        break;
      default:
        break;
    }
  };

  const addEpisode = () => {
    if (!serverType || !episodeNumber || !iframeSrc) {
      alert("Please fill episode details before adding!");
      return;
    }
    console.log("Adding episode:", { episodeNumber, EpisodeTitle, iframeSrc });
    setEpisodesMap((prev) => ({
      ...prev,
      [serverType]: [
        ...(prev[serverType] || []),
        { episodeNumber, EpisodeTitle, iframeSrc },
      ],
    }));
    setEpisodeNumber("");
    setIframeSrc("");
    setEpisodeTitle("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("id:", id);
    console.log("title:", title);
    console.log("slug:", slug);
    console.log("image:", image);
    console.log("trailer:", trailer);
    console.log("episodesMap:", episodesMap);
    if (!id || Object.keys(episodesMap).length === 0) {
      alert("Please fill all required fields!");
      return;
    }
    const data = { id, title, slug, image, trailer, episodes: episodesMap };

    const res = await fetch("/api/add-anime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([data]),
    });

    const response = await res.json();
    console.log(response);

    setId("");
    setTitle("");
    setSlug("");
    setImage("");
    setTrailer("");
    setEpisodesMap({});
  };

  return (
    <div className="Add-anime">
      <form onSubmit={handleSubmit}>
        <h1>Anime Information Form</h1>
        <label>ID:</label>
        <input type="text" name="id" value={id} onChange={handleChange} required />

        <label>Image URL:</label>
        <input type="text" name="image" value={image} onChange={handleChange} />

        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={handleChange} />

        <label>Slug:</label>
        <input type="text" name="slug" value={slug} onChange={handleChange} />

        <label>Trailer:</label>
        <input type="text" name="Trailer" value={trailer} onChange={handleChange} />

        <h2>Add Episodes</h2>
        <label>Server Type:</label>
        <input type="text" name="serverType" value={serverType} onChange={handleChange} />

        <label>Episode Number:</label>
        <input type="number" name="episodeNumber" value={episodeNumber} onChange={handleChange} />

        <label>Episode Title:</label>
        <input type="text" name="EpisodeTitle" value={EpisodeTitle} onChange={handleChange} />

        <label>Iframe Src:</label>
        <input type="text" name="iframeSrc" value={iframeSrc} onChange={handleChange} />

        <button type="button" onClick={addEpisode}>
          Add Episode
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;
