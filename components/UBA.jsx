import Header from "./Header"
import { Outlet } from "react-router"





export default function UBA(){
    return(
        <div className="grow flex flex-col //bg-indigo-300 bg-slate-500 mainDiv">
            <div className="relative grow flex flex-col container mx-auto">
                <div className="absolute top-0 left-0 w-[100%] min-h-screen bgImgClass"></div>

                <div className="grow headerContentContainer flex flex-col bg-slate-500/50 shadow-xl shadow-slate-800/90">
                    <Header />

                    <div className="grow flex flex-col">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
};