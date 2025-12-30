import { NavLink } from "react-router";
import { useRef, useEffect } from "react";
import profileImg from '/src/assets/img6.jpeg';






export default function AdminGreetings(){
    const adminsToMeetOuterDivRef = useRef(null);


    useEffect(() => {
        //adminsToMeetOuterDivRef.current && console.log(adminsToMeetOuterDivRef.current.scrollWidth)
    }, []);

    return(
        <div className="grow flex flex-col space-y-[min(6vh,30px)] pt-[5vh]">
            <div className=" flex flex-col space-y-2 items-center">
                <p className="fadeIn text-[max(2vh,2.1vw)] font-[bold] md:text-[min(1.5rem,3.5vh)] whitespace-nowrap hover:scale-105 transition text-indigo-300">
                    <span className="hidden sm:inline-block">Welcome To The</span> <span>Administration Dashboard of <span className="text-indigo-100">Example</span> Bank</span>
                </p>

                <NavLink to="login" className="fadeUp text-[9px] sm:text-[min(12px,2.2vh)] text-white hover:text-orange-200 transition underline underline-offset-6 decoration-orange-300">
                    please sign in to become -root
                </NavLink>
            </div>

            <div ref={adminsToMeetOuterDivRef} className="grow max-h-[50vh] content-center max-w-[100%] shadow-lg shadow-slate-700/70 overflow-x-scroll removeScrollBar">

                <div className="fadeInTwo flex justify-center items-center space-x-10 w-[100vw] px-10">
                    <div className="w-[250px] hover:scale-[101%] bg-blue-900/90 brightness-[80%] text-white flex flex-col pt-[3%] space-y-[min(12px,2.2vh)] items-center h-[40vh] rounded">
                        <p className="text-[9px] sm:text-[min(14px,2.5vh)] text-green-100">
                            Meet
                        </p>

                        <figure className="w-[80%] flex flex-col items-center">
                            <img className="rounded-full w-[60%] min-w-[20px] max-w-[60px]" src={profileImg} alt="" />
                            <figcaption className="text-[11px] whitespace-nowrap sm:text-[min(14px,2.4vh)] mt-[1vh] px-[2%] rounded font-bold text-slate-900 bg-white">
                                Kim Tyaeyung
                            </figcaption>
                        </figure>
                        <p className="text-[10px] sm:text-[min(12px,2.3vh)] text-purple-100">
                            Role: CEO
                        </p>

                        <p className="text-[8px] sm:text-[min(10px,2.1vh)]">
                            Year: <span className="text-blue-300">2011 to date</span>
                        </p>
                    </div>

                    <div className="w-[250px] hover:scale-[101%] bg-blue-900/90 brightness-[80%] text-white flex flex-col pt-[3%] space-y-[min(12px,2.2vh)] items-center h-[40vh] rounded">
                        <p className="text-[9px] sm:text-[min(14px,2.5vh)] text-green-100">
                            Meet
                        </p>

                        <figure className="w-[80%] flex flex-col items-center">
                            <img className="rounded-full w-[60%] min-w-[20px] max-w-[60px]" src={profileImg} alt="" />
                            <figcaption className="text-[11px] whitespace-nowrap sm:text-[min(14px,2.4vh)] mt-[1vh] px-[2%] rounded font-bold text-slate-900 bg-white">
                                Kim Tyaeyung
                            </figcaption>
                        </figure>
                        <p className="text-[10px] sm:text-[min(12px,2.3vh)] text-purple-100">
                            Role: CEO
                        </p>

                        <p className="text-[8px] sm:text-[min(10px,2.1vh)]">
                            Year: <span className="text-blue-300">2011 to date</span>
                        </p>
                    </div>
                    <div className="w-[250px] hover:scale-[101%] bg-blue-900/90 brightness-[80%] text-white flex flex-col pt-[3%] space-y-[min(12px,2.2vh)] items-center h-[40vh] rounded">
                        <p className="text-[9px] sm:text-[min(14px,2.5vh)] text-green-100">
                            Meet
                        </p>

                        <figure className="w-[80%] flex flex-col items-center">
                            <img className="rounded-full w-[60%] min-w-[20px] max-w-[60px]" src={profileImg} alt="" />
                            <figcaption className="text-[11px] whitespace-nowrap sm:text-[min(14px,2.4vh)] mt-[1vh] px-[2%] rounded font-bold text-slate-900 bg-white">
                                Kim Tyaeyung
                            </figcaption>
                        </figure>
                        <p className="text-[10px] sm:text-[min(12px,2.3vh)] text-purple-100">
                            Role: CEO
                        </p>

                        <p className="text-[8px] sm:text-[min(10px,2.1vh)]">
                            Year: <span className="text-blue-300">2011 to date</span>
                        </p>
                    </div>
                    <div className="w-[250px] hover:scale-[101%] bg-blue-900/90 brightness-[80%] text-white flex flex-col pt-[3%] space-y-[min(12px,2.2vh)] items-center h-[40vh] rounded">
                        <p className="text-[9px] sm:text-[min(14px,2.5vh)] text-green-100">
                            Meet
                        </p>

                        <figure className="w-[80%] flex flex-col items-center">
                            <img className="rounded-full w-[60%] min-w-[20px] max-w-[60px]" src={profileImg} alt="" />
                            <figcaption className="text-[11px] whitespace-nowrap sm:text-[min(14px,2.4vh)] mt-[1vh] px-[2%] rounded font-bold text-slate-900 bg-white">
                                Kim Tyaeyung
                            </figcaption>
                        </figure>
                        <p className="text-[10px] sm:text-[min(12px,2.3vh)] text-purple-100">
                            Role: CEO
                        </p>

                        <p className="text-[8px] sm:text-[min(10px,2.1vh)]">
                            Year: <span className="text-blue-300">2011 to date</span>
                        </p>
                    </div>
                    <div className="w-[250px] hover:scale-[101%] bg-blue-900/90 brightness-[80%] text-white flex flex-col pt-[3%] space-y-[min(12px,2.2vh)] items-center h-[40vh] rounded">
                        <p className="text-[9px] sm:text-[min(14px,2.5vh)] text-green-100">
                            Meet
                        </p>

                        <figure className="w-[80%] flex flex-col items-center">
                            <img className="rounded-full w-[60%] min-w-[20px] max-w-[60px]" src={profileImg} alt="" />
                            <figcaption className="text-[11px] whitespace-nowrap sm:text-[min(14px,2.4vh)] mt-[1vh] px-[2%] rounded font-bold text-slate-900 bg-white">
                                Kim Tyaeyung
                            </figcaption>
                        </figure>
                        <p className="text-[10px] sm:text-[min(12px,2.3vh)] text-purple-100">
                            Role: CEO
                        </p>

                        <p className="text-[8px] sm:text-[min(10px,2.1vh)]">
                            Year: <span className="text-blue-300">2011 to date</span>
                        </p>
                    </div>
                    <div className="w-[250px] hover:scale-[101%] bg-blue-900/90 brightness-[80%] text-white flex flex-col pt-[3%] space-y-[min(12px,2.2vh)] items-center h-[40vh] rounded">
                        <p className="text-[9px] sm:text-[min(14px,2.5vh)] text-green-100">
                            Meet
                        </p>

                        <figure className="w-[80%] flex flex-col items-center">
                            <img className="rounded-full w-[60%] min-w-[20px] max-w-[60px]" src={profileImg} alt="" />
                            <figcaption className="text-[11px] whitespace-nowrap sm:text-[min(14px,2.4vh)] mt-[1vh] px-[2%] rounded font-bold text-slate-900 bg-white">
                                Kim Tyaeyung
                            </figcaption>
                        </figure>
                        <p className="text-[10px] sm:text-[min(12px,2.3vh)] text-purple-100">
                            Role: CEO
                        </p>

                        <p className="text-[8px] sm:text-[min(10px,2.1vh)]">
                            Year: <span className="text-blue-300">2011 to date</span>
                        </p>
                    </div>

                </div>
    
            </div>
        </div>
    );
};