import { Outlet, NavLink, Link } from "react-router";
import { useRef, useEffect } from "react";
import profileImg from '/src/assets/img6.jpeg';
import waveImg from '/src/assets/wave.png';


export function loader(){
    return null;
};




export default function CustomerInfo(){
    return(
        <div className="grow flex flex-col space-y-1 pb-1">
            <div className="grow flex flex-col space-y-2  rounded">
                <p className="fadeIn customerIndServiceTitle text-[11px] sm:text-[min(14px,2.4vh)] flex justify-center shadow-sm  rounded items-center bg-indigo-700 text-white">
                    Customer Information
                </p>

                <div className="customerIndServiceInfo text-[9px] sm:text-[min(11px,2.2vh)] grow flex flex-col rounded text-slate-800 divide-y divide-indigo-400 bg-indigo-500">
                    <p className="py-1">
                        First Name: <span className="bg-indigo-400/70 text-blue-100 py-[0.8px] px-3 rounded">Eric</span>
                    </p>
                   
                    <p className="py-1">
                        Middle Name: <span className="bg-indigo-400/70 text-blue-100 py-[0.8px] px-3 rounded">Boakye</span> 
                    </p>

                    <p className="py-1">
                        Last Name: <span className="bg-indigo-400/70 text-blue-100 py-[0.8px] px-3 rounded">Mpeanin</span>
                    </p>

                    <p className="py-1">
                        Birth Date: <span className="bg-indigo-400/70 text-blue-100 py-[0.8px] px-3 rounded">2nd May 1999</span>
                    </p>

                    <p className="py-1">
                        Username: <span className="bg-indigo-400/70 text-blue-100 py-[0.8px] px-3 rounded">eric89</span>
                    </p>

                    <p className="py-1">
                        Email: <span className="bg-indigo-400/70 text-blue-100 py-[0.8px] px-3 rounded">esotericbeat@gmail.com</span>
                    </p>

                    <p className="py-1">
                        Type: <span className="bg-indigo-400/70 text-blue-100 py-[0.8px] px-3 rounded">Savings</span>
                    </p>

                    <p className="py-1">
                        Account Balance: <span className="bg-indigo-400/70 text-blue-100 py-[0.8px] px-3 rounded">99999usd</span>
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
                <Link className="fadeUp underline text-[8px] sm:text-[min(10px,1.5vh)] text-purple-200 hover:scale-102 underline-offset-2 decoration-orange-300" to="edit">
                    Edit Customer Information
                </Link>
            </div>
        </div>
    );
}