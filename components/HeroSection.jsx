import heroImg from '/src/assets/background.jpeg';






export default function HeroSection(){
    return(
        <div className="px-[8vw] py-[5vh] grow flex flex-col">
            <div className="bgImg rounded hover:shadow-lg grow grid grid-cols-2 py-2">
                <div className='pt-[5vh] flex justify-center'>
                    <img src={heroImg} className='w-[80%] brightness-70 h-[auto] rounded' alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-3xl text-blue-200 font-bold italic skew-[-15deg]'>
                        Welcome To Fidelity Bank
                    </p>
                </div>
            </div>
        </div>
    );
};