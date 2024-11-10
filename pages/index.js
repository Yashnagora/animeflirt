// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import mongoose from "mongoose";
// import Anime from "../models/Anime";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/free-mode';

// // import required modules
// import { FreeMode, Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Link from 'next/link';


export default function Home({AllAnimeData, MyAnime}) {

  // const myData = MyAnime
  // console.log({'anime': myData})
  // console.log({'animeData': AllAnimeData})

  // const animeData = AllAnimeData


  return (

    <div>
      <h1 style={{textAlign : 'center', margin: '100px 0px'}}>Anime homepage</h1>
    </div>
    // <div>
    //   {/* <!-- Home  --> */}

    //   <section className="home swiper" id="home">

    //     <Swiper
    //       spaceBetween={30}
    //       centeredSlides={true}
    //       // autoplay={{
    //       //   delay: 2500,
    //       //   disableOnInteraction: false,
    //       // }}
    //       pagination={{
    //         clickable: true,
    //       }}
    //       navigation={true}
    //       modules={[Autoplay, Pagination, Navigation]}
    //       className="mySwiper"
    //     >
    //       <SwiperSlide>

    //         <div className="container">
    //           <div className="slide-image">
    //             <picture>
    //               <img src="https://motionbgs.com/media/2770/shadows-army-solo-leveling.jpg" alt="" />
    //             </picture>
    //           </div>
    //           <div className="home-text">
    //             <div className="info-container">
    //               <span className='anime-studio'>MAPPA</span>
    //               <div className="hading">
    //                 <h1>Solo Leveling Hindi Telugu Tamil Dub
    //                   <br /></h1>
    //               </div>
    //               <div className="more-info">
    //                 <ul className="slide-info">
    //                   <li className="slide-info-text">
    //                     <div className="list-eliment-dot">
    //                       <i></i>
    //                     </div>
    //                     T.V Series
    //                   </li>
    //                   <li className="slide-info-text">
    //                     <div className="list-eliment-dot">
    //                       <i></i>
    //                     </div>
    //                     24min
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="slide-anime-dsc">
    //                 <span>
    //                   They say whatever doesn’t kill you makes you stronger, but that’s not the case for the
    //                   world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a
    //                   high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s
    //                   leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers
    //                   and the dungeon that spawned them.

    //                   (Source: Crunchyroll)
    //                 </span>
    //               </div>
    //               <div className="btn-data slide-btn">
    //                 <Link href={""}>
    //                   <button className="button-watch-now slide-watch-now">
    //                     <i className="fa-regular fa-circle-play m-txt"></i>
    //                     <span>Watch Now</span>
    //                   </button>
    //                 </Link>
    //                 <button className="btn-watch-list">
    //                   <i className="fa-solid fa-plus"></i>
    //                   Watch List
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //       </SwiperSlide>
    //       <SwiperSlide>

    //         <div className="container">
    //           <div className="slide-image">
    //             <picture>
    //               <img src="https://images8.alphacoders.com/127/1279113.jpg" alt="" />
    //             </picture>
    //           </div>
    //           <div className="home-text">
    //             <div className="info-container">
    //               <span className='anime-studio'>MAPPA</span>
    //               <div className="hading">
    //                 <h1>Jujutsu Kaisen Hindi Tamil Telugu
    //                   <br /></h1>
    //               </div>
    //               <div className="more-info">
    //                 <ul className="slide-info">
    //                   <li className="slide-info-text">
    //                     <div className="list-eliment-dot">
    //                       <i></i>
    //                     </div>
    //                     T.V Series
    //                   </li>
    //                   <li className="slide-info-text">
    //                     <div className="list-eliment-dot">
    //                       <i></i>
    //                     </div>
    //                     24min
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="slide-anime-dsc">
    //                 <span>
    //                   They say whatever doesn’t kill you makes you stronger, but that’s not the case for the
    //                   world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a
    //                   high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s
    //                   leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers
    //                   and the dungeon that spawned them.

    //                   (Source: Crunchyroll)
    //                 </span>
    //               </div>
    //               <div className="btn-data slide-btn">
    //                 <Link href={""}>
    //                   <button className="button-watch-now slide-watch-now">
    //                     <i className="fa-regular fa-circle-play m-txt"></i>
    //                     <span>Watch Now</span>
    //                   </button>
    //                 </Link>
    //                 <button className="btn-watch-list">
    //                   <i className="fa-solid fa-plus"></i>
    //                   Watch List
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //       </SwiperSlide>
    //       <SwiperSlide>

    //         <div className="container">
    //           <div className="slide-image">
    //             <picture>
    //               <img src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FhtGeuCcNhlBe8GTx3izKOsd8frw.jpg" alt="" />
    //             </picture>
    //           </div>
    //           <div className="home-text">
    //             <div className="info-container">
    //               <span className='anime-studio'>MAPPA</span>
    //               <div className="hading">
    //                 <h1>Kaiju No. 8 Tamil Telugu Hindi
    //                   <br /></h1>
    //               </div>
    //               <div className="more-info">
    //                 <ul className="slide-info">
    //                   <li className="slide-info-text">
    //                     <div className="list-eliment-dot">
    //                       <i></i>
    //                     </div>
    //                     T.V Series
    //                   </li>
    //                   <li className="slide-info-text">
    //                     <div className="list-eliment-dot">
    //                       <i></i>
    //                     </div>
    //                     24min
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="slide-anime-dsc">
    //                 <span>
    //                   They say whatever doesn’t kill you makes you stronger, but that’s not the case for the
    //                   world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a
    //                   high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s
    //                   leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers
    //                   and the dungeon that spawned them.

    //                   (Source: Crunchyroll)
    //                 </span>
    //               </div>
    //               <div className="btn-data slide-btn">
    //                 <Link href={""}>
    //                   <button className="button-watch-now slide-watch-now">
    //                     <i className="fa-regular fa-circle-play m-txt"></i>
    //                     <span>Watch Now</span>
    //                   </button>
    //                 </Link>
    //                 <button className="btn-watch-list">
    //                   <i className="fa-solid fa-plus"></i>
    //                   Watch List
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //       </SwiperSlide>
    //       <SwiperSlide>

    //         <div className="container">
    //           <div className="slide-image">
    //             <picture>
    //               <img src="https://cdn.wallpapersafari.com/0/92/Xp2q4n.jpg" alt="" />
    //             </picture>
    //           </div>
    //           <div className="home-text">
    //             <div className="info-container">
    //               <span className='anime-studio'>MAPPA</span>
    //               <div className="hading">
    //                 <h1>Demon Slayer: Kimetsu no Yaiba Hashira Training Arc Hindi Tamil Telugu
    //                   <br /></h1>
    //               </div>
    //               <div className="more-info">
    //                 <ul className="slide-info">
    //                   <li className="slide-info-text">
    //                     <div className="list-eliment-dot">
    //                       <i></i>
    //                     </div>
    //                     T.V Series
    //                   </li>
    //                   <li className="slide-info-text">
    //                     <div className="list-eliment-dot">
    //                       <i></i>
    //                     </div>
    //                     24min
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="slide-anime-dsc">
    //                 <span>
    //                   They say whatever doesn’t kill you makes you stronger, but that’s not the case for the
    //                   world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a
    //                   high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s
    //                   leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers
    //                   and the dungeon that spawned them.

    //                   (Source: Crunchyroll)
    //                 </span>
    //               </div>
    //               <div className="btn-data slide-btn">
    //                 <Link href={""}>
    //                   <button className="button-watch-now slide-watch-now">
    //                     <i className="fa-regular fa-circle-play m-txt"></i>
    //                     <span>Watch Now</span>
    //                   </button>
    //                 </Link>
    //                 <button className="btn-watch-list">
    //                   <i className="fa-solid fa-plus"></i>
    //                   Watch List
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //       </SwiperSlide>
    //     </Swiper>
    //   </section>

    //   {/* popular movie section */}

    //   <div className="second">

    //     <div className="latest">

    //       <h1>Popular Movies</h1>

    //       <div className="box">

    //         <Swiper
    //         style={{marginRight: "0"}}
    //           slidesPerView={6}
    //           spaceBetween={20}
    //           freeMode={true}
    //           navigation={true}
    //           breakpoints={{
    //             300: {
    //               slidesPerView: 3,
    //               spaceBetween: 20,
    //             },
    //             // 640: {
    //             //   slidesPerView: 3,
    //             //   spaceBetween: 20,
    //             // },
    //             768: {
    //               slidesPerView: 4,
    //               spaceBetween: 20,
    //             },
    //             922: {
    //               slidesPerView: 3,
    //               spaceBetween: 50,
    //             },
    //             1024: {
    //               slidesPerView: 4,
    //               spaceBetween: 50,
    //             },
    //             1250: {
    //               slidesPerView: 5,
    //               spaceBetween: 50,
    //             },
    //           }}
    //           modules={[FreeMode, Pagination, Navigation]}
    //           className="mySwiper"
    //         >
    //           {animeData.map((anime)=>{
    //             return <SwiperSlide key={anime.id} >
    //             <Link href={`/${anime.title.english.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${anime.id}`}><div className="card">

    //               <div className="details">
    //                 <div className="left">
    //                   <p className="name">{anime && anime.title.english.length > 21
    //                     ? anime.title.english.slice(0, 21) + '...'
    //                     : anime.title.english}</p>
    //                   <div className="date_quality">
    //                     <p className="quality">HD</p>
    //                     <p className="date">{anime.seasonYear}</p>
    //                   </div>
    //                   <p className="category">{anime.genres[0]}/{anime.genres[1]}</p>
    //                   <div className="info">
    //                     <div className="rate">
    //                       <i className="fa-solid fa-star"></i>
    //                       <p>{(anime.averageScore / 10).toFixed(1)}</p>
    //                     </div>
    //                     <div className="time">
    //                       <i className="fa-regular fa-clock"></i>
    //                       <p>{anime.duration}min/epi</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <img src={anime.coverImage.extraLarge} />

    //             </div>
    //             </Link>
    //           </SwiperSlide>
    //           })}
              

    //         </Swiper>

    //       </div>

    //     </div>

    //   </div>

    //   {/* popular series section */}

    //   <div className="second">

    //     <div className="latest">

    //       <h1>Popular Series</h1>

    //       <div className="box">

    //         <Swiper
    //           slidesPerView={3}
    //           spaceBetween={30}
    //           freeMode={true}
    //           navigation={true}
    //           breakpoints={{
    //             640: {
    //               slidesPerView: 2,
    //               spaceBetween: 20,
    //             },
    //             350: {
    //               slidesPerView: 1,
    //               spaceBetween: 10,
    //             },
    //             768: {
    //               slidesPerView: 3,
    //               spaceBetween: 20,
    //             },
    //             1024: {
    //               slidesPerView: 4,
    //               spaceBetween: 50,
    //             },
    //             1250: {
    //               slidesPerView: 5,
    //               spaceBetween: 50,
    //             },
    //           }}
    //           modules={[FreeMode, Pagination, Navigation]}
    //           className="mySwiper"
    //         >
    //           <SwiperSlide>
    //             <Link href='/Detail'><div className="card">

    //               <div className="details">

    //                 <div className="left">

    //                   <p className="name">Gajaman</p>
    //                   <div className="date_quality">
    //                     <p className="quality">HD</p>
    //                     <p className="date">2023</p>
    //                   </div>
    //                   <p className="category">Animation/Comedy</p>

    //                   <div className="info">

    //                     <div className="rate">
    //                       <i className="fa-solid fa-star"></i>
    //                       <p>9.2</p>
    //                     </div>
    //                     <div className="time">
    //                       <i className="fa-regular fa-clock"></i>
    //                       <p>120min</p>
    //                     </div>

    //                   </div>

    //                 </div>

    //                 <div className="right">

    //                   <i className="fa-solid fa-play"></i>

    //                 </div>

    //               </div>

    //               <img src="/img/c6.jpg" />

    //             </div>
    //             </Link></SwiperSlide>
    //           <SwiperSlide>
    //             <div className="card">

    //               <div className="details">

    //                 <div className="left">

    //                   <p className="name">Black Panther: Wakanda Forever</p>
    //                   <div className="date_quality">
    //                     <p className="quality">HD</p>
    //                     <p className="date">2022</p>
    //                   </div>
    //                   <p className="category">Action/Adventure</p>

    //                   <div className="info">

    //                     <div className="rate">
    //                       <i className="fa-solid fa-star"></i>
    //                       <p>7.1</p>
    //                     </div>
    //                     <div className="time">
    //                       <i className="fa-regular fa-clock"></i>
    //                       <p>120min</p>
    //                     </div>

    //                   </div>

    //                 </div>

    //                 <div className="right">

    //                   <i className="fa-solid fa-play"></i>

    //                 </div>

    //               </div>

    //               <img src="/img/c2.jpg" />

    //             </div>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="card">

    //               <div className="details">

    //                 <div className="left">

    //                   <p className="name">Interceptor</p>
    //                   <div className="date_quality">
    //                     <p className="quality">HD</p>
    //                     <p className="date">2022</p>
    //                   </div>
    //                   <p className="category">Action/Adventure</p>

    //                   <div className="info">

    //                     <div className="rate">
    //                       <i className="fa-solid fa-star"></i>
    //                       <p>4.6</p>
    //                     </div>
    //                     <div className="time">
    //                       <i className="fa-regular fa-clock"></i>
    //                       <p>120min</p>
    //                     </div>

    //                   </div>

    //                 </div>

    //                 <div className="right">

    //                   <i className="fa-solid fa-play"></i>

    //                 </div>

    //               </div>

    //               <img src="/img/c5.jpg" />

    //             </div>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="card">

    //               <div className="details">

    //                 <div className="left">

    //                   <p className="name">Black Adam</p>
    //                   <div className="date_quality">
    //                     <p className="quality">HD</p>
    //                     <p className="date">2022</p>
    //                   </div>
    //                   <p className="category">Action/Adventure</p>

    //                   <div className="info">

    //                     <div className="rate">
    //                       <i className="fa-solid fa-star"></i>
    //                       <p>6.4</p>
    //                     </div>
    //                     <div className="time">
    //                       <i className="fa-regular fa-clock"></i>
    //                       <p>120min</p>
    //                     </div>

    //                   </div>

    //                 </div>

    //                 <div className="right">

    //                   <i className="fa-solid fa-play"></i>

    //                 </div>

    //               </div>

    //               <img src="/img/c10.jpg" />

    //             </div>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="card">

    //               <div className="details">

    //                 <div className="left">

    //                   <p className="name">Black Adam</p>
    //                   <div className="date_quality">
    //                     <p className="quality">HD</p>
    //                     <p className="date">2022</p>
    //                   </div>
    //                   <p className="category">Action/Adventure</p>

    //                   <div className="info">

    //                     <div className="rate">
    //                       <i className="fa-solid fa-star"></i>
    //                       <p>6.4</p>
    //                     </div>
    //                     <div className="time">
    //                       <i className="fa-regular fa-clock"></i>
    //                       <p>120min</p>
    //                     </div>

    //                   </div>

    //                 </div>

    //                 <div className="right">

    //                   <i className="fa-solid fa-play"></i>

    //                 </div>

    //               </div>

    //               <img src="/img/c9.png" />

    //             </div>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="card">

    //               <div className="details">

    //                 <div className="left">

    //                   <p className="name">Black Adam</p>
    //                   <div className="date_quality">
    //                     <p className="quality">HD</p>
    //                     <p className="date">2022</p>
    //                   </div>
    //                   <p className="category">Action/Adventure</p>

    //                   <div className="info">

    //                     <div className="rate">
    //                       <i className="fa-solid fa-star"></i>
    //                       <p>6.4</p>
    //                     </div>
    //                     <div className="time">
    //                       <i className="fa-regular fa-clock"></i>
    //                       <p>120min</p>
    //                     </div>

    //                   </div>

    //                 </div>

    //                 <div className="right">

    //                   <i className="fa-solid fa-play"></i>

    //                 </div>

    //               </div>

    //               <img src="/img/c1.jpg" />

    //             </div>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="card">

    //               <div className="details">

    //                 <div className="left">

    //                   <p className="name">Black Adam</p>
    //                   <div className="date_quality">
    //                     <p className="quality">HD</p>
    //                     <p className="date">2022</p>
    //                   </div>
    //                   <p className="category">Action/Adventure</p>

    //                   <div className="info">

    //                     <div className="rate">
    //                       <i className="fa-solid fa-star"></i>
    //                       <p>6.4</p>
    //                     </div>
    //                     <div className="time">
    //                       <i className="fa-regular fa-clock"></i>
    //                       <p>120min</p>
    //                     </div>

    //                   </div>

    //                 </div>

    //                 <div className="right">

    //                   <i className="fa-solid fa-play"></i>

    //                 </div>

    //               </div>

    //               <img src="/img/c8.jpg" />

    //             </div>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="card">

    //               <div className="details">

    //                 <div className="left">

    //                   <p className="name">Black Adam</p>
    //                   <div className="date_quality">
    //                     <p className="quality">HD</p>
    //                     <p className="date">2022</p>
    //                   </div>
    //                   <p className="category">Action/Adventure</p>

    //                   <div className="info">

    //                     <div className="rate">
    //                       <i className="fa-solid fa-star"></i>
    //                       <p>6.4</p>
    //                     </div>
    //                     <div className="time">
    //                       <i className="fa-regular fa-clock"></i>
    //                       <p>120min</p>
    //                     </div>

    //                   </div>

    //                 </div>

    //                 <div className="right">

    //                   <i className="fa-solid fa-play"></i>

    //                 </div>

    //               </div>

    //               <img src="/img/c3.jpg" />

    //             </div>
    //           </SwiperSlide>
    //         </Swiper>

    //       </div>

    //     </div>

    //   </div>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}


// export async function getServerSideProps(){

//   // get my anime data
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI)
//    }
   
//    let MyAnime = await Anime.find({});

//   const API_URL = "https://graphql.anilist.co/";

//   // Function to fetch data for a single ID
//   const fetchAnimeData = async (id) => {
//     const fetchOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`, // Replace with actual access token
//       },
//       body: JSON.stringify({
//         query: `
//                   query ($id: Int, $type: MediaType) {
//                     Media(id: $id, type: $type) {
//                       id
//                       title {
//                         romaji
//                         english
//                         native
//                       }
//                       seasonYear
//                       averageScore
//                       duration
//                       genres
//                       coverImage {
//                             extraLarge
//                             large
//                             medium
//                             color
//                         }
//                     }
//                   }
//                 `,
//         variables: {
//           id: id,
//           type: "ANIME",
//         },
//       }),
//     };

//     try {
//       const response = await fetch(API_URL, fetchOptions);
//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(`Error fetching data for ID ${id}: ${data.message}`);
//       }
//       return data.data.Media;
//     } catch (error) {
//       console.error(error);
//       return null; // Returning null in case of error
//     }
//   };

//     const fetchPromises = MyAnime.map((id) => fetchAnimeData(id.id));

//     // Wait for all promises to resolve
//     const results = await Promise.all(fetchPromises);

//     // Filter out any null results in case of errors
//     const validResults = results.filter((result) => result !== null);

//   return {
//     props: {AllAnimeData: validResults, MyAnime: JSON.parse(JSON.stringify(MyAnime))}
//   }
// }
