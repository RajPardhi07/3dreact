import BrandSection from "./components/BrandSection";
import Jorden from "./components/Jorden";
import ModelSection from "./components/ModelSection";
import PetsCar from "./components/PetsCar";
import Platform from "./components/Platform";
// import SelectCar from "./components/SelectCar";
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// import { Route, Routes } from "react-router-dom";
// import CarDetailPage from "./pages/HomePage/CarDetailPage/CarDetailPage";
// import HomePage from "./pages/HomePage/HomePage";
// import 'locomotive-scroll/dist/locomotive-scroll.css'
// import LocomotiveScroll from "locomotive-scroll"
// import './css/locomotive-scroll.css'



const App = () => {
  // const scrollRef = useRef(null)

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   })
  //   return () => {
  //     scroll.destroy();
  //   }
  // }, [])

  // const [show3dmodel, setShow3dmodel] = useState(false);

  // const handleAnimationComplete = () => {
  //   setShow3dmodel(true);
  // }

  return (
    <div id="main" className="scroll-container fixed top-0 left-0 overflow-scroll w-full h-[1105px]" >

      {/* {
        !show3dmodel && (

          <SelectCar onAnimationComplete={handleAnimationComplete} />
        )
      } */}
      {/* <ModelSection show3dmodel={show3dmodel} /> */}
      {/* <ModelSection /> */}
      <Jorden />
      <BrandSection />
      <PetsCar />
      <Platform />


      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cardetailpage" element={<CarDetailPage />} />

      </Routes> */}

    </div>
  )
}

export default App