import { NavLink, Outlet } from "react-router";
import { useRef, useEffect } from "react";






export default function Admin(){
    const adminMenuBtnTogglerRef = useRef(null);
    const adminMenuRef = useRef(null);

    useEffect(() => {
        const toggleBtnAnimation = () => {
            adminMenuBtnTogglerRef.current.classList.toggle('animateAdminMenuToggler');
            adminMenuBtnTogglerRef.current.classList.toggle('border');
            adminMenuRef.current.classList.toggle('animateSlideMenu');
            //adminDimCoverRef.current.classList.toggle('hidden');
        };

        adminMenuBtnTogglerRef.current && adminMenuBtnTogglerRef.current.addEventListener('click', toggleBtnAnimation);

        return () => {
            adminMenuBtnTogglerRef.current && adminMenuBtnTogglerRef.current.removeEventListener('click', toggleBtnAnimation)
        };
    }, []);

    return(
        <div className="grow relative pt-[2vh] flex flex-col items-center">
            <nav className="h-[30px] hidden lg:flex items-center justify-center space-x-[1.5vw] w-[50vw] text-[9px] sm:text-[min(12px,2.2vh)] text-blue-200 shadow-lg py-[1vh]">
                <NavLink className={
                    ({isActive}) => isActive ? "hover:text-white transition duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} end to=".">
                    Greetings
                </NavLink>
                <NavLink className={
                    ({isActive}) => isActive ? "hover:text-red-400/80 text-red-400 transition duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} to="root">
                    Root
                </NavLink>
                <NavLink className={
                    ({isActive}) => isActive ? "hover:text-white transition duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} to="activities">
                    Activities
                </NavLink>
                <NavLink className={
                    ({isActive}) => isActive ? "hover:text-white transition duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} to="meetings">
                    Meetings
                </NavLink>
                <NavLink className={
                    ({isActive}) => isActive ? "hover:text-white transition duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} to="login">
                    Sign In
                </NavLink>
                <NavLink className={
                    ({isActive}) => isActive ? "hover:text-white transition duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} to="apply">
                    Apply Job
                </NavLink>

                <button className="border-none text-red-300 hover:text-red-400/90 cursor-pointer transition rounded">
                    Sign Out
                </button>
            </nav>

            <nav className="//h-[30px] h-[5vh] flex lg:hidden items-center justify-between space-x-[1.5vw] w-[90%] pl-[20%] pr-[5vw] text-[9px] sm:text-[min(12px,2.2vh)] text-blue-200 shadow-lg py-[1vh]">
                <button className="border-none text-red-300 hover:text-red-400/90 cursor-pointer transition rounded">
                    Sign Out
                </button>

                <button ref={adminMenuBtnTogglerRef} className="adminMenuBtnToggler border-blue-200 rounded-full cursor-pointer w-[16px] h-[16px]">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <div ref={adminMenuRef} className="absolute lg:hidden flex flex-col slideMenu shadow-md shadow-blue-400/50 w-[max(18vh,20vw)] min-w-[120px] max-w-[30vw] sm:max-w-[100vw]  bg-blue-900 saturate-[50%] h-screen rounded top-[10px] right-[4vw]">
                <ul className="grow text-[9px] sm:text-[min(12px,2.2vh)] flex flex-col text-center text-white space-y-2 items-center justify-center">
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? "block underline underline-offset-4 decoration-blue-300 opacity-0.9 transition duration-[0.1s]" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="." end>Greetings</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? "block text-red-500 underline underline-offset-4 decoration-blue-300 opacity-0.9 transition duration-[0.1s]" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="root">Root</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? "block underline underline-offset-4 decoration-blue-300 opacity-0.9 transition duration-[0.1s]" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="activities">Activities</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? "block underline underline-offset-4 decoration-blue-300 opacity-0.9 transition duration-[0.1s]" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="meetings">Meetings</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? "block underline underline-offset-4 decoration-blue-300 opacity-0.9 transition duration-[0.1s]" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="login">Sign In</NavLink>
                    </li>
                    <li className="w-[80%]">
                        <NavLink className={({isActive}) => isActive? "block underline underline-offset-4 decoration-blue-300 opacity-0.9 transition duration-[0.1s]" : "block hover:scale-[105%] opacity-0.9 transition duration-[0.1s]"} to="apply">Apply Job</NavLink>
                    </li>
                </ul>
            </div>

            <div className="grow w-[60vw] flex flex-col">
                <Outlet />
            </div>
        </div>
    );
};