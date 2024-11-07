
const Header = () => {
    return (
        <header 
         className="z-20 absolute top-0 text-black py-2 px-16 font-extrabold tracking-widest uppercase flex justify-between items-center w-full">
            {/* logo / name */}
            <div className="flex items-center text-5xl">
                <h1 className="font-rubix text-yellow-800">3D Model Car</h1>
               
            </div>
            {/* button */}
            <button className="font-rubix p-2 bg-yellow-800 text-white font-medium rounded-lg">
                Buy Now
            </button>

        </header>
    )
}

export default Header