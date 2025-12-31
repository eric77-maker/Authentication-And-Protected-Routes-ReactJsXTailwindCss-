import { Outlet, NavLink, Link } from "react-router";
import { useRef, useEffect } from "react";
import profileImg from '/src/assets/img6.jpeg';
import waveImg from '/src/assets/wave.png';


export function loader(){
    return null;
};



export default function CustomerServices(){
    const customerMenuBtnTogglerRef = useRef(null);
    const customerMenuCloseBtnTogglerRef = useRef(null);
    const customerMenuRef = useRef(null);
    const profileImgRef = useRef(null);

    useEffect(() => {
        const toggleBtnAnimation = () => {
            customerMenuRef.current.classList.toggle('animateSlideMenu');
            customerMenuBtnTogglerRef.current.classList.toggle('animateCustomerMenuToggler');
            customerMenuCloseBtnTogglerRef.current.classList.toggle('animateCustomerMenuCloseBtnToggler');
            profileImgRef.current.classList.toggle('outline');
            profileImgRef.current.classList.toggle('shadow-md');
            profileImgRef.current.classList.toggle('lg:shadow-lg');
            profileImgRef.current.classList.toggle('xl:shadow-lg');
        };

        customerMenuBtnTogglerRef.current && customerMenuBtnTogglerRef.current.addEventListener('click', toggleBtnAnimation);

        return () => {
            customerMenuBtnTogglerRef.current && customerMenuBtnTogglerRef.current.removeEventListener('click', toggleBtnAnimation)
        };
    }, []);

    useEffect(() => {
        const toggleBtnAnimation = () => {
            customerMenuRef.current.classList.toggle('animateSlideMenu');
            customerMenuCloseBtnTogglerRef.current.classList.toggle('animateCustomerMenuCloseBtnToggler');
            customerMenuBtnTogglerRef.current.classList.toggle('animateCustomerMenuToggler');
            profileImgRef.current.classList.toggle('outline');
            profileImgRef.current.classList.toggle('shadow-md');
            profileImgRef.current.classList.toggle('lg:shadow-lg');
            profileImgRef.current.classList.toggle('xl:shadow-lg');
        };

        customerMenuCloseBtnTogglerRef.current && customerMenuCloseBtnTogglerRef.current.addEventListener('click', toggleBtnAnimation);

        return () => {
            customerMenuCloseBtnTogglerRef.current && customerMenuCloseBtnTogglerRef.current.removeEventListener('click', toggleBtnAnimation)
        };
    }, []);

    return(
        <div className="grow relative flex flex-col items-center pt-[10vh] sm:pt-[12vh]">

            <div className="fadeUp customerProfileBar absolute flex justify-between items-center right-[4vw] w-[92%] text-white rounded bg-blue-900 truncate">
                <div className="relative w-[40%] text-[11px] sm:text-[min(14px,2.4vh)] flex items-center">
                    <div className="truncate hidden md:block">Welcome back</div>
                    <img src={waveImg} className="block md:hidden w-[20px] h-auto" alt="" /> 
                    <div className="grow truncate">, Eric Boakye Mpeanin</div>
                </div>

                <button ref={customerMenuBtnTogglerRef} className="border-wheat-900 customerMenuBtnToggler cursor-pointer">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div ref={customerMenuRef} className="customerSideBarSlide absolute top-[2vh] flex flex-col slideMenu shadow-md shadow-blue-900/70 space-y-2 divide-y-[1px] divide-slate-800 w-[max(18vh,20vw)] min-w-[120px] max-w-[30vw] sm:max-w-[100vw] bg-slate-900 h-screen rounded right-[4vw]">
                <div className="absolute top-[2%] right-[2%]">
                    <button ref={customerMenuCloseBtnTogglerRef} className="relative border border-wheat-900 customerMenuCloseToggler cursor-pointer">
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <ul className="grow visible customerSideBarSlideTopPart text-[9px] sm:text-[min(12px,2.2vh)] lg:hidden flex-col text-white text-center space-y-[max(0.8vh,0.25rem)] sm:space-y-[max(0.2rem,0.75vh)] items-center justify-end pb-2">
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? "block opacity-0.9 transition duration-[0.1s] font-bold underline decoration-1 decoration-blue-400 underline-offset-4" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} end to=".">Customer Info.</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? "block opacity-0.9 transition duration-[0.1s] font-bold underline decoration-1 decoration-blue-400 underline-offset-4" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="enquiries/1">Seek Enquiries</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? "block opacity-0.9 transition duration-[0.1s] font-bold underline decoration-1 decoration-blue-400 underline-offset-4" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="edit">Credentials Edit</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? "block opacity-0.9 transition duration-[0.1s] font-bold underline decoration-1 decoration-blue-400 underline-offset-4 whitespace-nowrap" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s] whitespace-nowrap"} to="inbox/center">Inbox Help Center</NavLink>
                    </li>
                </ul>

                <ul className="customerSideBarSlideTopBottom grow text-[9px] sm:text-[min(12px,2.2vh)] flex flex-col text-white text-center space-y-[max(0.8vh,0.25rem)] sm:space-y-[max(0.2rem,0.75vh)] items-center lg:justify-center xl:justify-center">
                    <li className="bg-purple-800 text-slate-800 font-bold w-[80%] rounded">
                        Other Services
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? /* "block opacity-0.9 transition duration-[0.1s] font-bold underline decoration-1 decoration-blue-400 underline-offset-4"*/ "" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="#">Buy Shares</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? /* "block opacity-0.9 transition duration-[0.1s] font-bold underline decoration-1 decoration-blue-400 underline-offset-4" */ "" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="#">Request Loan</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? /* "block opacity-0.9 transition duration-[0.1s] font-bold underline decoration-1 decoration-blue-400 underline-offset-4" */ "" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="#">Treasury Bills</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? /* "block opacity-0.9 transition duration-[0.1s] font-bold underline decoration-1 decoration-blue-400 underline-offset-4" */ "" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="#">Buy Stocks</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? /* "block opacity-0.9 transition duration-[0.1s] font-bold underline decoration-1 decoration-blue-400 underline-offset-4" */ "" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="#">About Services</NavLink>
                    </li>
                </ul>
            </div>

            <div className="absolute customerProfileImgDiv -translate-x-[1vw] lg:translate-x-[0] lg:left-[40%] right-[18vw]">
                <img ref={profileImgRef} src={profileImg} alt="" title="my profile picture" className="rounded-full shadow-slate-200 outline-offset-1 outline-blue-100 shadow-[1px] shadow-purple-900/80"/>
            </div>

            <div className="grow flex customerServicesContentDiv space-x-5">

                <div className="customerSidebar lg:flex flex-col w-[200px] hideCustomerSidebar mb-1">
                    <nav className="grow bg-indigo-600/50 py-2 rounded flex flex-col space-y-[max(1.5vh,4px)] text-center text-blue-300 shadow-md">
                        <NavLink className={
                            ({isActive}) => isActive ? "hover:text-white transition w-[100%] duration-100 ease-in-out underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} end to=".">
                                Customer Info.
                        </NavLink>
                        <NavLink className={
                            ({isActive}) => isActive ? "hover:text-white transition w-[100%] duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} to="enquiries/1">
                                Seek Enquries
                        </NavLink>

                        <NavLink className={
                            ({isActive}) => isActive ? "hover:text-white transition w-[100%] duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} to="edit">
                                Credentials Edit
                        </NavLink>

                        <NavLink className={
                            ({isActive}) => isActive ? "hover:text-white transition w-[100%] duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} to="inbox/center">
                               Inbox Help Center
                        </NavLink>
                    </nav>
                </div>

                <div className="grow flex flex-col">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}