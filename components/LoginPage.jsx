import { Form, Link, useActionData } from "react-router";
import {useRef, useEffect, useState} from "react";
import showPasswordImg from '/src/assets/showPassword.png';
import hidePasswordImg from '/src/assets/hidePassword.png';


export function loader(){
    return null;
};

export async function action({ request }){
    try{
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        console.log({ email,  password});
        return null
    }catch(error){
        return null;
    };
};


export default function LoginPage(){
    const actionData = useActionData();
    const [credsInvalid, setCredsInvalid] = useState(false);
    const passwordInputRef = useRef(null);
    const emailFieldRef = useRef(null);
    const togglePasswordVisibilityBtnRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if(showPassword){
            passwordInputRef.current.type = "text";
        }else{
            passwordInputRef.current.type = "password";
        };
    }, [showPassword]);

    useEffect(() => {
        emailFieldRef.current && emailFieldRef.current.focus();
    }, []);

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
        <div className="grow pt-5 flex flex-col">
            <Form method="post" replace className="grow flex pt-5 justify-center">
                <div className="flex flex-col items-center space-y-3">
                    <p className="fadeIn text-[11px] sm:text-[min(12px,2.4vh)] w-[100%] flex justify-center py-1 shadow-sm  rounded items-center text-white">
                        Customer Login Page
                    </p>

                    <div className="fadeInTwo text-white flex flex-col formInnerContainer p-2 rounded items-center w-[100%] h-[38vh]">
                        <div className="flex flex-col space-y-[max(2.5vh,8px)] w-[100%]">
                            <div className="flex flex-col space-y-1 items-center w-[100%]">
                                <label htmlFor="email" className="w-[100%] text-slate-300 text-[min(14px,2vh)]">Email</label>
                                <input className="lInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" type="email" ref={emailFieldRef} name="email" />
                            </div>

                            <div className="relative flex flex-col space-y-1 items-center w-[100%]">
                                <label htmlFor="password" className="w-[100%] text-slate-300 text-[min(14px,2vh)]">Password</label>
                                <input className="lInP text-[min(14px,2vh)] py-[min(0.5vh,2px)] text-slate-800 bg-slate-400" type="password" ref={passwordInputRef}
                                 onMouseEnter={() => showtogglePasswordVisibilityBtn()}
                                 onMouseLeave={() => hidetogglePasswordVisibilityBtn()} name="password" />
                                <span ref={togglePasswordVisibilityBtnRef} onMouseEnter={() => selfShowtogglePasswordVisibilityBtn()}
                                    onMouseLeave={() => selfHidetogglePasswordVisibilityBtn()} onClick={() => setShowPassword(s => !s)} className="hidden cursor-pointer flex justify-center items-center rounded-full w-5 h-5 bottom-2 right-1">
                                    <img src={showPassword ? hidePasswordImg : showPasswordImg} alt="" />
                                </span>
                            </div>
                        </div>

                        <button className="btnFadeIn loginBtn text-[min(14px,2vh)] bg-blue-800 hover:bg-blue-800/90 transition text-white rounded cursor-pointer py-0.5 mt-[max(3vh,14px)]">
                            Login
                        </button>

                        <div className="flex justify-between text-[min(9px,2vh)] pl-1 mt-3 text-white w-[100%] bg-gray-600/50 py-[0.4rem] rounded">
                            <div>
                                Don't have account? <Link to="/register" className="underline text-[min(8.5px,1.8vh)] text-blue-200 hover:text-blue-500/80 underline-offset-3">register</Link>
                            </div>
                            <div>
                                <Link to="#" className="underline text-[min(8.5px,1.8vh)] text-white px-[0.2em] hover:scale-102 hover:text-blue-200/80 underline-offset-[0.25em] decoration-orange-300">
                                    forgot password
                                </Link>
                            </div>
                        </div>

                        {credsInvalid && 
                            <div className="text-[min(8.5px,1.8vh)] mt-2.5 text-red-200">
                                invalid credentials
                            </div>
                        }
                    </div>    
                </div>        
            </Form>
        </div>
    );
};