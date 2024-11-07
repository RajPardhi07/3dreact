import { useGSAP } from "@gsap/react";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Model(props) {
  const { camera } = useThree();
  const tl = gsap.timeline();
  useGSAP(() => {
    new ScrollTrigger({});
    gsap.from(camera.position, {
      scale: 0,
      x: 50,
      opacity: 0,
      duration: 1,

    })
    // component About.tsx
    tl.to(camera.position, {
      x: 10,
      y: 4.0,
      z: 2.8,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        // markers: true
      },
    })
      .to(scene.position, {
        x: 3.01,
        y: 0.76,
        z: 3.7,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true

        },
      })

      .to(scene.rotation, {
        x: -0.53,
        y: -3.48,
        z: -0.21,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true

        },
      })

      // component - BuyNow.tsx
      .to(camera.position, {
        x: 5,
        y: 3.8,
        z: 2.8,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true

        },
      })
      .to(scene.position, {
        x: 2.31,
        y: 0.01,
        z: -0.7,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true

        },
      })
      .to(scene.rotation, {
        x: 0.67,
        y: -6.9,
        z: 0.79,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true

        },
      });


  }, [])


  const { scene } = useGLTF("/free_porsche_911_carrera_4s.glb");
  return <primitive object={scene} {...props} />;
}

const CanvasContainer = () => {
  return (

    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{
        position: [0, 1.5, 5],
        fov: 45,
      }}

    >
      <color attach="background" args={["transparent"]} />
      {/* Use OrbitControls to disable rotation and zoom */}
      <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />

      <Model scale={0.7} />
      <Environment preset="city" />
    </Canvas>


  );
};
// position: [3.74, 2.23, 1.22],

export default CanvasContainer;


// style={{ position: "absolute", left: "0%" , zIndex:"999999999999999999"}}