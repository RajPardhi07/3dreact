import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import Lamborghini from './Lamborghini';
import '../css/Platfrom.css';


const LamborghiniModel = () => {
  const groupRef = useRef();
  const controlsRef = useRef();
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.01); 

  
  useFrame(() => {
    if (!isUserInteracting && groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });
  
  const handleStartInteraction = () => setIsUserInteracting(true);
  const handleEndInteraction = () => setIsUserInteracting(false);

  // Detect manual rotation and change direction accordingly
  const handleManualRotation = () => {
    const currentRotation = controlsRef.current.getAzimuthalAngle();
    const newRotationSpeed = currentRotation > 0 ? -0.01 : 0.01; // Invert direction based on user rotation
    setRotationSpeed(newRotationSpeed);
  };

  return (
    <group ref={groupRef}>
      {/* Lamborghini Car */}
      <Lamborghini rotation={[0, Math.PI / 1.5, 0]} scale={0.015} />

      {/* Rotating Platform */}
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {/* <cylinderGeometry args={[3, 3, 0.2, 64]} /> */}
        <meshStandardMaterial color="gray" roughness={0.75} />
      </mesh>

      {/* Shadows */}
      <hemisphereLight intensity={0.5} />
      {/* <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} /> */}

      {/* Decorative rings */}
      <mesh scale={4} position={[3, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>

      {/* Lighting environment */}
      <Environment resolution={512}>
        {/* Lighting */}
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
      </Environment>

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
        onStart={handleStartInteraction}
        onEnd={() => {
          handleEndInteraction();
          handleManualRotation();
        }}
      />
    </group>
  );
};

const Platform = () => {
  return (
    <div className="canvas-container">
      <div className='carDets absolute text-white z-30 w-[13vw] right-16 bottom-[10%]  h-[75vh] '>
        <div className='w-full h-36 '>
          <p className='border-b border-gray-600 pb-2 text-[16px] tracking-[2px]'>WEIGHT</p>
          <div className='flex mt-3 gap-10'>
          <h1 className='text-6xl font-normal'>1875</h1>
          <h3 className='text-[25px] text-[#D2C7AE]'>KG</h3>
          </div>

        </div>
        <div className='w-full h-36 '>
          <p className='border-b border-gray-600 pb-2 text-[16px] tracking-[2px]'>LENGTH</p>
          <div className='flex mt-3 gap-10'>
          <h1 className='text-6xl font-normal'>4771</h1>
          <h3 className='text-[25px] text-[#D2C7AE]'>MM</h3>
          </div>

        </div>
        <div className='w-full h-36 '>
          <p className='border-b border-gray-600 pb-2 text-[16px] tracking-[2px]'>WIDTH</p>
          <div className='flex mt-3 gap-10'>
          <h1 className='text-6xl font-normal'>2382</h1>
          <h3 className='text-[25px] text-[#D2C7AE]'>MM</h3>
          </div>

        </div>
        <div className='w-full h-36 '>
          <p className='border-b border-gray-600 pb-2 text-[16px] tracking-[2px]'>HEIGHT</p>
          <div className='flex mt-3 gap-10'>
          <h1 className='text-6xl font-normal'>1242</h1>
          <h3 className='text-[25px] text-[#D2C7AE]'>MM</h3>
          </div>

        </div>

      </div>

      <div className='carName absolute z-30 left-[10%] top-[10%] w-[20vw]'>
        <h4 className='text-[#F61221] text-4xl tracking-[2px]'>LAMBORGHINI URUS</h4>
        <p className='text-[#949494] mt-4 font-[gilroy]'>SUPER  SPORT  UTILITY  VEHICAL</p>

      </div>
      <Canvas className="full-screen-canvas" gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 25 }}>
        <color attach="background" args={['#15151a']} />
  

        <LamborghiniModel />
      
      </Canvas>


    </div>
  );
};

export default Platform;
