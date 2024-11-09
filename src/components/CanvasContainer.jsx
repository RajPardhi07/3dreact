import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Model(props) {
  const { camera } = useThree();
  const tl = gsap.timeline();
  const { scene } = useGLTF("/free_porsche_911_carrera_4s.glb");

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

    // Initial animation to make the model appear smoothly
    gsap.from(camera.position, {
      scale: 0,
      x: 50,
      opacity: 0,
      duration: 1,
    });

    // Set different animation values based on whether it's mobile or desktop
    tl.to(camera.position, {
      x: isMobile ? 5 : 10,
      y: isMobile ? 2.0 : 4.0,
      z: isMobile ? 3 : 2.8,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(scene.position, {
        x: isMobile ? 2.0 : 3.01,
        y: isMobile ? 0.5 : 0.76,
        z: isMobile ? 2.5 : 3.7,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: isMobile ? -0.4 : -0.53,
        y: isMobile ? -3.0 : -3.48,
        z: isMobile ? -0.2 : -0.21,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(camera.position, {
        x: isMobile ? 3 : 5,
        y: isMobile ? 2 : 3.8,
        z: isMobile ? 2.5 : 2.8,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: isMobile ? 2.0 : 2.31,
        y: isMobile ? 0.2 : 0.01,
        z: isMobile ? -0.5 : -0.7,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: isMobile ? 0.4 : 0.67,
        y: isMobile ? -6.5 : -6.9,
        z: isMobile ? 0.4 : 0.79,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });
  }, [camera, scene, tl]);

  return <primitive object={scene} {...props} />;
}

const CanvasContainer = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{
        position: isMobile ? [0, 1, 3] : [0, 1.5, 5],
        fov: isMobile ? 60 : 45,
      }}
      style={{
        position: "absolute",
        left: "0%",
        zIndex: "999999999999999999",
      }}
    >
      <color attach="background" args={["transparent"]} />
      <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
      <Model scale={isMobile ? 0.5 : 0.7} />
      <Environment preset="city" />
    </Canvas>
  );
};

export default CanvasContainer;
