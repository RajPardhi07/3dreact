import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import '../css/demo.css'; // Assuming the CSS for styling

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
    const [progress, setProgress] = useState(0);
    const loaderRef = useRef(null);
    const demoWrapperRef = useRef(null);

    useEffect(() => {
        const images = Array.from(demoWrapperRef.current.querySelectorAll("img"));
        const updateProgress = (instance) => {
            setProgress(Math.round((instance.progressedCount * 100) / images.length));
        };

        const showDemo = () => {
            document.body.style.overflow = "auto";
            document.scrollingElement.scrollTo(0, 0);
            gsap.to(loaderRef.current, { autoAlpha: 0 });

            gsap.utils.toArray("section").forEach((section, index) => {
                const wrapper = section.querySelector(".wrapper");
                const [x, xEnd] =
                    index % 2
                        ? ["100%", (wrapper.scrollWidth - section.offsetWidth) * -1]
                        : [wrapper.scrollWidth * -1, 0];

                gsap.fromTo(
                    wrapper,
                    { x },
                    {
                        x: xEnd,
                        scrollTrigger: {
                            trigger: section,
                            scrub: 0.5,
                        },
                    }
                );
            });
        };

        // Load images and update progress
        imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
    }, []);

    return (
        <div className="demo-wrapper" ref={demoWrapperRef}>
            {/* Loader Section */}
            <div className="loader df aic jcc" ref={loaderRef}>
                <div>
                    <h1>Loading</h1>
                    <h2 className="loader--text">{progress}%</h2>
                </div>
            </div>

            {/* Header */}
            <header className="df aic jcc bg-white">
                <div>
                    <h1>ScrollTrigger</h1>
                    <h2>demo</h2>
                </div>
            </header>

            {/* Text Section */}
            <section className="demo-text">
                <div className="wrapper text">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
            </section>

            {/* Gallery Sections */}
            {[...Array(4)].map((_, i) => (
                <section className="demo-gallery" key={i}>
                    <ul className="wrapper">
                        {[...Array(Math.floor(Math.random() * 2) + 3)].map((_, j) => (
                            <li key={j}>

                                <div className="col w-[20vw] h-[40vh] bg-black">
                                    <h1 className="text-white">Aston martin</h1>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            {/* Another Text Section */}
            <section className="demo-text">
                <div className="wrapper text">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
            </section>

            {/* Footer */}
            <footer className="df aic jcc">
                <p>
                    Images from <a href="https://unsplash.com/">Unsplash</a>
                </p>
            </footer>
        </div>
    );
};

export default Demo;
