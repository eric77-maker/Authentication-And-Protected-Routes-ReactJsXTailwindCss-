import { Form, Link, useActionData } from "react-router";
import { useState, useRef, useEffect } from "react";
import showPasswordImg from '/src/assets/showPassword.png';
import hidePasswordImg from '/src/assets/hidePassword.png';

export function loader(){
    return null;
};


export async function action({ request }){
    try{
        const formData = await request.formData();
        const firstName = formData.get('firstName');
        const middleName = formData.get('middleName');
        const lastName = formData.get('lastName');
        const username = formData.get('username');
        const experience = formData.get('experience');
        const educationLevel = formData.get('educationLevel');
        const role = formData.get('role');
        const email = formData.get('email');
        const dateOfBirth = formData.get('dateOfBirth');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        console.log({ firstName, middleName, lastName, username, experience, educationLevel, role, email, dateOfBirth, password, confirmPassword });

    }catch(error){}
    return null;
}


export default function AdminRegistrationPage(){
    const actionData = useActionData();
    const [errorMsg, setErrorMsg] = useState('');
    const [page, setPage] = useState(1);
    const firstNameInputRef = useRef(null);
    const usernameInputRef = useRef(null);
    const roleInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const confirmPasswordInputRef = useRef(null);
    const togglePasswordVisibilityBtnRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);


    useEffect(() => {
        if(page == 1){
            firstNameInputRef.current.focus();
        }else if(page == 2){
            usernameInputRef.current.focus();
        }else{
            roleInputRef.current.focus();
        }
    }, [page]);

    useEffect(() => {
        if(showPassword){
            passwordInputRef.current.type = "text";
            confirmPasswordInputRef.current.type = "text";
        }else{
            passwordInputRef.current.type = "password";
            confirmPasswordInputRef.current.type = "password";
        };
    }, [showPassword]);


    const showtogglePasswordVisibilityBtn = () => {
        togglePasswordVisibilityBtnRef.current.classList.remove('hidden');
        togglePasswordVisibilityBtnRef.current.classList.add('absolute');
    };

    const hidetogglePasswordVisibilityBtn = () => {
        togglePasswordVisibilityBtnRef.current.classList.remove('absolute');
        togglePasswordVisibilityBtnRef.current.classList.add('hidden');
    };

    const selfShowtogglePasswordVisibilityBtn = () => {
        togglePasswordVisibilityBtnRef.current.classList.remove('hidden');
        togglePasswordVisibilityBtnRef.current.classList.add('absolute');
    };

    const selfHidetogglePasswordVisibilityBtn = () => {
        togglePasswordVisibilityBtnRef.current.classList.remove('absolute');
        togglePasswordVisibilityBtnRef.current.classList.add('hidden');
    };


    return(

        <div className="grow pt-[2vh] flex flex-col">
            <Form method="post" replace className="grow flex pt-[2vh] justify-center">
                <div className="flex flex-col items-center px-2 space-y-3 w-[min(35vw,100%)] min-w-[190px]">
                    <p className="fadeIn text-[11px] sm:text-[min(12px,2.4vh)] scale-x-[110%] sm:scale-x-[100%] w-[100%] whitespace-nowrap flex justify-center py-1 shadow-sm  rounded items-center text-white">
                        Job Application Page
                    </p>

                    <div className="fadeInTwo flex flex-col w-[100%] formInnerContainer rounded items-between justify-center text-white">
            
                        <div className="relative text-white flex flex-col rounded items-center w-[100%] h-[38vh]">
                            <div style={page == 1 ? {opacity: '1', zIndex: '3'} : {opacity: '0', zIndex: '1'}} className="absolute top-2 left-0 w-[100%] flex flex-col space-y-2">
                                <div className="w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="firstName" className="rALabel text-slate-300 text-[min(14px,2vh)]">First Name</label>
                                    <input className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" ref={firstNameInputRef} type="text" name="firstName" />
                                </div>
                                <div className="w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="middleName" className="rALabel text-slate-300 text-[min(14px,2vh)]">Middle Name</label>
                                    <input className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" type="text" name="middleName" />
                                </div>
                                <div className="w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="lastName" className="rALabel text-slate-300 text-[min(14px,2vh)]">Last Name</label>
                                    <input className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" type="text" name="lastName" />
                                </div>
                                <div className="w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="dateOfBirth" className="rALabel text-slate-300 text-[min(14px,2vh)]">Birth Date</label>
                                    <input type="date" name="dateOfBirth" className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] pl-1 rounded text-slate-800 bg-slate-400" />
                                </div>
                            </div>

                
                            <div style={page == 2 ? {opacity: '1', zIndex: '3'} : {opacity: '0', zIndex: '1'}} className="absolute top-2 left-0 w-[100%] flex flex-col space-y-2">
                                <div className="w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="username" className="rALabel text-slate-300 text-[min(14px,2vh)]">Username</label>
                                    <input className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" ref={usernameInputRef} type="text" name="username" />
                                </div>
                                <div className="w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="email" className="rALabel text-slate-300 text-[min(14px,2vh)]">Email</label>
                                    <input className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" type="text" name="email" />
                                </div>
                                <div className="relative w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="password" className="rALabel text-slate-300 text-[min(14px,2vh)]">Password</label>
                                    <input ref={passwordInputRef} className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" type="password" name="password"/>
                                </div>
                                <div className="relative w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="confirmPassword" className="rALabel text-slate-300 text-[min(14px,2vh)]">Confirm Password</label>
                                    <input ref={confirmPasswordInputRef} onMouseEnter={() => showtogglePasswordVisibilityBtn()}
                                        onMouseLeave={() => hidetogglePasswordVisibilityBtn()} className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" type="password" name="confirmPassword"/>

                                    <span ref={togglePasswordVisibilityBtnRef} onMouseEnter={() => selfShowtogglePasswordVisibilityBtn()}
                                        onMouseLeave={() => selfHidetogglePasswordVisibilityBtn()} onClick={() => setShowPassword(s => !s)} className="hidden cursor-pointer flex justify-center items-center rounded-full w-5 h-5 bottom-2 right-4">
                                        <img src={showPassword ? hidePasswordImg : showPasswordImg} alt="" />
                                    </span>
                                </div>
                            </div>

                
                            <div style={page == 3 ?  {opacity: '1', zIndex: '3'} : {opacity: '0', zIndex: '1'}} className="absolute top-2 left-0 w-[100%] flex flex-col space-y-2">
                                <div className="w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="Role" className="rALabel text-slate-300 text-[min(14px,2vh)]">Role</label>
                                    <input type="text" ref={roleInputRef} className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" name="role"/>
                                </div>

                                <div className="w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="educationLevel" className="rALabel text-slate-300 text-[min(14px,2vh)]">Education Level</label>
                                    <input className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" type="text" name="educationLevel" />
                                </div>

                                <div className="w-[100%] flex flex-col space-y-1 items-center">
                                    <label htmlFor="experience" className="rALabel text-slate-300 text-[min(14px,2vh)]">Years Of Experience</label>
                                    <input className="lAInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" type="text" name="experience" />
                                </div>
                            </div>
                        </div>


                        <div className="w-[100%] flex flex-col justify-between items-center px-1 py-2 rounded mx-auto grow">
                            <div></div>

                            <div className="rALabel">
                                <div className="w-[100%] mx-auto flex justify-between mt-10">
                                    {page <= 1 && <div></div>}
                                    {page > 1 &&
                                        <span onClick={() => setPage(p => p - 1)} className="regBtn bg-cyan-400 text-[min(14px,2vh)] text-slate-600 rounded">
                                            Previous
                                        </span>
                                    }

                                    {page < 3 &&
                                        <span onClick={() => setPage(p => p + 1)} className="btnFadeIn regBtn bg-cyan-400 text-[min(14px,2vh)] text-slate-600 rounded ">
                                            Next
                                        </span>
                                    }

                                    {page > 2 && 
                                        <button className="regBtn text-[min(14px,2vh)] bg-blue-800 text-white rounded">Apply</button>
                                    }
                                </div>

                                <div className="text-[min(9px,2vh)] pl-1 mt-3 text-white w-[100%]">
                                    Already have account? <Link to="../login" className="underline text-[min(8.5px,1.8vh)] text-blue-200 hover:text-blue-500/80 underline-offset-3">login</Link>
                                </div>

                                <div className="text-[min(8.5px,1.8vh)] text-center h-[20px] mt-2.5 text-red-200">
                                    {errorMsg}
                                </div>     
                            </div> 
                        </div>

                    </div>     
                </div>
            </Form>
        </div>
    );
};