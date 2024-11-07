import { useRef, useState } from "react";
// import { IoMdClose } from "react-icons/io";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CarLights1 from "../assets/Lomborghini.mp4";
import CarLights2 from "../assets/RR.mp4";
import CarLights3 from "../assets/Lomborghini.mp4";


const SelectCar = ({ onAnimationComplete }) => {

    const mainSelectRef = useRef();

    // Separate refs for each video element
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

    const [isPlayingForward, setIsPlayingForward] = useState({
        car1: true,
        car2: true,
        car3: true,
    });

   

    const handleVideoClick1 = () => {
        // Create a GSAP timeline for sequencing the animations
        const tl = gsap.timeline();

        // Step 1: Increase the size of the video
        tl.to(".secondCar", {
            opacity:0,
            duration: 0.3, 
            ease: 'power1.out'
        },"do")
        .to(".thirdCar", {
            opacity:0,
            duration: 0.3, 
            ease: 'power1.out'
        }, "do")
        .to(".firstCar", {
            width: "100%",
            height: "100vh",
            top: 0,
            left: 0,
            zIndex: 999,
            duration:0.9, 
            ease: 'power1.out'
        },"-=0.1")

            // Step 2: Play the video after the resize animation starts
            .add(() => {
                if (isPlayingForward.car1) {
                    videoRef1.current.play();
                    setIsPlayingForward(prevState => ({ ...prevState, car1: false }));
                }
            }, "-=0.5");  // Slight overlap, so the video starts playing during resizing
    };


    const handleVideoClick2 = () => {
        const tl = gsap.timeline();

        // Step 1: Increase the size of the video
        tl.to(".firstCar", {
            opacity:0,
            duration: 0.4, 
            ease: 'power1.out'
        },"do")
        .to(".thirdCar", {
            opacity:0,
            duration: 0.4, 
            ease: 'power1.out'
        }, "do")
        tl.to(".secondCar", {
            width: "100%",
            height: "100vh",
            top: 0,
            left: 0,
            zIndex: 999,
            duration: 0.9,
            ease: 'power1.out'
        })

            .add(() => {
                if (isPlayingForward.car2) {
                    videoRef2.current.play();
                    setIsPlayingForward(prevState => ({ ...prevState, car2: false }));
                }
            }, "-=0.5");
    };

    const handleVideoClick3 = () => {
        const tl = gsap.timeline();

        tl.to(".firstCar", {
            opacity:0,
            duration: 0.3, 
           
        },"do")
        .to(".secondCar", {
            opacity:0,
            duration: 0.3, 
            
        }, "do")

        tl.to(".thirdCar", {
            width: "100%",
            height: "100vh",
            top: 0,
            left: 0,
            zIndex: 999,
            duration: 0.8,
            ease: 'power1.out'
        })

            .add(() => {
                if (isPlayingForward.car3) {
                    videoRef3.current.play();
                    setIsPlayingForward(prevState => ({ ...prevState, car3: false }));
                }
            }, "-=0.5");
    };
   



   

    const handleClose = () => {
        gsap.to(".firstCar", {
            scale: 0,

            opacity: 0,
            duration: 1,
            ease: "power4.in",
        });
    };

    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from("#keeps", {
            y: 70,
            opacity: 0,
            duration: 0.8,
        }, "hello")
            .to("#keeps h1", {
                y: -100,
                opacity: 0,
                duration: 1,
                stagger: {
                    each: 0.8,
                    from: "end",
                },
                ease: "power4.in",
            })
            .to("#Mainloader", {
                top: "-100%",
                opacity: 1,
                duration: 1,
                ease: "easeInOut",
            })
            .to("#red", {
                height: "50%",
                top: 0,
                delay: -1,
                duration: 1,
                ease: "easeInOut",
            })
            .to("#red", {
                height: "0%",
                delay: -0.4,
                duration: 1,
                ease: "easeInOut",
            });
    }, []);

    return (
        <>
            <div ref={mainSelectRef} className="mainSelect fixed bg-black z-30 top-0 w-full flex items-center flex-col h-screen overflow-hidden bg-[#050805]">
                 {/* <div id="Mainloader" className="w-full h-screen bg-black z-30 absolute top-0">
                    <div id="keeps" className="absolute flex gap-8 left-[15%] top-1/2 transform-translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-white text-9xl font-semibold" >Keeps</h1>
                        <h1 className="text-white text-9xl font-semibold">You</h1>
                        <h1 className="text-white text-9xl font-semibold">Moving</h1>
                    </div>

                    <img className="w-full h-[70%] object-cover" src="https://images.unsplash.com/photo-1728060693031-5999c4ee6c3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>  */}
                {/* <div id="red" className="w-[100%] top-[100%] h-[0vh] z-40 absolute bg-[#FF5330]"></div> */}

                <h1 id="play" className="text-white mt-10">CHOOSE YOUR CAR</h1>



                <div className="w-[90%] h-[50vh] mt-5 flex bg-[#000100] items-center justify-between duration-300 transition ease-in-out">
                    <div className="chooseCar  z-10   w-full h-full">
                        <div className="firstCar absolute left-[5%] top-[24%] w-[27vw] h-[45vh] rounded-md overflow-hidden cursor-pointer ">

                            <video
                                ref={videoRef1}
                                onClick={handleVideoClick1}
                                src={CarLights1}
                                playsInline
                                muted
                                className='car-light-video w-full h-full object-cover cursor-pointer'
                            />
                        </div>

                        <div className="secondCar absolute left-[35%] top-[24%] w-[28vw] h-[45vh] rounded-md overflow-hidden cursor-pointer ">

                            <video
                                ref={videoRef2}
                                onClick={handleVideoClick2}
                                src={CarLights2}
                                playsInline
                                muted
                                className='car-light-video w-full h-full object-cover cursor-pointer'
                            />
                        </div>

                        <div className="thirdCar absolute  left-[66%] top-[24%] w-[28vw] h-[45vh] rounded-md overflow-hidden cursor-pointer ">

                            <video
                                ref={videoRef3}
                                onClick={handleVideoClick3}
                                src={CarLights3}
                                playsInline
                                muted
                                className='car-light-video w-full h-full object-cover cursor-pointer'
                            />
                        </div>
                    </div>
                </div>

                <button className="text-white border mt-16 border-white w-[14vw] h-12">
                    EXPLORE THE DRIVE
                </button>
            </div>
        </>
    );
};

export default SelectCar;
