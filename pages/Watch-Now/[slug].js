// import React, { useEffect, useState } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import mongoose from "mongoose";
// import Anime from "../../models/Anime";
// import Recommended from "../Recommended";

// const Watch = ({ anime, animeD, AllAnimeData}) => {
//   console.log(anime);
//   const MyAnimeData = anime;

//   const [currentEpisode, setCurrentEpisode] = useState(MyAnimeData.episodes[0]);
//   const [hydrated, setHydrated] = useState(false);

//   useEffect(() => {
//     setHydrated(true); 
//   }, []);

//   if (!hydrated) {
//     return null;
//   }

//   const handleEpisodeClick = (episode) => {
//     setCurrentEpisode(episode); // Set the clicked episode as the current episode
//   };

//   return (
//     <>
//       <Head>
//         <title>Watch {MyAnimeData.title}</title>
//         <meta name="description" content="Generated by create next app" />
//         <style>{`
//         .watch-container::before{
//         content : "";
//         background:linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${MyAnimeData.image});
//         filter: blur(10px);
//         background-attachment: fixed;
//         background-repeat: no-repeat;
//         background-position: center;
//         background-size: 100% auto;
//         height: 100%;
//         position: absolute;
//         width: 100vw;
//         left: 0;
//     }
//     @media only screen and (max-width: 650px) {
//     .watch-main-container::before {
//         background-size: 100% 100%;
//     }
// }
//         `}</style>
//       </Head>
//       <div className="watch-main-container" style={{ overflowX: "hidden" }}>
//         <div className="watch-container">
//           <div className="main-contant">
//             <div className="episode-video">
//               <div className="video-player" style={{ position: "static" }}>
//                 <iframe
//                   src={currentEpisode.iframeSrc}
//                   autoPlay="1"
//                   id="video-player"
//                   className="video-player"
//                   allowFullScreen="allowFullScreen"
//                   allow="accelerometer;autoplay;encripted-media;gyroscope;picture-in-picture"
//                   webkitallowfullscreen="true"
//                   mozallowfullscreen="true"
//                   frameBorder="0"
//                   scrolling="no"
//                 ></iframe>
//               </div>
//               <div className="episode-detail">
//                 <div className="video-dow" style={{ justifyContent: "end" }}>
//                   <div className="video-dow-container">
//                     <div className="video-dow-btns">
//                       <div
//                         className="video prev-episode"
//                         style={{ display: "none" }}
//                       >
//                         <div className="video-txt">
//                           <i className="fa-solid tiny-t fa-backward"></i>
//                           Prev
//                         </div>
//                       </div>
//                       <div className="video next-episode">
//                         <div className="video-txt">
//                           Next
//                           <i className="fa-solid tiny-t fa-forward"></i>
//                         </div>
//                       </div>
//                       <div className="video download">
//                         <div className="video-txt">
//                           <i className="fa-solid tiny-t fa-download"></i>
//                           Download
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="episode-desbord">
//                   <div className="episode-numbar">
//                     <span>You&apos;re Watching</span>
//                     <p>
//                       Episode-
//                       <span>{currentEpisode.episodeNumber}</span>
//                       <span className="filler-alert"></span>
//                     </p>
//                     <span>Switch Server if current server doesnt work.</span>
//                   </div>
//                   <div className="episode-servers">
//                     <div className="episode-a">
//                       <span className="text-in-episode-details">
//                         Multi Option contains many languages click on 🎧 to change Audio
//                       </span>
//                       <div className="episode-server-section">
//                         <div className="server-1">
//                           <div className="serv-txt">
//                             <span>Server 1 :</span>
//                           </div>
//                         </div>
//                         <div className="selact-servers">
//                           <div className="servers-div">
//                             <div className="server-btn">
//                               <span>{currentEpisode.serverType}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="episode-server-section">
//                         <div className="server-1">
//                           <div className="serv-txt">
//                             <span>Server 2 :</span>
//                           </div>
//                         </div>
//                         <div className="selact-servers">
//                           <div className="servers-div">
//                             <div className="server-btn">
//                               <span>Awesome Stream</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="episodes-container">
//               <div className="header">
//                 <h2>Solo Leveling</h2>
//                 <div className="episodes-list-sec">
//                   <div className="container-title">
//                     <span>List of episodes :</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="list-container">
//                 <div className="episodes-list">
//                   <div
//                     className="content"
//                     style={{
//                       display: "grid",
//                       gridTemplateColumns: "100%",
//                       gridGap: "0 0",
//                     }}
//                   >
//                     {MyAnimeData.episodes.map((episode, index) => {
//                       const isEven = index % 2 === 0;
//                       return (
//                         <div
//                           className={`episode-short`}
//                           key={index}
//                           onClick={() => handleEpisodeClick(episode)} // Handle episode click
//                         >
//                           <div className="short-anime-ep">
//                             {/* Switch classes based on index (odd/even) */}
//                             <div
//                               className={`episode-num ${isEven
//                                   ? "episode-alternate-1"
//                                   : "episode-alternate-2"
//                                 } ${currentEpisode.episodeNumber ===
//                                   episode.episodeNumber
//                                   ? "active-episode"
//                                   : ""
//                                 }`}
//                             >
//                               {episode.episodeNumber}
//                             </div>
//                             <div
//                               className={`episode-name ${isEven
//                                   ? "episode-alternate-2"
//                                   : "episode-alternate-1"
//                                 } ${currentEpisode.episodeNumber ===
//                                   episode.episodeNumber
//                                   ? "active-episode-2"
//                                   : ""
//                                 }`}
//                             >
//                               <span>{episode.title}</span>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="more-season-anime-container"
//             style={{ position: "relative", zIndex: "10" }}
//           >
//             <span className="more-anime-txt">
//               <b>More Seasons of this Anime</b>
//             </span>
//             <div className="anime-more-season-data">
//               <Link
//                 href={""}
//                 className="anime-season-item"
//                 style={{
//                   background:
//                     "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://img.flawlessfiles.com/_r/100x200/100/a2/62/a26294497c6afa9b885636b373d611f9/a26294497c6afa9b885636b373d611f9.jpg)",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "center",
//                   backgroundSize: "100%",
//                 }}
//               >
//                 <div>
//                   <h2>Jujutsu Kaisen 0: The Movie</h2>
//                 </div>
//               </Link>
//               <Link
//                 href={""}
//                 className="anime-season-item"
//                 style={{
//                   background:
//                     "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://img.flawlessfiles.com/_r/100x200/100/82/40/82402f796b7d84d7071ab1e03ff7747a/82402f796b7d84d7071ab1e03ff7747a.jpg)",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "center",
//                   backgroundSize: "100%",
//                 }}
//               >
//                 <div>
//                   <h2>Season 1</h2>
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className="anime-more-info">
//             <ul>
//               <li>
//                 More anime Info
//               </li>
//             </ul>
//             <img src={MyAnimeData.image} alt={MyAnimeData.title} className="anime-main-image" />
//             <div>
//               <h2>{MyAnimeData.title}</h2>
//               <div className="anime-more-desc">
//                 <p className="more-des"> <div
//                   dangerouslySetInnerHTML={{ __html: animeD.description }}
//                 /></p>
//                 <p>
//                   &nbsp;<strong>HiddenLeaf</strong> is the best site to watch
//                   <strong> {anime.title} </strong> SUB and DUB in <strong>HD</strong> quality.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="recommended-start">
          
//           </div>
//         </div>
//           <Recommended AllAnimeData={AllAnimeData}/>
//       </div>
//     </>
//   );
// };

// export default Watch;

// export async function getServerSideProps(context) {
//   // get my anime data
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }

//   const ids = [113415, 136430, 166240, 153288, 151807, 1535, 131573, 110277];
//   let MyAnime = await Anime.find({});

//   let anime = await Anime.findOne({ slug: context.query.slug });

//   let animeId = anime.id

//   // AniList API endpoint
//   const API_URL = "https://graphql.anilist.co";

//   // GraphQL query to fetch anime details
//   const query = `
//   query ($id: Int, $type: MediaType) {
//     Media(id: $id, type: $type) {
//         id
//         description
//         episodes
//       }
//     }
// `;

//   // Variables for the query
//   const variables = {
//     id: animeId, // Replace with actual anime ID
//     type: "ANIME",
//   };
//   // Fetch options
//   const fetchOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`, // Replace with actual access token
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   };

//   const response = await fetch(API_URL, fetchOptions);
//   const data = await response.json();

//       // Function to fetch data for a single x
//       const fetchAnimeData = async (id) => {
//         const fetchOptions = {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`, // Replace with actual access token
//           },
//           body: JSON.stringify({
//             query: `
//                       query ($id: Int, $type: MediaType) {
//                         Media(id: $id, type: $type) {
//                           id
//                           title {
//                             romaji
//                             english
//                             native
//                           }
//                           description
//                           episodes
//                           format
//                           seasonYear
//                           averageScore
//                           duration
//                           genres
//                           status
//                            startDate {
//                               year
//                               month
//                               day
//                             }
//                             endDate {
//                               year
//                               month
//                               day
//                             }
//                           coverImage {
//                                 extraLarge
//                                 large
//                                 medium
//                                 color
//                             }
//                         }
//                       }
//                     `,
//             variables: {
//               id: id,
//               type: "ANIME",
//             },
//           }),
//         };
    
//         try {
//           const response = await fetch(API_URL, fetchOptions);
//           const data = await response.json();
//           if (!response.ok) {
//             throw new Error(`Error fetching data for ID ${id}: ${data.message}`);
//           }
//           return data.data.Media;
//         } catch (error) {
//           console.error(error);
//           return null; // Returning null in case of error
//         }
//       };
//       // Create an array of promises
//       const fetchPromises = MyAnime.map((id) => fetchAnimeData(id.id));
    
//       // Wait for all promises to resolve
//       const results = await Promise.all(fetchPromises);
    
//       // Filter out any null results in case of errors
//       const validResults = results.filter((result) => result !== null);

//   return {
//     props: {AllAnimeData: validResults, animeD: data.data.Media, anime: JSON.parse(JSON.stringify(anime))}
//     // props: { animeD: data.data.Media, anime: JSON.parse(JSON.stringify(anime)), AllAnimeData: validResults},
//   };
// }