import { useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";



export function loader(){};




export default function CustomerSubmitEnquiriesOptionPage(){
    const possibleRoutePath = {
        '1': 'deposit',
        '2': 'withdraw',
        '3': 'help'
    };
    const navigate = useNavigate();
    const optionInputRef = useRef(null);
    const [option, setOption] = useState('');
    const [optionInvalid, setOptionInvalid] = useState(null);

    useEffect(() => {
        optionInputRef.current && optionInputRef.current.focus();
    }, []);

    const optionFieldHandler = option => {
        setOption(option);
    };

    const routeToChosenOptionPath = () => {
        if(option === '1' || option === '2' || option === '3'){
            setOptionInvalid(null);
            const token = setTimeout(() => {
                clearTimeout(token);
                navigate(possibleRoutePath[option])
            }, 2000);
        }else{
            setOption('');
            setOptionInvalid(true);
        }
    };

    return(
        <>
            <p className="fadeIn customerIndServiceTitle text-[11px] sm:text-[min(14px,2.4vh)] flex justify-center shadow-sm  rounded items-center bg-indigo-700 text-white">
                Submit Your Option
            </p>

            <div className="flex flex-col px-10">
                <p className="customerIndServiceSubTitle text-[11px] sm:text-[min(14px,2.4vh)]  text-center text-slate-900">Options</p>
                <div className="customerIndServiceSubText text-[9px] sm:text-[min(11px,2.2vh)]  flex flex-col space-y-2 text-blue-300/70">
                    <span>
                        1. Deposite
                    </span>

                    <span>
                        2. Withdraw
                    </span>

                    <span>
                        3. Contact Center
                    </span>
                </div>
            </div>

            <div className="flex flex-col text-[9px] sm:text-[min(11px,2.2vh)] mt-5 space-y-1 items-center">
                <input type="text" ref={optionInputRef} value={option} onChange={e => optionFieldHandler(e.target.value)} name="option" className="border outline-none bg-indigo-400/90 border-indigo-300/70 text-white w-[max(25vw,50%)] min-w-[150px] rounded pl-1" placeholder="option goes here!"/>
                <button onClick={() => routeToChosenOptionPath()} className="fadeUp border-none bg-indigo-600 hover:bg-indigo-600/80 cursor-pointer transition py-[0.15vh] text-blue-100 rounded w-[max(25vw,45%)] min-w-[145px]">submit</button>
            </div>

            {optionInvalid &&
                <div className="text-center text-[11px] text-red-200">
                    option submitted is invalid
                </div>
            } 
        </>
    );
};