import { NavLink, Link } from "react-router";
import { useRef, useEffect } from "react";




export default function Header(){
    const headerRef = useRef(null);
    const mainHeaderDropDownMenuBtnTogglerRef = useRef(null);
    const headerDropDownMenuRef = useRef(null);

    useEffect(() => {
        headerDropDownMenuRef.current.classList.add('opacity-0')
        const token = setTimeout(() => {
            clearTimeout(token);
            headerDropDownMenuRef.current.classList.remove('opacity-0');
            headerDropDownMenuRef.current.classList.remove('hideHeaderDropDownMenuOnMount');
        }, 1000);
    }, []);

    useEffect(() => {
        const togglemainHeaderDropDownMenuBtnTogglerRotateAnim = () => {
            headerRef.current.classList.toggle('border-b');
            mainHeaderDropDownMenuBtnTogglerRef.current.classList.toggle('rotate-[180deg]');
            headerDropDownMenuRef.current.classList.toggle('showHeaderDropDownMenu');
            headerDropDownMenuRef.current.classList.toggle('hideHeaderDropDownMenu');

        };

        mainHeaderDropDownMenuBtnTogglerRef.current && mainHeaderDropDownMenuBtnTogglerRef.current.addEventListener('click', togglemainHeaderDropDownMenuBtnTogglerRotateAnim);

        return () => {
            mainHeaderDropDownMenuBtnTogglerRef.current && mainHeaderDropDownMenuBtnTogglerRef.current.removeEventListener('click', togglemainHeaderDropDownMenuBtnTogglerRotateAnim);
        }
    }, []);

    return(
        <header ref={headerRef} className="mainHeader w-[99%] h-[min(55px,9vh)] mx-auto bg-blue-900 rounded justify-center lg:justify-start xl:justify-start flex space-x-[10vw] items-center px-15 border-b border-blue-300">
            <h1 className="mainHeaderTitle whitespace-nowrap text-blue-100 shadow-sm bg-indigo-500 skew-[3deg] px-2">
                Example Bank
            </h1>

            <div ref={headerDropDownMenuRef} className="md:hidden w-[100%] max-w-[calc(40rem-0.8%)] hideHeaderDropDownMenuOnMount hideHeaderDropDownMenu headerDropDownMenu mx-auto flex flex-col fixed top-[min(55px,9vh)]  h-content py-[min(2px,1.5vh)] bg-indigo-900/90 border-b border-blue-300">
                <ul className="grow flex flex-col space-y-[max(1.2vh,0.5rem)] sm:space-y-[max(0.2rem,0.75vh)] items-center text-white text-[9px] sm:text-[min(12px,2.2vh)]">
                    <li className="w-[80%]"><NavLink className={({isActive}) => isActive? "font-bold underline decoration-1 decoration-blue-200 underline-offset-4 block text-center opacity-0.9 transition duration-[0.1s]" : "block text-center hover:scale-[115%] opacity-0.9 transition duration-[0.1s]"}  to="admin">Admins</NavLink></li>
                    <li className="w-[80%]"><NavLink  className={({isActive}) => isActive? "font-bold underline decoration-1 decoration-blue-200 underline-offset-4 block text-center opacity-0.9 transition duration-[0.1s]r" : "block text-center hover:scale-[115%] opacity-0.9 transition duration-[0.1s]"}  to="services">Services</NavLink></li>
                    <li className="w-[80%]"><NavLink className={({isActive}) => isActive? "font-bold underline decoration-1 decoration-blue-200 underline-offset-4 block text-center opacity-0.9 transition duration-[0.1s]" : "block text-center hover:scale-[115%] opacity-0.9 transition duration-[0.1s]"}  to="login">Sign In</NavLink></li>
                    <li className="w-[80%]"><NavLink className={({isActive}) => isActive? "font-bold underline decoration-1 decoration-blue-200 underline-offset-4 block text-center opacity-0.9 transition duration-[0.1s]" : "block text-center hover:scale-[115%] opacity-0.9 transition duration-[0.1s]"}  to="register">Register Account</NavLink></li>
                    <li className="w-[80%] cursor-pointer bg-red-400 rounded hover:bg-red-400/90 transition duration-[0.1s]"><span className="block text-center">logout</span></li>
                </ul>
            </div>

            <button ref={mainHeaderDropDownMenuBtnTogglerRef} className="mainHeaderDropDownMenuBtnToggler md:hidden cursor-pointer transition duration-[0.6s] ease-in-out flex justify-between rounded-full items-center items-center w-[18px] h-[18px]">
                <span className="w-[2px] h-[50%] bg-white -rotate-[45deg] translate-x-[5px] translate-y-[1px]"></span>
                <span className="w-[2px] h-[50%] bg-white rotate-[45deg] -translate-x-[5px] translate-y-[1px]"></span>
            </button>

            <div className="mainHeaderNavMinMd md:hidden w-[18px] h-[18px] rounded-full bg-slate-900/40 animate-ping -ml-[10vw] -translate-x-[100%]"></div>
            <nav className="mainHeaderNavMinMdNav hidden md:flex hideHeaderNav text-blue-100 items-center space-x-[3vw] ">
                <NavLink className={
                    ({isActive}) => isActive ? "hover:text-white transition duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} to="admin">
                    Admins   
                </NavLink>
                <NavLink className={
                    ({isActive}) => isActive ? "hover:text-white transition duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4" : "hover:text-white transition duration-100 ease-in-out"} to="services">
                    Services
                </NavLink>
                <NavLink className={
                    ({isActive}) => isActive ? "hover:text-white transition duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4 whitespace-nowrap" : "hover:text-white transition duration-100 ease-in-out whitespace-nowrap"} to="login">
                    Sign In
                </NavLink>
                <NavLink className={
                    ({isActive}) => isActive ? "hover:text-white transition duration-100 ease-in-out  underline decoration-1 decoration-blue-200 underline-offset-4 whitespace-nowrap" : "hover:text-white transition duration-100 ease-in-out whitespace-nowrap"} to="register">
                    register account
                </NavLink>

                <button className="mainHeaderNavMinMdLogoutBtn text-red-900 cursor-pointer bg-white transition duration-300 hover:bg-red-300 hover:text-white border-none transition duration-100 ease-in-out">
                    Logout
                </button>
            </nav>
        </header>
    );
};