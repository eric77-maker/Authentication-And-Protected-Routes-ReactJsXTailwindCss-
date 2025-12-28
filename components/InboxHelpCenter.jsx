import {Form, useNavigate, Link} from 'react-router';
import { useRef, useEffect } from 'react';



export function loader(){
    return null;
};

export async function action({ request }){
    try{
        return null;
    }catch(error){
        return error;
    };
};

export default function InboxHelpCenter(){
    const inboxTextareaRef = useRef(null);

    useEffect(() => {
        inboxTextareaRef.current && inboxTextareaRef.current.focus();
    }, []);
    return(
        <div className="grow flex flex-col space-y-1 p-1">
            <p className="fadeIn customerIndServiceTitle text-[11px] sm:text-[min(14px,2.4vh)] flex justify-center shadow-sm rounded items-center bg-indigo-700 text-white">
                Help Center
            </p>

            <p className="customerIndServiceSubText text-[9px] sm:text-[min(11px,2.2vh)] text-slate-900/70 bg-slate-200/90 p-[0.2rem] rounded w-[100%] mx-auto">
                Hi, customer, welcome to the help center page of Fidelity bank, please submit your questions will respond within 24 hours, thanks.
            </p> 

            <Form method='post' className="grow text-[9px] sm:text-[min(11px,2.2vh)] flex flex-col space-y-2 items-center rounded">
                <textarea ref={inboxTextareaRef} name="inbox" className="border-none bg-indigo-400/90 max-h-[350px] grow outline-none border-indigo-300/70 text-white w-[90%] rounded pl-1" placeholder="inbox goes here!"></textarea> 
                <button className="fadeUp border-none bg-indigo-700 py-[0.15vh] hover:bg-indigo-700/90 cursor-pointer transition text-slate-200 rounded font-bold w-[90%]">submit</button>
            </Form>
        </div> 
    );
};