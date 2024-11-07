import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer, OrbitControls } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import BMW from '../../../components/BMWShow';
import './SinglePage.css';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const LamborghiniModel = ({ groupRef }) => {
  const [scale, setScale] = useState(() => {
    if (window.innerWidth <= 768 ) return 0.6;
    if (window.innerWidth <= 1024 ) return 1;
    return 1.5;
  });

  const [position, setPosition] = useState(() => {
    if (window.innerWidth <= 768) return [0, 0.8, 0];
    if (window.innerWidth <= 1024) return [0, 0.8, 0];
    return [0, -1.2, 0];
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScale(0.6);
        setPosition([0, 0.8, 0]);
      } else if (window.innerWidth <= 1025) {
        setScale(0.8);
        setPosition([0, 0.8, 0]);
      } else {
        setScale(1.5);
        setPosition([0, -1.2, 0]);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <group ref={groupRef}>
      <BMW rotation={[0, Math.PI / - 5, 0]} position={position} scale={scale} />

      {/* Rotating Platform */}
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {/* <cylinderGeometry args={[3, 3, 0.2, 64]} /> */}
        <meshStandardMaterial color="gray" roughness={0.75} />
      </mesh>

      {/* Shadows */}
      <hemisphereLight intensity={7} />
      {/* <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} /> */}

      {/* Decorative rings */}
      <mesh scale={4} position={[3, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        {/* <ringGeometry args={[0.9, 1, 4, 1]} /> */}
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        {/* <ringGeometry args={[0.9, 1, 3, 1]} /> */}
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>

      {/* Lighting environment */}
      <Environment resolution={512}>
        {/* Lighting */}
        <Lightformer intensity={9} rotation-x={Math.PI / 2} position={[0, 2, 0]} scale={[10, 1, 1]} />
      </Environment>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}

      />
    </group>
  );
};



const SinglePage = () => {
  const groupRef = useRef();
  const availableRef = useRef();
  const allCarRef = useRef();
  const rightScrollRef = useRef();

  const [rotationAngle, setRotationAngle] = useState(0);
  const [currentDetail, setCurrentDetail] = useState(0);
  const [isAllCarVisible, setIsAllCarVisible] = useState(false);
  const [activeDetail, setActiveDetail] = useState(null); // Tracks which carDets div to animate

  // Array of button labels

  // Function to trigger GSAP animation when InfoBtn is clicked
  const handleInfoClick = (index) => {
    if (activeDetail !== null) {

      // gsap.to(`.button${currentDetail + 1}`, {
      //   marginTop:"-32vh",
      //   backgroundColor:"red",
      //   duration: 1,
      //   ease: 'power2.out',
      // })
      gsap.to(rightScrollRef.current, {
        top: "42%",
        duration: 1,
        ease: 'power2.out',
      })
      gsap.to(`.carDets${currentDetail + 1}`, {
        top: '55%',
        duration: 1,
        ease: 'power2.out',
      })

    }
    setActiveDetail(index);

  };
  const handleInfoClose = () => {
    if (activeDetail !== null) {
      gsap.to(rightScrollRef.current, {
        top: "87%",
        duration: 1,
        ease: 'power2.out',
      })
      gsap.to(`.carDets${currentDetail + 1}`, {
        top: '100%',
        duration: 1, // Smooth animation over 1 second
        ease: 'power2.out',
      });
    }
  };





  const isMobile = window.innerWidth <= 1024;

  const handleRotateCar = (detailIndex) => {
    // Check if groupRef.current is defined
    if (groupRef.current) {
      const newRotation = Math.PI + detailIndex - 2.4;
      gsap.to(groupRef.current.rotation, { y: newRotation, duration: 1.5, ease: 'power1.inOut' });
      setRotationAngle(newRotation);

      gsap.to(`.carDets${currentDetail + 1}`, {
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut',
        onComplete: () => {
          setCurrentDetail(detailIndex); // Set the current detail to the specified index
          gsap.to(`.carDets${detailIndex + 1}`, { opacity: 1, duration: 1, ease: 'power1.inOut' });

        }
      });
    } else {
      console.error("groupRef.current is not defined.");
    }
    setCurrentDetail(detailIndex);

  };

  useEffect(() => {
    handleRotateCar(0); // Show motorization by default
  }, []);

  // Function for "Go to next step" button
  // const handleNextStep = () => {
  //   const nextDetail = (currentDetail + 1) % 7; // Cycle through 7 details
  //   handleRotateCar(nextDetail);

  //   // Scroll the active button into view only on mobile/tablet
  //   if (isMobile) {
  //     const activeButton = document.querySelector(`.button:nth-child(${nextDetail + 2})`);
  //     if (activeButton) {
  //       // Scroll only the rightscroll div
  //       const rightScrollDiv = document.querySelector('.rightscroll');
  //       if (rightScrollDiv) {
  //         activeButton.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  //       }
  //     }
  //   }
  // };

  const handleNextStep = () => {
    const nextDetail = (currentDetail + 1) % 7; // Cycle through 7 details
    handleRotateCar(nextDetail);

    // Scroll the active button into view only on mobile/tablet
    if (isMobile) {
      const activeButton = document.querySelector(`.button${nextDetail + 1}`);
      if (activeButton) {
        // Scroll only the rightscroll div
        const rightScrollDiv = document.querySelector('.rightscroll');
        if (rightScrollDiv) {
          rightScrollDiv.scrollTo({
            left: activeButton.offsetLeft - (rightScrollDiv.offsetWidth / 2) + (activeButton.offsetWidth / 2),
            behavior: 'smooth'
          });
        }
      }
    }
  };


  const handleOpenAvailableCar = () => {
    var tl = gsap.timeline();
    tl.to(availableRef.current, {
      top: "0%",
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut'
    }).from(allCarRef.current, {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: true
    });

    setIsAllCarVisible(true); // Show the allCar div
  };

  const handleBackToCarView = () => {
    gsap.to(availableRef.current, {
      top: "100%",
      duration: 1,
      ease: 'power1.in'
    });
    setIsAllCarVisible(false); // Hide the allCar div
  };

  return (
    <div className="canvas-container xl:h-[100vh] ">
      <div className='carDets1 carDets absolute flex overflow-y-auto xl:overflow-hidden bg-[#EBEDF0] xl:bg-transparent flex-col justify-between text-black h-[45vh] xl:h-[79vh] z-30 top-[100%] lg:z-30 w-[100%] xl:w-[30vw] left-[0%] xl:left-[64%] xl:top-[3%] '>
        <button onClick={() => {
          setActiveDetail(currentDetail);
          handleInfoClose();
        }} className='text-white absolute font-light lg:text-3xl right-2 xl:hidden top-1'>Show Less</button>
        <div className='w-full flex xl:h-[28%] h-[37%]'>
          <div className='GrayBox p-3 xl:p-3 text-white w-full h-[93%]  rounded-2xl '>
            <p className='font-extralight lg:text-3xl xl:text-xl'>CONFIGUERATION</p>
            <h1 className='text-2xl lg:text-5xl xl:text-3xl'>BMW Motorization</h1>
            <p className='font-extralight text-[13px] lg:text-[19px] xl:text-[14px] mt-1'>BMW engine renowed for thier high capabilities and exhilariting  power. Designed with precision engineering and cutting edge tecjnology.</p>
          </div>

        </div>

        <div className='w-full flex flex-col justify-between xl:gap-0 gap-2 h-[70%] '>
          <div className='w-full p-[7px] text-white h-[14vh] xl:h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='xl:w-[190px] w-[130px] rounded-2xl lg:h-[130px] xl:h-[120px] object-cover' src="https://cdn.bmwblog.com/wp-content/uploads/2016/07/bmw_n63_engine.jpg" alt="" />

              <div>
                <p className='lg:text-[30px] xl:text-[17px] text-[17px]'>BMW 4.0-Liter V8</p>
                <p className='text-[13px] xl:text-[13px] lg:text-[18px] mt-1 lg:mt-0 xl:mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl mt-2'>+0,00$</p>
                <p className='text-[12px] over text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

          <div className='w-full p-[7px] text-white h-[14vh] xl:h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='xl:w-[190px] w-[130px] rounded-2xl lg:h-[130px] xl:h-[120px] object-cover' src="https://www.diariomotor.com/imagenes/picscache/750x/diferencias-twin-scroll-turbo-bmw-04_750x.jpg" alt="" />

              <div>
                <p className='lg:text-[30px] xl:text-[17px] text-[17px]'>BMW 4.0-Liter V8</p>
                <p className='text-[13px] xl:text-[13px] lg:text-[18px] mt-1 lg:mt-0 xl:mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl mt-2'>+0,00$</p>
                <p className='text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

          <div className='w-full p-[7px] text-white h-[14vh] xl:h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='xl:w-[190px] w-[130px] rounded-2xl lg:h-[130px] xl:h-[120px] object-cover' src="https://500sec.com/wp-content/uploads/2010/06/774673_1415951_3580_2560_10C574_04.jpg" alt="" />

              <div>
                <p className='lg:text-[30px] xl:text-[17px] text-[17px]'>BMW 4.0-Liter V8</p>
                <p className='text-[13px] xl:text-[13px] lg:text-[18px] mt-1 lg:mt-0 xl:mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl mt-2'>+0,00$</p>
                <p className='text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>


        </div>

      </div>
      <div className='carDets2 carDets  absolute opacity-0 flex flex-col justify-between overflow-y-auto xl:overflow-hidden bg-[#EBEDF0] xl:bg-transparent text-black z-30 top-[100%] h-[45vh] xl:h-[76vh] lg:z-30 w-[96%] xl:w-[30vw] left-[2%] xl:left-[64%] xl:top-[3%]'>
        <button onClick={() => {
          setActiveDetail(currentDetail);
          handleInfoClose();
        }} className='text-white absolute right-2 font-light lg:text-3xl xl:hidden top-1'>Show Less</button>
        <div className='w-full flex xl:h-[25%] h-[38%]'>
          <div className='GrayBox  p-2 text-white w-full h-[93%]  rounded-2xl '>
            <p className='font-extralight lg:text-3xl xl:text-xl'>CONFIGUERATION</p>
            <h1 className=' text-2xl lg:text-5xl xl:text-3xl'>Color & Appearance</h1>
            <p className='font-extralight text-[14px] lg:text-[24px] xl:text-[14px] mt-1'>Car color options allow you to personalize your vehicles and reflect your individual style.</p>
          </div>

        </div>

        <div className='w-full  flex flex-col justify-between gap-2 xl:gap-0 h-[73%] '>
          <div className='w-full p-[7px] text-white h-[15vh]  xl:h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <div className='w-[120px] xl:w-[190px] rounded-2xl xl:h-[120px] h-[110px] bg-slate-50'></div>
              <div>
                <p className='text-xl mt-2 lg:text-[30px] xl:text-[17px] text-[17px]'>Arctic Pearl (White)</p>
                <p className='xl:text-[13px] text-[12px] lg:text-[25px] mt-1 lg:mt-0 xl:mt-1  font-extralight'>Pure and pristine sophistication.</p>
                {/* <p>+0.00$</p> */}
                <p className='text-[12px] lg:text-[25px] xl:text-[12px] mt-2 text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

          <div className='w-full p-[7px] text-white h-[15vh]  xl:h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <div className='w-[120px] xl:w-[190px] rounded-2xl xl:h-[120px] h-[110px] bg-[#272E3A]'></div>

              <div>
                <p className='text-xl mt-2 lg:text-[30px] xl:text-[17px] text-[17px]'>Midnight Obsidian (Black)</p>
                <p className='xl:text-[13px] text-[12px] lg:text-[25px] mt-1 lg:mt-0 xl:mt-1  font-extralight'>Sleek and mysterious elegance.</p>
                <p className='text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300 mt-2'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

          <div className='w-full p-[7px] text-white h-[15vh]  xl:h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <div className='w-[120px] xl:w-[190px] rounded-2xl xl:h-[120px] h-[110px] bg-[#942B31]'></div>

              <div>
                <p className='text-xl mt-2 lg:text-[30px] xl:text-[17px] text-[17px]'>Crimson Blaze (Red)</p>
                <p className='xl:text-[13px] text-[12px] lg:text-[25px]  lg:mt-0 xl:mt-1 mt-1 font-extralight'>Vibarnt & nature-inspired calm</p>
                <p className='text-[12px] lg:text-[25px] xl:text-[12px] mt-2 text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>


        </div>

      </div>
      <div className='carDets3 carDets  absolute opacity-0 flex flex-col justify-between overflow-y-auto xl:overflow-hidden bg-[#EBEDF0] xl:bg-transparent text-black z-30 top-[100%] lg:z-30 w-[96%] xl:w-[30vw] left-[2%] h-[45vh] xl:h-[76vh] xl:left-[64%] xl:top-[3%] '>
        <button onClick={() => {
          setActiveDetail(currentDetail);
          handleInfoClose();
        }} className='text-white absolute font-light right-2 lg:text-3xl xl:hidden top-1'>Show Less</button>
        <div className='w-full flex xl:h-[28%] h-[37%]'>
          <div className='GrayBox xl:p-3 p-2 text-white w-full h-[93%]  rounded-2xl '>
            <p className='font-extralight lg:text-3xl xl:text-xl'>CONFIGUERATION</p>
            <h1 className=' text-2xl lg:text-5xl  xl:text-3xl'>Tires & Rims</h1>
            <p className='font-extralight  text-[14px] lg:text-[24px] xl:text-[14px] lg:mt-0 xl:mt-1 mt-1'>The manufacturer supplies a set of winter and summer tires with every new car. The vehicle is delivered with the appropriate seasonal tires.</p>
          </div>

        </div>

        <div className='w-full flex flex-col justify-between gap-2 xl:gap-0  h-[73%] xl:h-[71%] '>
          <div className='w-full p-[7px] text-white h-[15vh] xl:h-[17vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[180px] rounded-2xl lg:h-[130px] xl:h-[120px] h-[110px] object-cover' src="https://img.freepik.com/premium-psd/car-wheel-isolated-transparent-background_1092965-885.jpg?w=740" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-[13px] text-xl mt-2 lg:text-[30px] xl:text-[17px]  font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl xl:text-[13px] text-[12px] lg:text-[25px] mt-1 lg:mt-2 xl:mt-1 '>Velocity Treads</p>
                <p className=' text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

          <div className='w-full p-[7px] text-white h-[15vh] xl:h-[17vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[180px] rounded-2xl lg:h-[130px] xl:h-[120px] h-[110px] object-cover' src="https://img.freepik.com/premium-photo/tire-with-black-rim-that-says-hubcap-rim_1230151-5525.jpg?w=740" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-[13px] text-xl mt-2 lg:text-[30px] xl:text-[17px]  font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl xl:text-[13px] text-[12px] lg:text-[25px] mt-1 lg:mt-2 xl:mt-1'>TurboDrive Treads</p>
                <p className='text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

          <div className='w-full p-[7px] text-white h-[15vh] xl:h-[17vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[180px] rounded-2xl h-[110px] lg:h-[130px] xl:h-[120px] object-cover' src="https://i.pinimg.com/236x/c6/b1/f8/c6b1f879cab354bf3602eb0de28b4728.jpg" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-[13px] text-xl mt-2 lg:text-[30px] xl:text-[17px] font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl xl:text-[13px] text-[12px] lg:text-[25px] mt-1 lg:mt-2 xl:mt-1'>
                  AeroJet Wheels</p>
                <p className='text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>


        </div>

      </div>
      <div className='carDets4 carDets absolute opacity-0 flex flex-col justify-between text-black overflow-y-auto xl:overflow-hidden bg-[#EBEDF0] xl:bg-transparent z-30 top-[100%] h-[45vh] xl:h-[76vh] lg:z-30 w-[96%] xl:w-[30vw] left-[2%] xl:left-[64%] xl:top-[3%]   '>
        <button onClick={() => {
          setActiveDetail(currentDetail);
          handleInfoClose();
        }} className='text-white absolute font-light lg:text-3xl right-2 top-1'>Show Less</button>
        <div className='w-full flex h-[24%] xl:h-[20%]'>
          <div className='GrayBox p-4 text-white w-full h-[93%]  rounded-2xl '>
            <p className='font-extralight lg:text-3xl xl:text-xl'>CONFIGUERATION</p>
            <h1 className='text-2xl lg:text-5xl  xl:text-3xl'>Select Spoilers</h1>
          </div>

        </div>

        <div className='w-full flex flex-col justify-between gap-2 h-[75%] '>
          <div className='w-full p-[7px] text-white h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[190px] rounded-2xl lg:h-[130px] xl:h-[120px] h-[120px] object-cover' src="https://www.bmw.in/content/dam/bmw/common/accessories/images/f22_mperf_rear_spoiler_carbon_fibre_pn2334541_id9957_a0172769.jpg" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-[13px] text-xl mt-2 lg:text-[30px] xl:text-[17px]'>AeroBlade</p>
                <p className='text-xl xl:text-[13px] text-[13px] lg:text-[25px] lg:mt-2 xl:mt-1 mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl mt-2 xl:mt-1'>+0.00$</p>

                <p className=' text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

          <div className='w-full p-[7px] text-white xl:h-[16vh] h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[190px] rounded-2xl lg:h-[130px]  h-[120px] xl:h-[105px] object-cover' src="https://www.bmw.in/content/dam/bmw/common/accessories/images/f87_mperf_carbon_rear_spoiler_with_aerodynamic_cut_out_coloured_pn2409319_id11675_a0255609.jpg" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-[13px] text-xl mt-2 lg:text-[30px] xl:text-[17px]'>StealthWing</p>
                <p className='text-[13px]  xl:text-[13px]  lg:text-[25px] lg:mt-2 xl:mt-1 mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl mt-2 xl:mt-1'>+0.00$</p>

                <p className=' text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

          <div className='w-full p-[7px] text-white xl:h-[16vh] h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[190px]  rounded-2xl lg:h-[130px]  h-[120px] xl:h-[105px] object-cover' src="https://www.bimmerworld.com/51195A51348-BMW.jpg" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-[13px] text-xl mt-2 lg:text-[30px] xl:text-[17px]'>Turbo Sweep</p>
                <p className='text-[13px] mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl mt-2 xl:mt-1'>+0.00$</p>

                <p className='text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>


        </div>

      </div>
      <div className='carDets5 carDets   absolute opacity-0 flex flex-col justify-between  text-black overflow-y-auto xl:overflow-hidden bg-[#EBEDF0] xl:bg-transparent z-30 h-[45vh] xl:h-[76vh] top-[100%] lg:z-30 w-[96%] xl:w-[30vw] left-[2%] xl:left-[64%] xl:top-[3%]'>
        <button onClick={() => {
          setActiveDetail(currentDetail);
          handleInfoClose();
        }} className='text-white absolute font-light right-2 lg:text-3xl top-1 xl:hidden'>Show Less</button>
        <div className='w-full flex h-[30%] xl:h-[25%]'>
          <div className='GrayBox p-4 text-white w-full h-[93%]  rounded-2xl '>
            <p className='font-extralight lg:text-3xl xl:text-xl'>CONFIGUERATION</p>
            <h1 className='text-2xl lg:text-5xl  xl:text-3xl'>Select Side Mirrors</h1>
          </div>

        </div>

        <div className='w-full flex flex-col justify-between xl:gap-0 gap-2  h-[68%] xl:h-[75%]'>
          <div className='w-full p-[7px] text-white h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[190px] rounded-2xl h-[120px] object-cover' src="https://mediapool.bmwgroup.com/cache/P9/201510/P90203613/P90203613-bmw-m2-coup-with-bmw-m-performance-parts-carbon-side-mirror-cover-11-2015-2002px.jpg" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-xl mt-2 lg:mt-2 xl:mt-0   lg:text-[30px] xl:text-[17px]'>Standard mirrors</p>
                <p className='text-[13px]  text-xl xl:text-[13px]  lg:text-[25px] lg:mt-2 xl:mt-0 mt-1  font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl xl:mt-0 mt-2 lg:mt-2'>+0.00$</p>

                <p className='text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

          <div className='w-full p-[7px] text-white h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[190px] rounded-2xl h-[120px] object-cover' src="https://i.ebayimg.com/images/g/L7EAAOSwTrZde-by/s-l1200.jpg" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-xl mt-2 lg:mt-2 xl:mt-0 lg:text-[30px] xl:text-[17px]'>Altered carban mirrors</p>
                <p className='text-xl xl:text-[13px] text-[13px] lg:text-[25px] lg:mt-2 xl:mt-0  mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl xl:mt-0 mt-2 lg:mt-2'>+0.00$</p>

                <p className='text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>
          <div className='w-full p-[7px] text-white h-[18vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[190px] rounded-2xl h-[120px] object-cover' src="https://i.ebayimg.com/images/g/L7EAAOSwTrZde-by/s-l1200.jpg" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-xl mt-2 lg:mt-2 xl:mt-0 lg:text-[30px] xl:text-[17px]'>Altered carban mirrors</p>
                <p className='text-xl xl:text-[13px] text-[13px] lg:text-[25px] lg:mt-2 xl:mt-1 mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl xl:mt-0 mt-2 lg:mt-2'>+0.00$</p>

                <p className='text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>




        </div>

      </div>
      <div className='carDets6 carDets  absolute opacity-0 flex overflow-y-auto xl:overflow-hidden bg-[#EBEDF0] xl:bg-transparent flex-col h-[45vh] xl:h-[76vh] justify-between text-black z-30 top-[100%] lg:z-30 w-[96%] xl:w-[30vw] left-[2%] xl:left-[64%] xl:top-[3%]   '>
        <button onClick={() => {
          setActiveDetail(currentDetail);
          handleInfoClose();
        }} className='text-white absolute font-light lg:text-3xl right-2 top-1 xl:hidden'>Show Less</button>
        <div className='w-full flex h-[47%] xl:h-[27%] '>
          <div className='GrayBox p-3 text-white w-full h-[93%]  rounded-2xl '>
            <p className='font-extralight lg:text-3xl xl:text-xl'>CONFIGUERATION</p>
            <h1 className='text-2xl lg:text-5xl  xl:text-3xl'>Driver Assistence System</h1>
            <p className='font-extralight  lg:text-[24px] xl:text-[14px] text-[14px] mt-2 lg:mt-2 xl:mt-0'>The manufacturer supplies a set of winter and summer tires with every new car. The vehicle is delivered with the appropriate seasonal tires.</p>

          </div>

        </div>

        <div className='w-full flex flex-col justify-between xl:gap-0 gap-2 h-[72%] '>
          <div className='w-full p-[7px] text-white h-[17vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[180px] rounded-2xl h-[110px] object-cover' src="https://mediapool.bmwgroup.com/cache/P9/201510/P90203613/P90203613-bmw-m2-coup-with-bmw-m-performance-parts-carbon-side-mirror-cover-11-2015-2002px.jpg" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-xl mt-2 lg:mt-2 xl:mt-0 lg:text-[30px] xl:text-[17px]'>Standard mirrors</p>
                <p className='text-xl xl:text-[13px] text-[13px] lg:text-[25px] lg:mt-2 xl:mt-0 mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl xl:mt-0 mt-2 lg:mt-2'>+0.00$</p>

                <p className='text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>
          <div className='w-full p-[7px] text-white h-[17vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[180px] rounded-2xl h-[110px] object-cover' src="https://mediapool.bmwgroup.com/cache/P9/201510/P90203613/P90203613-bmw-m2-coup-with-bmw-m-performance-parts-carbon-side-mirror-cover-11-2015-2002px.jpg" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-xl mt-2 lg:mt-2 xl:mt-0 lg:text-[30px] xl:text-[17px]'>Standard mirrors</p>
                <p className='text-xl xl:text-[13px] text-[13px] lg:text-[25px] lg:mt-2 xl:mt-0 mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl  xl:mt-0 mt-2 lg:mt-2'>+0.00$</p>

                <p className='text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

          <div className='w-full p-[7px] text-white h-[17vh] bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3'>
              <img className='w-[180px] rounded-2xl h-[110px] object-cover' src="https://i.ebayimg.com/images/g/L7EAAOSwTrZde-by/s-l1200.jpg" alt="" />

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className=' text-xl mt-2 lg:mt-2 xl:mt-0 lg:text-[30px] xl:text-[17px]'>Altered carban mirrors</p>
                <p className='text-xl xl:text-[13px] text-[13px] lg:text-[25px] lg:mt-2 xl:mt-0 mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl xl:mt-0 mt-2 lg:mt-2'>+0.00$</p>

                <p className='text-[12px] lg:text-[25px] xl:text-[12px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>




        </div>

      </div>
      <div className='carDets7 carDets    absolute opacity-0 flex flex-col  xl:justify-between bg-[#EBEDF0]   xl:bg-transparent text-black z-30 top-[100%] lg:z-30 h-[50vh] xl:h-[76vh] w-[96%] xl:w-[30vw] left-[2%] xl:left-[64%] xl:top-[3%] '>
        <button onClick={() => {
          setActiveDetail(currentDetail);
          handleInfoClose();
        }} className='text-white absolute font-light lg:text-3xl right-2 top-1 xl:hidden'>Show Less</button>
        <div className='w-full flex h-[45%] xl:h-[30%] '>
          <div className='GrayBox xl:p-4 p-2 text-white w-full h-[93%]  rounded-2xl '>
            <p className='font-extralight lg:text-3xl xl:text-xl'>CONFIGUERATION</p>
            <h1 className='text-3xl lg:text-5xl xl:text-3xl'>BMW M2 4 Door 2024</h1>
            <p className='font-extralight  lg:text-[24px] xl:text-[14px] text-[14px] mt-2 xl:mt-3'>The manufacturer supplies a set of winter and summer tires with every new car. The vehicle is delivered with the appropriate seasonal tires.</p>

          </div>

        </div>

        <div className='w-full  flex flex-col justify-between h-[35%] xl:h-[68%] '>
          <div className='w-full p-[7px] text-white h-full bg-[#00000072] rounded-2xl'>
            <div className='flex gap-3 p-0 lg:p-3'>

              <div>
                {/* <p>TATA 4.0-Liter V8</p> */}
                <p className='text-xl xl:mt-2 mt-1 lg:text-[40px]  xl:text-[17px]'>Standard mirrors</p>
                <p className='text-xl xl:text-[13px] text-[13px] lg:text-[25px] lg:mt-2 xl:mt-1 mt-1 font-extralight'>370 kW(503), 650Nm</p>
                <p className='text-xl xl:mt-2 mt-1'>+0.00$</p>

                <p className='text-[12px] xl:text-[12px] lg:text-[30px] text-gray-300'>includes 16% Sales tax</p>
              </div>
            </div>

          </div>

        </div>

      </div>



      <div className='absolute w-[40vw]  lg:w-[30vw] xl:w-[12vw]  flex items-center justify-center lg:h-24 xl:h-11 h-14 bottom-[90%] lg:bottom-[90%] xl:bottom-[10vh]  z-30 bg-blue-500 text-white rounded-md left-[2%] lg:left-[5%] xl:left-[64%]'>
        <button className='text-[15px] lg:text-[30px] xl:text-[18px]' onClick={handleNextStep}>Go to Next Step</button>
      </div>

      <div className='carName absolute  z-30 xl:left-[5%] lg:left-[40%] left-[40%] top-[15%] lg:top-[12%] xl:top-[5%]'>
        <h4 className='text-[#F61221] text-xl lg:text-4xl tracking-[2px]'>BMW M2</h4>

      </div>


      <div ref={rightScrollRef} className="rightscroll absolute w-full flex  xl:text-[14px] lg:text-[25px] items-center overflow-x-auto lg:overflow-x-auto  xl:overflow-hidden whitespace-nowrap top-[87%] lg:top-[89.5%] xl:top-[92%]  right-[0%] gap-4 text-[16px] xl:right-12 lg:right-[0%] p-1  xl:w-[50vw] lg:w-full rounded-md bg-[#00000072] h-[12vh] xl:h-[6.4vh] lg:h-[10vh]  lg:flex justify-around z-20">

        <div className='bg-black text-white flex items-center justify-center text-center text-[15px] xl:text-[15px] lg:text-[25px] px-2 xl:px-0 h-12 lg:h-14 xl:h-10 lg:px-4 rounded-md'>
          <p className='xl:px-2'>BMW M2 4Door 2024</p>
        </div>
        <div className='flex flex-col transition-all'>
          {currentDetail === 0 && (
            <button
              className="info1  text-white mt-[-3vh] xl:hidden xl:mt-[-3vh] lg:text-[30px] lg:mt-[-3.4vh] transition-all rounded-md"
              onClick={() => handleInfoClick(0)}
            >
              Info
            </button>
          )}
          <button
            onClick={() => handleRotateCar(0)}
            className={`button1 button ${currentDetail === 0 ? 'bg-white h-12 transition-all z-40 lg:h-14 xl:h-10 w-30 px-2 lg:px-3 rounded-md' : 'bg-black transition-all rounded-md text-white h-12 lg:h-14 w-30 px-2 xl:h-10'}`}>
            Motorization
          </button>
        </div>

        <div className='flex flex-col transition-all '>
          {currentDetail === 1 && (
            <button
              className="info2 transition-all	 text-white xl:hidden mt-[-3vh] xl:mt-[-3vh]  lg:text-[30px] lg:mt-[-3.4vh]"
              onClick={() => handleInfoClick(1)}
            >
              Info
            </button>
          )}


          <button
            onClick={() => handleRotateCar(1)}
            className={`button2 button ${currentDetail === 1 ? 'bg-white transition-all lg:h-14 h-12 w-30 xl:h-10 px-2 lg:px-3 rounded-md' : 'bg-black lg:h-14 transition-all rounded-md text-white h-12 w-30 px-3 xl:h-10'}`}>
            Color
          </button>
        </div>

        <div className='flex flex-col '>
          {currentDetail === 2 && (
            <button
              className="info3  text-white mt-[-3vh] xl:hidden xl:mt-[-3vh] lg:text-[30px] lg:mt-[-3.4vh]"
              onClick={() => handleInfoClick(2)}
            >
              Info
            </button>
          )}

          <button
            onClick={() => handleRotateCar(2)}
            className={`button3 button ${currentDetail === 2 ? 'bg-white px-2 lg:h-14 w-30 h-12 xl:h-10 lg:px-3 rounded-md' : 'bg-black lg:h-14 rounded-md text-white h-12 w-30 px-2 xl:h-10'}`}>
            Tires
          </button>
        </div>

        <div className='flex flex-col '>
          {currentDetail === 3 && (
            <button
              className="info4  text-white mt-[-3vh] xl:hidden xl:mt-[-3vh] lg:text-[30px]   lg:mt-[-3.4vh]"
              onClick={() => handleInfoClick(3)}
            >
              Info
            </button>
          )}
          <button
            onClick={() => handleRotateCar(3)}
            className={`button4 button ${currentDetail === 3 ? 'bg-white  h-12 w-30 lg:h-14 px-2 xl:h-10 lg:px-3 rounded-md' : 'bg-black lg:h-14 rounded-md text-white h-12 w-30 px-2 xl:h-10'}`}>
            Spoilers
          </button>

        </div>

        <div className='flex flex-col'>
          {currentDetail === 4 && (
            <button
              className="info5  text-white mt-[-3vh] xl:hidden xl:mt-[-3vh] lg:text-[30px] lg:mt-[-3.4vh]"
              onClick={() => handleInfoClick(4)}
            >
              Info
            </button>
          )}


          <button
            onClick={() => handleRotateCar(4)}
            className={`button5 button ${currentDetail === 4 ? 'bg-white h-12 lg:h-14 w-30 px-2 xl:h-10  lg:px-3 rounded-md' : 'bg-black lg:h-14 rounded-md text-white h-12 w-30 px-2 xl:h-10'}`}>
            Mirrors
          </button>

        </div>
        <div className='flex flex-col '>
          {currentDetail === 5 && (
            <button
              className="info6  text-white mt-[-3vh] xl:hidden xl:mt-[-3vh] lg:text-[30px] lg:mt-[-3.4vh]"
              onClick={() => handleInfoClick(5)}
            >
              Info
            </button>
          )}


          <button
            onClick={() => handleRotateCar(5)}
            className={`button6 button ${currentDetail === 5 ? 'bg-white lg:h-14  h-12 w-30 px-2 xl:h-10 lg:px-3 rounded-md' : 'bg-black lg:h-14 rounded-md text-white h-12 w-30 px-2 xl:h-10'}`}>
            Driver
          </button>
        </div>

        <div className='flex flex-col'>

          {currentDetail === 6 && (
            <button
              className="info7  text-white mt-[-3vh] xl:hidden xl:mt-[-3vh] lg:text-[30px] lg:mt-[-3.4vh]"
              onClick={() => handleInfoClick(6)}
            >
              Info
            </button>
          )}


          <button
            onClick={() => handleRotateCar(6)}
            className={`button7 button ${currentDetail === 6 ? 'bg-white lg:h-14  h-12 w-30 px-2 xl:h-10 lg:px-3 rounded-md' : 'bg-black lg:h-14 rounded-md text-white h-12 w-30 px-2 xl:h-10'}`}>
            Configuration
          </button>
        </div>

      </div>

      <button onClick={handleOpenAvailableCar} id='AvailableBtn'
        className='text-white absolute bottom-[90%] lg:bottom-[90%] lg:w-[35vw] xl:w-[15vw] xl:h-10 xl:text-[18px] lg:h-24 xl:bottom-[83%] z-30 text-[17px] lg:text-[30px] rounded-md h-[6.4vh] left-44 lg:left-[60vw] xl:left-10 px-2 lg:px-5 font-light bg-[#6F7071] font-[gilroy]'>Available For Purchase</button>


      {isAllCarVisible && (
        <div ref={availableRef} className='absolute w-full flex items-center justify-center h-screen bg-black z-30 top-[100%]'>
          <button onClick={handleBackToCarView} id='BackBtn' className='text-white absolute top-3 lg:top-5 z-30 text-[17px] rounded-md  h-[6.4vh] right-5 px-5 font-light bg-[#6F7071] font-[gilroy]'>
            Back to Car View</button>


          <div ref={allCarRef}
            className='allCar grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-14'>
            <Link to="/cardetailpage">
              <div className="w-[80vw] lg:w-[27vw] h-[25vh] lg:h-[23vw] overflow-hidden rounded-md border border-gray-700">
                <img className="h-[80%] w-full object-cover" src="https://www.motortrend.com/uploads/2023/11/017-2023-BMW-M2-Manual-front-three-quarter-view.jpg" alt="" />
                <div className='h-[20%] w-full pt-1 rounded-br-md rounded-bl-md '>

                  <h3 className="text-xl text-center text-white font-semibold">BMW M2 Series  </h3>
                  <p className="text-[17px] text-center  text-gray-400 font-light">Model 2018 </p>
                </div>

              </div>

            </Link>

            <Link to="/cardetailpage">
              <div className="w-[80vw] lg:w-[27vw] h-[25vh] lg:h-[23vw] overflow-hidden rounded-md border border-gray-700">
                <img className="h-[80%] w-full object-cover" src="https://mediapool.bmwgroup.com/cache/P9/202009/P90399203/P90399203-the-new-bmw-m4-competition-coup-09-2020-600px.jpg" alt="" />
                <div className='h-[20%] w-full pt-1 rounded-br-md rounded-bl-md '>

                  <h3 className="text-xl text-center text-white font-semibold">BMW M2 Series </h3>
                  <p className="text-[17px] text-center  text-gray-400 font-light">Model 2022 </p>
                </div>
              </div>
            </Link>

            <Link to="/cardetailpage">

              <div className="w-[80vw] lg:w-[27vw] h-[25vh] lg:h-[23vw] overflow-hidden rounded-md border border-gray-700">
                <img className="h-[80%] w-full object-cover" src="https://cdn.bimmertoday.de/wp-content/uploads/2022/05/BMW-M4-CSL-2022-Frozen-Brooklyn-Grey-G82-03-750x500.jpg" alt="" />
                <div className='h-[20%] w-full pt-1 rounded-br-md rounded-bl-md '>

                  <h3 className="text-xl text-center text-white font-semibold">BMW M2 Series </h3>
                  <p className="text-[17px] text-center  text-gray-400 font-light">Model 2024 </p>
                </div>
              </div>
            </Link>


          </div>

        </div>
      )}



      <Canvas className="full-screen-canvas ml-0 xl:ml-[-35vh]" gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 25 }}>
        <color attach="background" args={['#ebedf0']} />

        <LamborghiniModel groupRef={groupRef} />

      </Canvas>


    </div>
  );
}

export default SinglePage;