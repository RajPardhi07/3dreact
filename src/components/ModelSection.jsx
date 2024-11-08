import Header from "../components/Header";
import CanvasContainer from "../components/CanvasContainer";
import Hero from "../components/Hero";
import About from "../components/About";
import BuyNow from "../components/BuyNow";

const ModelSection = ({ show3dmodel }) => {
    return (
        <div>
            <div className="h-screen fixed top-0  z-10 w-full">

                {show3dmodel && (

                    <CanvasContainer />
                )}
            </div>
            <Header />
            <Hero />
            <About />
            <BuyNow />
        </div>
    )
}

export default ModelSection