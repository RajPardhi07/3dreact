import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css"; // Make sure to have appropriate styles

gsap.registerPlugin(ScrollTrigger);

const BrandSection = () => {
  useEffect(() => {
    // Create GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery", // The element that triggers the animation
        start: "top top", // When the top of the gallery hits the top of the viewport
         // Scroll distance; adjust based on content size
        pin: true, // Pin the section during the scroll
        scrub: true, // Smoothly scrubs the animation timeline
        markers: true, // Show markers for debugging
        anticipatePin: 1 // Prevent sudden pinning issues
      },
    });

    // Sequence of animations
    tl.from(".BoxD", { scale: 0, opacity: 0, duration: 1 })
      .from(".BoxB", { scale: 0, opacity: 0, duration: 1 })
      .from(".BoxF", { scale: 0, opacity: 0, duration: 1 })
      .from(".BoxH", { scale: 0, opacity: 0, duration: 1 })
      .from(".BoxE", { scale: 0, opacity: 0, duration: 1 })
      .from([".BoxA", ".BoxC", ".BoxI", ".BoxG"], {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.3, // All these boxes will show together
      });
  }, []);

  return (
    <div className="gallery w-full relative py-2 flex items-center justify-center bg-black">
      <div className="mainBlock w-[90%] grid grid-cols-3 gap-7 ">
        <div className="BoxA">
          <img src="https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="BoxA" />
        </div>
        <div className="BoxB">
          <img src="https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="BoxB" />
        </div>
        <div className="BoxC">
          <img src="https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="BoxC" />
        </div>
        <div className="BoxD">
          <img src="https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="BoxD" />
        </div>
        <div className="BoxE">
          <img src="https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="BoxE" />
        </div>
        <div className="BoxF">
          <img src="https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="BoxF" />
        </div>
        <div className="BoxG">
          <img src="https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="BoxG" />
        </div>
        <div className="BoxH">
          <img src="https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="BoxH" />
        </div>
        <div className="BoxI">
          <img src="https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="BoxI" />
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
