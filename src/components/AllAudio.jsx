// import { useRef, useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import FerrariSound from "../assets/ferrari.mp3";
// import AstonMartin from "../assets/astonmartin.mp3";
// import Porsche from "../assets/porsche-105500.mp3";

// const SelectCar = ({ onAnimationComplete }) => {
//     const [lightImage, setLightImage] = useState(null);
//     const [fullScreenImage, setFullScreenImage] = useState(null);
//     const [carName, setCarName] = useState(null);
//     const [currentAudio, setCurrentAudio] = useState(null);

//     const audioRef = useRef(null);
//     const imgRef = useRef();
//     const mainSelectRef = useRef();

//     const handleCarClick = (lightImageSrc, fullImageSrc, name, audioFile) => {
//         setLightImage(lightImageSrc);
//         setFullScreenImage(fullImageSrc);
//         setCarName(name);

    
//     };

//     const handleLightImageClick = () => {
//         setLightImage(null);

//         if (currentAudio) {
//             if (audioRef.current) {
//                 audioRef.current.pause(); // Pause the previous audio if any
//             }
//             const newAudio = new Audio(currentAudio); // Create a new audio object for the current car
//             newAudio.play(); // Play the audio for the car associated with the light image
//             audioRef.current = newAudio; // Store the new audio reference
//         }
//     };

//     const handleFullScreenImageClick = (audioFile) => {
//         if (audioRef.current) {
//             audioRef.current.pause(); 
//         }
//         const newAudio = new Audio(audioFile); 
//         newAudio.play();
//         audioRef.current = newAudio; 

//         // GSAP animation after clicking fullScreenImage
//         gsap.to(mainSelectRef.current, {
//             top: "-100%",
//             duration: 0,
//             onComplete: () => {
//                 onAnimationComplete();
//             }
//         });
//     };


//     useGSAP(() => {
//         if (fullScreenImage) {
//             gsap.fromTo(imgRef.current,
//                 { scale: 0 },
//                 { scale: 1.1, duration: 0.8, ease: "power2.out" }
//             );
//         }
//     }, [fullScreenImage]);

//     useGSAP(() => {
//         let tl = gsap.timeline();
//         tl.from("#keeps", {
//             y: 70,
//             opacity: 0,
//             duration: 1,

//         }, "hello")
//             .from("#keeps h1",
//                 {
//                     y: 70,
//                     opacity: 0,
//                     duration: 1,
//                     stagger: 0.8,
//                     ease: "ease"

//                 }, "hello"
//             )
//             .to("#keeps h1", {
//                 y: -100,
//                 opacity: 0,
//                 duration: 1,
//                 stagger: {
//                     each: 0.8,
//                     from: "end"
//                 },
//                 ease: "power4.in"
//             })
//             .to("#Mainloader", {
//                 top: "-100%",
//                 opacity: 1,
//                 duration: 1,
//                 ease: "easeInOut"
//             })
//             .to("#red", {
//                 height: "50%",
//                 top: 0,
//                 delay: -1,
//                 duration: 1,
//                 ease: "easeInOut"
//             })
//             .to("#red", {
//                 height: "0%",
//                 delay: -.4,
//                 duration: 1,
//                 ease: "easeInOut",
//             });
//     }, []);

//     return (
//         <>
//             <div ref={mainSelectRef} className="mainSelect fixed z-30 top-0 w-full flex items-center flex-col h-screen overflow-hidden bg-black">
//                 <div id="Mainloader" className="w-full h-screen bg-black absolute top-0">
//                     <div id="keeps" className="absolute flex gap-8 left-[15%] top-1/2 transform-translate-x-1/2 -translate-y-1/2">
//                         <h1 className="text-white text-9xl font-semibold" >Keeps</h1>
//                         <h1 className="text-white text-9xl font-semibold">You</h1>
//                         <h1 className="text-white text-9xl font-semibold">Moving</h1>
//                     </div>

//                     <img className="w-full h-[70%] object-cover" src="https://images.unsplash.com/photo-1728060693031-5999c4ee6c3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                 </div>
//                 {/* <div id="red" className="w-[100%] top-[100%] h-[0vh] z-40 absolute bg-[#FF5330]"></div> */}
//                 <h1 id="play" className="text-white mt-10">CHOOSE YOUR CAR</h1>

//                 {lightImage && (
//                     <div id="lightImage" className="absolute top-0 left-0 w-full h-full z-50 bg-black flex items-center justify-center">
//                         <img
//                             className="w-[50%] h-full object-cover cursor-pointer"
//                             src={lightImage}
//                             alt=""
//                             onClick={handleLightImageClick} 
//                         />
//                     </div>
//                 )}

//                 {fullScreenImage && (
//                     <div id="Carname" className="absolute top-0 left-0 w-full h-full  bg-black flex flex-col gap-7 items-center justify-center">
//                         <h1 className="text-white text-6xl">{carName}</h1>
//                         <div className="w-[90%] flex items-center justify-center h-full">
//                             <img
//                                 ref={imgRef}
//                                 className="w-[70%] h-full object-cover object-center cursor-pointer"
//                                 src={fullScreenImage}
//                                 alt=""
//                                 onClick={() => handleFullScreenImageClick(currentAudio)} // Move mainSelect div to top on click
//                             />
//                         </div>
//                         <button
//                             className="absolute top-4 right-4 text-white text-3xl px-1 py-1 rounded-md"
//                             onClick={() => {
//                                 setFullScreenImage(null);
//                                 setCarName(null);
//                             }}
//                         >
//                             <IoMdClose />
//                         </button>
//                     </div>
//                 )}

//                 <div className="w-[90%] h-[50vh] mt-5 flex items-center justify-between duration-300 transition ease-in-out">
//                     <div
//                         onClick={() =>
//                             handleCarClick(
//                                 "https://c4.wallpaperflare.com/wallpaper/637/162/470/bmw-headlights-car-cloudy-wallpaper-preview.jpg", 
//                                 "https://c4.wallpaperflare.com/wallpaper/167/44/972/bmw-lights-headlights-x6-night-hd-black-bmw-car-wallpaper-preview.jpg", 
//                                 "Porsche",
//                                 Porsche
//                             )
//                         }
//                         className="porsche w-[28vw] h-[40vh] cursor-pointer hover:scale-105 hover:duration-300 transition ease-in-out rounded-md overflow-hidden flex items-center justify-center"
//                     >
//                         <img
//                             className="InnerImg object-[center_60%] transition ease-in-out duration-300 w-full h-[40vh] object-cover"
//                             src="https://images.unsplash.com/photo-1658982807672-4324a943b156?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                             alt=""
//                         />
//                     </div>
//                     <div
//                          onClick={() => {
//                             handleCarClick(
//                                 "https://www.theluxurycollectionwc.com/imagetag/189/5/l/New-2020-Lamborghini-Urus-Base-1603382783.jpg", 
//                                 "https://www.rollsroycelongisland.com/imagetag/2293/12/l/New-2019-Lamborghini-Urus-1544645914.jpg",
//                                 "Aston Martin",
//                                 AstonMartin
//                             );
//                             setCurrentAudio(AstonMartin); // Set audio for full screen click
//                         }}
//                         className="urus w-[28vw] h-[40vh] rounded-md overflow-hidden hover:scale-105 hover:duration-300 transition ease-in-out"
//                     >
//                         <img
//                             className="InnerImg w-full h-[40vh] object-cover"
//                             src="https://media.assettype.com/evoindia%2F2021-08%2Ffc0b9401-bad1-47ff-9361-a75672a66213%2Furus_ext_1.jpeg"
//                             alt=""
//                         />
//                     </div>
//                     <div
//                       onClick={() => {
//                         handleCarClick(
//                             "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/33641/812-exterior-front-view.jpeg?isig=0&q=80", 
//                             "https://img.goodfon.com/wallpaper/big/8/e3/badfon-ferrari-458-italia-red-840.webp",
//                             "Ferrari"
//                         );
//                         setCurrentAudio(FerrariSound); // Set audio for full screen click
//                     }}
//                         className="w-[28vw] h-[40vh] cursor-pointer hover:scale-105 hover:duration-300 transition ease-in-out rounded-md overflow-hidden"
//                     >
//                         <img
//                             className="InnerImg ferrari object-center w-full h-[40vh] object-cover"
//                             src="https://www.europeanprestige.co.uk/blobs/stock/302/images/9a2e6d29-10cc-4fcc-99dd-3efe52cc7448/hi4a6333.jpg?width=2000&height=1333"
//                             alt=""
//                         />
//                     </div>
//                 </div>

//                 <button className="text-white border mt-16 border-white w-[14vw] h-12">
//                     EXPLORE THE DRIVE
//                 </button>
//             </div>
//         </>
//     );
// };

// export default SelectCar;
