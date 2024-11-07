import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {

    useGSAP(() => {
        gsap.utils.toArray(".col1").forEach((col, i) => {
            gsap.fromTo(
                col,
                { x: "100%", opacity: 0 }, // Start off-screen to the right
                {
                    x: "0%", // Come to its natural position
                    opacity: 1, // Fade in
                    scrollTrigger: {
                        trigger: col,
                        scroller: "body",
                        start: "top 160%", // Start the animation when the col is 90% from the top
                        end: "top 10%", // End the animation when the col is 10% from the top
                        scrub: true, // Smooth animation on scroll
                        toggleActions: "play reverse play reverse", // Play when scrolling down, reverse when scrolling up
                    },
                }
            );
        });

        let crsr = document.querySelector(".cursor")
        var boxes = document.querySelectorAll(".col1")
        boxes.forEach(function (elem) {
            elem.addEventListener("mouseenter", function () {
                var att = elem.getAttribute(".data-image")
                crsr.style.width = "470px"
                crsr.style.height = "330px"
                crsr.style.borderRadius = "0"
                crsr.style.backgroundImage = `url(${att})`
                crsr.style.transform = "translate(-50%, -50%)"
                // att.style.zIndex = 99

            })

            elem.addEventListener("mouseleave", function () {
                elem.style.backgroundColor = "transparent"
                crsr.style.width = "20px"
                crsr.style.height = "20px"
                crsr.style.borderRadius = "50%"
                crsr.style.backgroundImage = `none`
            })
        })
    }, [])


    return (
        <div className="w-full  overflow-hidden flex  bg-white">
            <div className="cursor w-4 h-4 absolute "></div>

            <div className="contast w-[40%]  h-full ">
                <h1>DISCOVER OUR BRANDS</h1>
            </div>
            <div className="w-[60%] h-full">
                {/* Repeat divs with class col1 */}
                <div className="col1  w-full border-b border-black flex items-center justify-between mt-3 h-[25vh]">
                    {/* <img className="data-image" src="https://images.unsplash.com/photo-1625437102832-c612670e3d2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                    <div className="flex flex-col">
                        <h1 className="text-5xl">ASTON MARTIN</h1>
                        <p className="mt-2">Artura Spider</p>
                    </div>
                    <img className="" src="https://pictures.dealer.com/b/bentleybeverlyhills/1438/5a9175d91b8bc6a42e822afcba06fe12x.jpg" alt="" />
                </div>
                <div className="col1 border-b border-black w-full mt-3 h-[25vh] flex items-center justify-between bg-white">
                    {/* <img className="data-image" src="https://images.unsplash.com/photo-1625437102832-c612670e3d2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

                    <div className="flex flex-col">
                        <h1 className="text-5xl">BENTLEY</h1>
                        <p className="mt-2">Artura Spider</p>
                    </div>
                    <img src="https://www.ogaracoach.com/v8/global/images/franchise/white/logo-bentley-sm.png" alt="" />
                </div>
                <div className="col1 border-b border-black w-full flex items-center justify-between mt-3 h-[25vh] bg-white">
                    {/* <img className="data-image" src="https://images.unsplash.com/photo-1625437102832-c612670e3d2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

                    <div className="flex flex-col">
                        <h1 className="text-5xl">BUGATTI</h1>
                        <p className="mt-2">Artura Spider</p>
                    </div>
                    <img src="https://www.ogaracoach.com/v8/global/images/franchise/white/logo-bugatti-sm.png" alt="" />

                </div>
                <div className="col1 border-b border-black w-full flex items-center justify-between mt-3 h-[25vh] bg-white">
                    {/* <img className="data-image" src="https://images.unsplash.com/photo-1625437102832-c612670e3d2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

                    <div className="flex flex-col">
                        <h1 className="text-5xl">LAMBORGHINI</h1>
                        <p className="mt-2">Artura Spider</p>
                    </div>
                    <img src="https://pictures.dealer.com/o/ogaracoachcompanywestlakevillage/1234/fba7f6a1f7b94122bca10a3275188c6f.png" alt="" />
                </div>
                <div className="col1 border-b border-black w-full flex items-center justify-between mt-3 h-[25vh] bg-white">
                    {/* <img className="data-image" src="https://images.unsplash.com/photo-1625437102832-c612670e3d2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

                    <div className="">
                        <h1 className="text-5xl">MCLAREN</h1>
                        <p className="mt-2">Artura Spider</p>
                    </div>
                    <img src="https://www.ogaracoach.com/v8/global/images/franchise/white/logo-mclaren-sm.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
