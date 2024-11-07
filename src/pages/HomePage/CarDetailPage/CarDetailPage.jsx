import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";

const CarDetailPage = () => {

  // const images = [
  //   "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC01,$WH0A,$IW01&view=STUD_FRONT34&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&",
  //   "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IW01,$MTC01&view=INTERIOR_ROW1&model=ct&size=1920&bkba_opt=1&crop=0,0,0,0&overlay=0&",
  //   "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC01,$WH0A,$IW01&view=STUD_REAR34&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&",
  //   "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC01,$WH0A,$IW01&view=STUD_REAR34&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&"
  // ]

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  //   }, 6000)

  //   return () => clearInterval(interval);
  // }, [images.length])

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".leftside, #rightpart-wrapper", {
      xPercent: -500,
      ease: "none",
      scrollTrigger: {
        trigger: "#mainContainer",
        start: "top top",
        end: "+=" + 1000 + "%",
        pin: "#mainContainer",
        scrub: 0.5,
        markers: true
      }
    });
  }, [])




  return (
    <div id="mainContainer" className="w-full h-[100vh] xl:h-auto xl:flex  bg-slate-300">
      <div id="left-wrapper" className="xl:w-[68%] flex overflow-x-auto w-[100%]  h-[50%] xl:h-full bg-red-400">
        <div className="leftside bg-pink-400 flex-shrink-0 w-full xl:w-[68%] h-[100%] xl:h-full transition-opacity duration-1000 ease-in-out top-0">
          <img className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC01,$WH0A,$IW01&view=STUD_FRONT34&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&" alt="" />

        </div>
        <div className="leftside flex-shrink-0 w-full xl:w-[68%] h-[100%] xl:h-full transition-opacity duration-1000 ease-in-out   top-0">
          <img className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IW01,$MTC01&view=INTERIOR_ROW1&model=ct&size=1920&bkba_opt=1&crop=0,0,0,0&overlay=0&" alt="" />

        </div>
        <div className="leftside flex-shrink-0 w-full xl:w-[68%] h-[100%] xl:h-full transition-opacity duration-1000 ease-in-out   top-0">
          <img className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC01,$WH0A,$IW01&view=STUD_REAR34&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&" alt="" />

        </div>
        <div className="leftside flex-shrink-0 w-full xl:w-[68%] h-[100%] xl:h-full transition-opacity duration-1000 ease-in-out   top-0">
          <img className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC01,$WH0A,$IW01&view=STUD_FRONT34&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&" alt="" />

        </div>
        <div className="leftside flex-shrink-0 w-full xl:w-[68%] h-[100%] xl:h-full transition-opacity duration-1000 ease-in-out   top-0">
          <img className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC01,$WH0A,$IW01&view=STUD_REAR34&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&" alt="" />

        </div>
        <div className="leftside flex-shrink-0 w-full xl:w-[68%] h-[100%] xl:h-full transition-opacity duration-1000 ease-in-out   top-0">
          <img className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC01,$WH0A,$IW01&view=STUD_FRONT34&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&" alt="" />

        </div>


      </div>

      <div className="rightpartCardetail w-full mt-0 md:mt-56 xl:mt-0 h-[50%] xl:h-auto xl:w-[32%] md:flex xl:flex md:items-center xl:items-center  md:justify-center xl:justify-between overflow-auto  bg-[#111111] text-[#C7C7C7] ">
        <div id="rightpart-wrapper" className="rightpart-wrapper xl:w-[86%] flex flex-nowrap whitespace-nowrap  w-[152%]  lg:mt-[28vw] xl:mt-0 lg:block">
          <div className="rightside w-full flex pt-10  flex-col items-center  md:h-[47vh] lg:h-[36vh] xl:h-[47vh]">
            <h1 className="text-3xl md:text-5xl xl:text-3xl">AVAILABLE NOW</h1>
            <p className="text-center mt-3 text-[14px] md:text-2xl xl:text-[14px] text-[#808183]">LIMITED-EDITION | FULLY OPTIONED
            </p>
            <p className="text-center mt-1 text-[14px] md:text-2xl xl:text-[14px] text-[#808183]"> EXCLUSIVE BADGES | PREMIUM ACCESSORIES</p>

            <button className="border border-gray-600 mt-9 px-4 py-1 md:text-3xl xl:text-[15px] text-[15px] font-semibold">VIEW ALL FEATURE</button>

            <div className=" border-t tracking-wide w-[100vw]	 xl:w-[27vw] mt-10 flex  font-[gilroy] h-[8vh]">
              <button className="w-[50%] text-[16px] md:text-2xl xl:text-[16px] border-t-2 bg-gray-900  tracking-[2px]	">PURCHASE PRICE</button>
              <button className="w-[50%] text-[16px] tracking-[2px] md:text-2xl xl:text-[16px]">PROBLEM SAVING</button>
            </div>

          </div>

          <div className="rightside w-full ml-5 xl:ml-0 p-5 mt-10 md:mt-[-10vh] lg:mt-0 xl:mt-0 h-[40vh] xl:h-[55vh]  bg-[#1A1A1A] ">
            <div className="flex items-center justify-between">
              <p className="text-[19px] md:text-[30px] xl:text-[19px]">$99,990</p>
              <MdDone className="text-xl" />

            </div>
            <div className="mt-3">
              <h1 className=" text-4xl md:text-5xl xl:text-4xl">ALL-WHEEL DRIVE</h1>
              <h5 className="tracking-[2px] text-[16px] md:text-[25px] xl:text-[16px] mt-2">EST.DELIVERY:OCT - NOV 2024</h5>
            </div>

            <div className="mt-5">
              <p className="tracking-[2px]  text-[16px] md:text-[25px] xl:text-[16px]">- DUAL MOTOR ALL-WHEEL DRIVE</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px]">- 340 MI. RANGE (EST.)</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px]">- 4.1 SEC. 0-60 MPH</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px]">- 112 MPH TOP SPEED</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px]">- 600 HORSHPOWER</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px]">- 7,435 LB-FT TORQUE</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px]">- 11,000 LBS. TOWING CAPACITY</p>
            </div>

          </div>




          <div className="rightside w-full ml-5 xl:ml-0 flex flex-col p-5 mt-10 h-[40vh]">
            <div className="flex items-center justify-between">
              <p className="text-[19px] md:text-[28px] xl:text-[19px]">$198,990</p>
              <div className=" p-2 rounded-tr-lg border border-gray-800">

                <MdDone className="text-xl" />
              </div>

            </div>
            <div className="mt-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-4xl">CYBERBEAST</h1>
              <h5 className="tracking-[2px] text-[16px] md:text-[25px] xl:text-[16px] mt-2">EST.DELIVERY:OCT - NOV 2024</h5>
            </div>

            <div className="mt-5">
              <p className="tracking-[2px] text-[16px] md:text-[25px] xl:text-[16px] mt-2">- DUAL MOTOR ALL-WHEEL DRIVE</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px] mt-2">- 340 MI. RANGE (EST.)</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px] mt-2">- 4.1 SEC. 0-60 MPH</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px] mt-2">- 112 MPH TOP SPEED</p>
            </div>


          </div>

          <div className="rightside w-full ml-5 xl:ml-0 flex flex-col p-5 mt-10 h-[30vh] ">
            <div>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px] mt-2">- 600 HORSHPOWER</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px] mt-2">- 7,435 LB-FT TORQUE</p>
              <p className="tracking-[2px] md:mt-6 xl:mt-1 text-[16px] md:text-[25px] xl:text-[16px] mt-2">- 11,000 LBS. TOWING CAPACITY</p>

            </div>

            <div className="w-full flex flex-col text-[#9D9EA0] items-center mt-3  h-[20vh] ">
              <p className="text-center  mt-3 text-[14px] md:text-[25px] lg:text-[30px] xl:text-[14px]">
                All prices are shown without incentives or est. <br /> 5-year gas savings of $5,500.See Details</p>

              <button className="w-full border hover:text-white border-gray-600  text-[15px] md:text-[25px] xl:text-[15px] font-semibold tracking-[1px] mt-5 h-11 md:h-16 xl:h-11">CYBERTRUCK FEATURE</button>

            </div>
          </div>



          <div className="rightside w-full flex ml-5 xl:ml-0 flex-col  text-center p-8 h-[45vh] md:h-[60vh] lg:h-[40vh] xl:h-[60vh] mt-3 bg-[#1616166f]">
            <p className="text-[19px] md:text-[28px] xl:text-[19px]">$16,000 EST.</p>
            <h1 className="text-4xl mt-2 md:text-5xl xl:text-4xl">RANGE EXTENDER</h1>
            <h5 className="text-center mt-4 tracking-[2px] text-[13px] md:text-[25px] xl:text-[16px]">INCREASE RANGE TO 460+ MI (EST). <br />
              PRODUCTION PLANNED TO BEGIN IN EARLY  <br /> 2025. PRIORITY INSTALATION AVAILABLE.</h5>

            <div className="flex mt-5 justify-between">
              <div className="flex gap-2">

                <MdDone className="text-xl" />

                <h5 className="text-[19px] md:text-[28px] xl:text-[19px]">RESERVE TODAY</h5>
              </div>
              <p className="text-[19px] md:text-[28px] xl:text-[19px]">$2,000</p>
            </div>

            <p className="mt-4 text-[14px] md:text-[25px] xl:text-[14px]">Non-refundable reservation deposit. <br />
              Requires installation at a Tesla service center.</p>

            <button className="w-full  border hover:text-white border-gray-600  text-[15px] md:text-[25px] xl:text-[15px] font-semibold tracking-[1px] mt-5 h-11 md:h-16 lg:h-20 xl:h-11">
              LEARN MORE</button>

          </div>
          <div className="rightside w-full p-8 h-[50vh] mt-10  md:h-[50vh] lg:h-[34vh] xl:h-[50vh]">
            <h1 className="text-4xl mt-2 text-center md:text-5xl xl:text-4xl">STAINLESS STEEL <br /> EXTERIROR</h1>
            <div className="mt-5">
              <p className="tracking-[2px] text-center text-[16px] md:text-[25px] xl:text-[16px] mt-2">- DUAL MOTOR ALL-WHEEL DRIVE</p>
              <p className="tracking-[2px] text-center text-[16px] md:text-[25px] xl:text-[16px] mt-2">- 340 MI. RANGE (EST.)</p>
              <p className="tracking-[2px] text-center text-[16px] md:text-[25px] xl:text-[16px] mt-2">- 4.1 SEC. 0-60 MPH</p>
            </div>

            <button className="w-full  border hover:text-white border-gray-600  text-[15px] md:text-[25px] xl:text-[15px] font-semibold tracking-[1px] mt-9 h-11 md:h-16 xl:h-11">
              LEARN MORE</button>

          </div>


          <div className="rightside w-full ml-5 xl:ml-0 p-5 mt-10 h-[55vh] md:h-[50vh]  xl:h-[50vh]">
            <p className="text-[16px]  md:text-[28px] xl:text-[16px] tracking-[2px] text-center">INCLUDED</p>

            <div className="mt-3">
              <h1 className="text-4xl text-center md:text-5xl xl:text-4xl">PREMIUM <br /> ACCESSORIES</h1>
            </div>

            <div className="mt-5">
              <p className="tracking-[2px] text-center text-[16px] md:text-[25px] xl:text-[16px] mt-2">- ALL WEATHER INTERIOR LINERS</p>
              <p className="tracking-[2px] text-center text-[16px] md:text-[25px] xl:text-[16px] mt-2">- GLASS ROOF SUNSHADE</p>
              <p className="tracking-[2px] text-center text-[16px] md:text-[25px] xl:text-[16px] mt-2">- CENTER CONSOLE TRAY</p>

            </div>



          </div>

          <div className="rightside w-full ml-5 xl:ml-0 flex flex-col p-5 mt-10 h-[30vh] ">
            <div>
              <p className="tracking-[2px] text-[16px] md:text-[25px] xl:text-[16px] mt-2">- GEAR LOCKER DIVIDERS</p>
              <p className="tracking-[2px] text-[16px] md:text-[25px] xl:text-[16px] mt-2">- VAULT D-RINGS</p>
              <p className="tracking-[2px] text-[16px] md:text-[25px] xl:text-[16px] mt-2">- L-TRACK HOOKS</p>
              <p className="tracking-[2px] text-[16px] md:text-[25px] xl:text-[16px] mt-2">- L-TRACK BOTTOLE OPENER</p>
            </div>

            <button className="w-full  border hover:text-white border-gray-600  text-[15px] md:text-[25px] xl:text-[15px] font-semibold tracking-[1px] mt-9 h-11 md:h-16 lg:h-20 xl:h-11">
              LEARN MORE</button>
          </div>

          <div className=" rightside w-full ml-10 xl:ml-0 h-[25vh] mt-[20vh] md:mt-[20vh]  lg:mt-0 xl:mt-[20vh]">
            <h1 className="text-4xl text-center md:text-6xl xl:text-4xl">ORDER CYBERTRUCK</h1>

            <p className="text-center tracking-[1.5px] text-[16px] md:text-[25px] xl:text-[16px] mt-2">EST.DELIVERY:OCT - NOV 2024</p>

            <button className="w-full  border-t-2 hover:text-white bg-[#282828]  text-[15px] md:text-[33px] xl:text-[15px] font-semibold tracking-[1px] mt-9 h-11 md:h-24 lg:h-20 xl:h-11">
              CONTINUE</button>
          </div>



          
        </div>
      </div>
    </div>
  )
}

export default CarDetailPage