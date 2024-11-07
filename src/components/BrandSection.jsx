import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import "../css/Brand.css";
import 'react-h5-audio-player/lib/styles.css';
import Lamborginisound from "../assets/lamborghini.mp3"
import FerrariSound from "../assets/ferrari.mp3";
import AstonMartin from "../assets/astonmartin.mp3";
import Porsche from "../assets/porsche-105500.mp3";
import MercedesSound from "../assets/mercedes.mp3";
import BMW from "../assets/bmw.mp3";
import Bently from "../assets/bently.mp3";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);


const BrandSection = () => {
    const audioRef = useRef(new Audio());



    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".gallery",
    //             start: "top top",
    //             end: "+=100%",
    //             pin: true,
    //             scrub: true,
    //             onEnter: () => tl.play(),   // Automatically complete animation forward
    //             onEnterBack: () => tl.reverse(),  // Automatically reverse animation on scroll back
    //             snap: {
    //                 snapTo: 1,  // Snap to the next section in the timeline
    //                 duration: { min: 0.2, max: 1 },  // Duration to smooth out snapping
    //                 ease: "power1.inOut"
    //             }
    //         },
    //     });

    //     tl.fromTo(".BoxD",
    //         { scale: 0, opacity: 0 },
    //         { scale: 1, opacity: 1, duration: 1.1 })
    //         .to(".BoxD", { opacity: 0, duration: 1 }, "-=0.5") // Start fade out, overlapping with next
    //         .fromTo(".BoxB",
    //             { scale: 0, opacity: 0 },
    //             { scale: 1, opacity: 1, duration: 1.1 }, "-=0.5") // Start fade in while BoxD is fading out
    //         .to(".BoxB", { opacity: 0, duration: 1 }, "-=0.5")
    //         .fromTo(".BoxF",
    //             { scale: 0, opacity: 0 },
    //             { scale: 1, opacity: 1, duration: 1.1 }, "-=0.5")
    //         .to(".BoxF", { opacity: 0, duration: 1 }, "-=0.5")
    //         .fromTo(".BoxH",
    //             { scale: 0, opacity: 0 },
    //             { scale: 1, opacity: 1, duration: 1.1 }, "-=0.5")
    //         .to(".BoxH", { opacity: 0, duration: 1 }, "-=0.5")
    //         .fromTo(".BoxE",
    //             { scale: 0, opacity: 0 },
    //             { scale: 1, opacity: 1, duration: 1.1 }, "-=0.5")
    //         .to(".BoxE", { opacity: 0, duration: 1 }, "-=0.5")
    //         .from([".BoxA", ".BoxC", ".BoxI", ".BoxG"],
    //             { scale: 0, opacity: 0, duration: 1.2, stagger: 0 }, "-=0.5")

    //         .to([".BoxA", ".BoxB", ".BoxC", ".BoxD", ".BoxE", ".BoxF", ".BoxG", ".BoxH", ".BoxI"],
    //             { opacity: 1, duration: 1 }, "<"); // Show all images together at the end
    // }, []);


    useGSAP(() => {
let BoxA = document.querySelector(".BoxA");

BoxA.addEventListener("mouseenter", () => {
    gsap.to("#logo", {
        scale:0,
        y:90,
        duration:2,
        ease:"ease"
    })
})

BoxA.addEventListener("mouseleave", () => {
    gsap.to("#logo", {
        scale:1,
        y:10,
        
        duration:1.1
    })
})
    }, [])

    const handleMouseEnter = (audiosrc) => {
        if (audioRef.current) {
            audioRef.current.pause(); // Pause the previous audio if any
        }
        const newAudio = new Audio(audiosrc);
        newAudio.play();
        audioRef.current = newAudio;
        // Update the current audio reference
    }

    const handleMouseLeave = () => {
        if (audioRef.current) {
            audioRef.current.pause(); // Pause the audio when mouse leaves
            audioRef.current.currentTime = 0; // Reset to the beginning
        }
    };

    return (
        <div className="gallery relative w-full h-screen z-40  py-2 flex items-center justify-center bg-black">




            <div className="mainBlock w-[90%] mt- ml-7 grid grid-cols-3 gap-7 h-full ">
                <div onMouseEnter={() => handleMouseEnter(AstonMartin)}
                    onMouseLeave={handleMouseLeave}
                    className="BoxA relative w-[21vw] h-[13vw] bg-white hover-image ">
                    <img id="logo" className="logo w-full absolute h-full object-cover" src="https://cdn.freebiesupply.com/logos/large/2x/aston-martin-logo-png-transparent.png" alt="" />
                    <img className="hidden-image absolute top-0 left-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1571753753463-636443ad284c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div onMouseEnter={() => handleMouseEnter(FerrariSound)}
                    onMouseLeave={handleMouseLeave}
                    className="BoxB w-[21vw] h-[12vw] hover-image">
                    <img className="logo w-full h-full object-cover" src="https://static.vecteezy.com/system/resources/previews/020/500/228/original/ferrari-brand-logo-car-symbol-black-design-italian-automobile-illustration-free-vector.jpg" alt="" />
                    <img className="hidden-image absolute top-0 left-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div onMouseEnter={() => handleMouseEnter(Lamborginisound)}
                    onMouseLeave={handleMouseLeave}
                    className="BoxC w-[21vw] h-[12vw] bg-white hover-image relative ">
                    <img className="logo w-full h-full object-cover" src="https://logos-world.net/wp-content/uploads/2021/03/Lamborghini-Emblem.png" alt="" />
                    <img className="hidden-image absolute top-0 left-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1621688285384-92e5019db2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div onMouseEnter={() => handleMouseEnter(Bently)}
                    onMouseLeave={handleMouseLeave}
                    className="BoxD w-[21vw] h-[12vw] bg-white hover-image relative">
                    <img className="logo w-full h-full object-cover" src="https://pngimg.com/d/bentley_PNG21.png" alt="" />
                    <img className="hidden-image absolute top-0 left-0 w-full h-full object-cover" src="https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/models/25my/25my-gt-testing/Dynamic%20Stage%20Main%20v2.jpg/_jcr_content/renditions/original.image_file.1824.782.file/Dynamic%20Stage%20Main%20v2.jpg" alt="" />
                </div>
                <div onMouseEnter={() => handleMouseEnter(BMW)}
                    onMouseLeave={handleMouseLeave}
                    className="BoxE w-[21vw] h-[12vw] hover-image relative">
                    <img className="logo w-full h-full object-cover" src="https://thumbs.dreamstime.com/b/bmw-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-bmw-logo-editorial-illustrative-white-208329176.jpg" alt="" />
                    <img className="hidden-image absolute top-0 left-0 w-full h-full object-cover" src="https://www.bmw.in/content/dam/bmw/common/topics/fascination-bmw/concept-vehicles/concept-m8/bmw-f93-cv-onepager-exterior-attitude-sd-04.jpg" alt="" />
                </div>
                <div onMouseEnter={() => handleMouseEnter(Porsche)}
                    onMouseLeave={handleMouseLeave}
                    className="BoxF w-[21vw] h-[12vw] bg-white hover-image relative">
                    <img className="logo w-full h-full object-cover" src="https://di-uploads-pod3.dealerinspire.com/porscheoffremont/uploads/2018/09/porsche-logo.jpg" alt="" />
                    <img className="hidden-image absolute top-0 left-0 w-full h-full object-cover" src="https://cdni.autocarindia.com/ExtraImages/20220428060534_Porsche_911_Sport_Classic_2023_front.jpg" alt="" />
                </div>
                <div onMouseEnter={() => handleMouseEnter(FerrariSound)}
                    onMouseLeave={handleMouseLeave}
                    className="BoxG w-[21vw] h-[12vw] bg-white hover-image relative">
                    <img className="logo w-full h-full object-cover" src="https://thumbs.dreamstime.com/b/jaguar-logo-paris-august-seen-white-background-157672465.jpg" alt="" />
                    <img className="hidden-image absolute top-0 left-0 w-full h-full object-cover" src="https://www.usatoday.com/gcdn/-mm-/bb6ba837e3b4cc8b83497a20e0d554b686454d18/c=1477-1748-3870-3547/local/-/media/2016/02/16/USATODAY/USATODAY/635912498290797316-JAGUAR-F-TYPE-SVR-01-COUPE-Location.jpg" alt="" />
                </div>
                <div onMouseEnter={() => handleMouseEnter(FerrariSound)}
                    onMouseLeave={handleMouseLeave}
                    className="BoxH w-[21vw] h-[12vw] bg-white hover-image relative">
                    <img className="logo w-full h-full object-cover" src="https://images-stag.jazelc.com/uploads/theautopian-m2en/bugatti_logo_idea2.jpg" alt="" />
                    <img className="hidden-image absolute top-0 left-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1685933198220-9961c323e68b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>
                <div onMouseEnter={() => handleMouseEnter(MercedesSound)}
                    onMouseLeave={handleMouseLeave}
                    className=" BoxI w-[21vw] h-[12vw] bg-white hover-image relative">
                    <img className="logo w-full h-full object-cover" src="https://i.pinimg.com/originals/9a/a9/5b/9aa95b12764a3b11b97947893e4ee0c0.png" alt="" />
                    <img className="hidden-image absolute top-0 left-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1616788414905-46e9019f204f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>

            </div>
        </div>
    )
}

export default BrandSection