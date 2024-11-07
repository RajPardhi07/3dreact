import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function Model(props) {
  const { scene } = useGLTF("/tech_pedestal.glb");
  const ref = useRef();
  const [autoRotate, setAutoRotate] = useState(true);

  // Automatic rotation logic for the pedestal model
  useFrame((state, delta) => {
    if (autoRotate) {
      ref.current.rotation.y += delta * 0.5; // Adjust the speed
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
}

function CarModel(props) {
  const { scene } = useGLTF("/range_rover_l405.glb");
  const ref = useRef();
  const [autoRotate, setAutoRotate] = useState(true);

  // Automatic rotation logic for the car model
  useFrame((state, delta) => {
    if (autoRotate) {
      ref.current.rotation.y += delta * 0.5; // Adjust the speed
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
}

const FeatureSection = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45, position: [0, 1.5, 5] }}
      style={{ position: "absolute", zIndex: "50" }}
    >
      <color attach="background" args={["black"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={false} // Disable zoom
        polar={[-0.1, Math.PI / 4]}
        onChange={() => {
          // Disable auto-rotate during user interaction
          setAutoRotate(false);
        }}
        onEnd={() => {
          // Resume auto-rotate when interaction ends
          setAutoRotate(true);
        }}
      >
        <Stage environment={"sunset"}>
          <Model scale={0.015} />
          <CarModel scale={0.015} position={[0, 0.04, 0]} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default FeatureSection;
