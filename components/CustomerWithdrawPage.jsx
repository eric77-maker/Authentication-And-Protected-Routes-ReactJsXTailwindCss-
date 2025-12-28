import { useActionData, Form, Link } from "react-router";
import { useState, useRef, useEffect } from "react";



export function loader(){
    return null;
};

export async function action({ request }){
    try{
        const formData = await request.formData();
        const amount = formData.get('amount');
        if(isNaN(amount)){
            throw 'invalid amount'
        };

        console.log(amount);
    }catch(error){
        return error;
    };
    return null;
}





export default function CustomerWithdrawPage(){
    const actionData = useActionData();
    const amountInputRef = useRef(null);
    const [optionInvalid, setOptionInvalid] = useState(null);

    useEffect(() => {
        if(amountInputRef.current){
            amountInputRef.current.focus();
        };
    }, []);

    useEffect(() => {
        if(actionData){
            setOptionInvalid(true);
        }else{
            setOptionInvalid(null);
        }
    }, [actionData]);
    return(
        <>
            <p className="fadeIn customerIndServiceTitle text-[11px] sm:text-[min(14px,2.4vh)] flex justify-center shadow-sm  rounded items-center bg-indigo-700 text-white">
                Submit Amount To Withdraw
            </p>

            <Form method="post" className="flex flex-col text-[9px] sm:text-[min(11px,2.2vh)] mt-5 space-y-1 items-center">
                <p className="text-center text-slate-800 mb-3">Withdraw</p>
                <input type="text" name="amount" ref={amountInputRef} className="border outline-none bg-indigo-400/90 border-indigo-300/70 text-white w-[max(25vw,50%)] min-w-[150px] rounded pl-1" placeholder="10.00"/>
                <button className="fadeUp border-none bg-indigo-600/50 hover:bg-indigo-600/80 cursor-pointer transition text-blue-100 rounded text-sm w-[25vw]">deposit</button>
            </Form>

            <div className="pl-4">
                <Link to=".." className="text-[11px] text-purple-200 underline underline-offset-3 decoration-orange-300">go back</Link>
            </div>

            {optionInvalid &&
                <div className="text-center text-[11px] text-red-200">
                    {actionData}
                </div>
            }
        </>
    );
}