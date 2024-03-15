import "./Banner.css"
const Banner = () => {
    return (
        <div className="w-full h-[560px] my-5 rounded-2xl flex items-center justify-center banner-bg">
            <div className="max-w-5xl flex flex-col gap-2 justify-center items-center text-white text-center w-full">
                <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-5 max-w-4xl">Cooking is an art that transcends mere sustenance, embodying a fusion of flavors, textures, and aromas that tantalize the senses. From the sizzle of onions in a hot skillet to the delicate balance of spices in a curry, each dish tells a story of culture. </p>
                <div className="flex gap-7">
                    <button className="btn text-black text-[20px] px-8 font-bold border-0 rounded-full bg-[#0BE58A]">Explore Now</button>
                    <button className="btn btn-outline text-[20px] px-8 text-white rounded-full">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;