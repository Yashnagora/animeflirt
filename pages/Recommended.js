// import React, {useState} from 'react'
// import Link from 'next/link';
// import Head from 'next/head';

// const Recommended = (AllAnimeData) => {
//     console.log({AllAnimeData})
//     const animeData = AllAnimeData;
//     const sortedAnimeData = animeData.AllAnimeData.sort((a, b) => b.averageScore - a.averageScore);
//     const [hoveredAnimeId, setHoveredAnimeId] = useState(null);
//     const [display, setdisplay] = useState("none");
    
  
//     const handleMouseEnter = (id) => {
//       setHoveredAnimeId(id);
//       setdisplay("block")
//     };
  
//     const handleMouseLeave = (id) => {
//       // Delay added to allow smooth transition between card and details box
//       setTimeout(() => {
//         if (hoveredAnimeId === id) {
//           setHoveredAnimeId(null);
//           setdisplay("none")
//         }
//       }, 200);
//     };
  
//     return (
//         <>      
//         <div className="recommended">
//       <div className="trending second">
//         <span className="reco-span">
//             <b>Recommended Animes</b>
//           </span>
//         <div className="latest">
//           <div className="box" style={{ justifyContent: "normal" }}>
//           {sortedAnimeData.map((anime) => {
//               return (
//                 <div key={anime.id} className="main-box">
//                   <Head>
//                   <style>{`
//                     .anime-details-${anime.id}{
//                         display: none; 
//                         top: 112.525px;
//       left: 81px;
//                         width: 250px;
//                         border: none;
//                         background: rgba(78, 78, 82, .6);
//                         backdrop-filter: blur(10px);
//                         -webkit-backdrop-filter: blur(10px);
//                         width: 300px;
//                         border-radius: 7px;
//                         box-shadow: 0 20px 20px rgba(0, 0, 0, .05);
//                         font-size: 12px;
//                         line-height: 1.3em;
//                         z-index: 999 !important;
//                         color: #555;
//                         position: absolute;
//                         min-width: 50px;
//                         direction: ltr;
//                         padding: 0;
//                     }
//                     .trending .latest .box .main-box:hover .anime-details-${anime.id}{
//                         display: block;
//                     }
  
//           `}</style>
//                   </Head>
//                   <div className={`card card-${anime.id}`}>
//                     <Link href={`/Detail?id=${anime.id}`}>
//                       <div>
//                         <div className="tic">
//                           <div className="tic-item tic-sub">
//                             <i className="fas fa-closed-captioning mr-1"></i>
//                             {anime.episodes}
//                           </div>
//                           <div className="tic-item tic-dub">
//                             <i className="fas fa-microphone mr-1"></i>
//                             {anime.episodes}
//                           </div>
//                           <div className="tic-item tic-eps">{anime.episodes}</div>
//                         </div>
//                         <img src={anime.coverImage.extraLarge} />
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="video-details">
//                     <h3 className="video-title">
//                       <Link href={`/Detail?id=${anime.id}`}>
//                         {anime.title.english}
//                       </Link>
//                     </h3>
//                     <div className="video-info">
//                       <span>{anime.format}</span>
//                       <span className="dot"></span>
//                       <span>{anime.duration}m</span>
//                     </div>
//                   </div>
                  
//                     <div
//                       // id="anime-details"
//                       className={`anime-details-${anime.id}`}
//                     >
//                       <div className="popup">
//                         <div className="popup-container">
//                           <div className="popup-title">{anime.title.english}</div>
//                           <div className="popup-details">
//                             <span className="popup-rating">
//                               <i className="fas fa-star text-warning"></i>
//                               {(anime.averageScore / 10).toFixed(1)}
//                             </span>
//                             <span className="video-other">
//                               <div className="tic popup-tic">
//                                 <div className="tic-item tic-quality">HD</div>
//                                 <div className="tic-item tic-sub">
//                                   <i className="fas fa-closed-captioning mr-1"></i>
//                                   {anime.episodes}
//                                 </div>
//                                 <div className="tic-item tic-dub">
//                                   <i className="fas fa-microphone mr-1"></i>
//                                   {anime.episodes}
//                                 </div>
//                                 <div className="tic-item tic-eps">
//                                   {anime.episodes}
//                                 </div>
//                               </div>
//                             </span>
//                             <span className="popup-type">{anime.format}</span>
//                             <div className="clear"></div>
//                           </div>
//                           <div className="popup-desc">
//                             Asta and Yuno were abandoned at the same church on the
//                             same day. Raised together as children, they came to
//                             know of the
//                           </div>
//                           <div className="popup-line">
//                             <span className="stick">Japanese:</span>
//                             <span className="stick-taxt">{anime.native}</span>
//                           </div>
//                           <div className="popup-line">
//                             <span className="stick">Aired:</span>
//                             <span className="stick-taxt">
//                               {anime.startDate.month} {anime.startDate.day},{" "}
//                               {anime.startDate.year}
//                             </span>
//                           </div>
//                           <div className="popup-line">
//                             <span className="stick">Status:</span>
//                             <span className="stick-taxt">{anime.status}</span>
//                           </div>
//                           <div className="popup-line">
//                             <span className="stick">Genres:</span>
//                             {anime.genres.map((genre) => (
//                               <a
//                                 href={`/genre/${genre}`}
//                                 key={genre}
//                                 title="Action"
//                               >
//                                 {genre},
//                               </a>
//                             ))}
//                           </div>
//                           <div className="popup-button">
//                             <Link
//                               href={`/Detail?id=${anime.id}`}
//                               className="btn-play"
//                             >
//                               <i className="fa fa-play mr-2"></i>
//                               Watch now
//                             </Link>
//                             <div className="list-btn">
//                               <Link href={""} className="list-btn-a">
//                                 <i className="fas fa-plus"></i>
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                   
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       </div>
//       </>
//   )
// }

// export default Recommended

// // export async function getServerSideProps(context) {

// //      // get my anime data
// //   if (!mongoose.connections[0].readyState) {
// //     await mongoose.connect(process.env.MONGO_URI)
// //    }
   
// //    let MyAnime = await Anime.find({});

// //     const ids = [113415, 136430, 166240, 153288, 151807, 1535, 131573, 110277];
// //     const API_URL = "https://graphql.anilist.co/";
  
// //     // Function to fetch data for a single ID
// //     const fetchAnimeData = async (id) => {
// //       const fetchOptions = {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`, // Replace with actual access token
// //         },
// //         body: JSON.stringify({
// //           query: `
// //                     query ($id: Int, $type: MediaType) {
// //                       Media(id: $id, type: $type) {
// //                         id
// //                         title {
// //                           romaji
// //                           english
// //                           native
// //                         }
// //                         description
// //                         episodes
// //                         format
// //                         seasonYear
// //                         averageScore
// //                         duration
// //                         genres
// //                         status
// //                          startDate {
// //                             year
// //                             month
// //                             day
// //                           }
// //                           endDate {
// //                             year
// //                             month
// //                             day
// //                           }
// //                         coverImage {
// //                               extraLarge
// //                               large
// //                               medium
// //                               color
// //                           }
// //                       }
// //                     }
// //                   `,
// //           variables: {
// //             id: id,
// //             type: "ANIME",
// //           },
// //         }),
// //       };
  
// //       try {
// //         const response = await fetch(API_URL, fetchOptions);
// //         const data = await response.json();
// //         if (!response.ok) {
// //           throw new Error(`Error fetching data for ID ${id}: ${data.message}`);
// //         }
// //         return data.data.Media;
// //       } catch (error) {
// //         console.error(error);
// //         return null; // Returning null in case of error
// //       }
// //     };
// //     // Create an array of promises
// //     const fetchPromises = MyAnime.map((id) => fetchAnimeData(id.id));
  
// //     // Wait for all promises to resolve
// //     const results = await Promise.all(fetchPromises);
  
// //     // Filter out any null results in case of errors
// //     const validResults = results.filter((result) => result !== null);
  
// //     return {
// //       props: { AllAnimeData: validResults },
// //     };
// //   }