import { Link } from "react-router"


export function loader(){
    return null
};



export default function AdminsActivities(){
    return(
        <div className="grow flex flex-col space-y-3 py-[2vh]">
            <div className=" flex flex-col space-y-2 items-center truncate">
                <p className="fadeUp text-[11px] sm:text-[min(12px,2.4vh)] text-indigo-300">
                    All Administration <span className="text-indigo-100">Activities</span> And <span className="text-indigo-100">Events</span>
                </p>
            </div>

            <div className="fadeInTwo grow flex justify-center mt-4 space-x-5">

                <div className="w-[100%] max-w-[700px] bg-blue-900/90 brightness-[80%] hover:scale-[105%] text-white flex flex-col items-center justify-center min-h-[45vh] max-h-[250px] sm:min-h-[70vh] sm:max-h-[400px] rounded">
                    <p className="text-white font-bold text-[11px] sm:text-[min(12px,2.4vh)] pt-[0.5%] whitespace-nowrap mb-[min(12px,2vh)]">
                        20th Aniversary
                    </p>

                    <div className="flex flex-col items-center text-[8px] py-[0.2em] sm:text-[max(10px,2vh)] text-slate-900 bg-slate-200/50">
                        <p className="bg-purple-500/50 text-slate-800 px-[0.2em]">
                            Description
                        </p>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur quaerat cum exercitationem...
                        </p>             
                    </div>

                    <div className="py-[4vh] flex flex-col items-center space-y-[2px] py-[0.2em] bg-slate-500/20 w-[100%]">
                        <p className="text-[10px] sm:text-[max(9px,2vh)]">
                            Venu
                        </p>
                        <p className="text-[6px] sm:text-[max(7px,1.6vh)]">
                            Accra
                        </p>
                    </div>

                    <div className="py-[4vh] flex flex-col items-center space-y-[2px] py-[0.2em] bg-indigo-500/30 w-[100%]">
                        <p className="text-[10px] sm:text-[max(9px,2vh)]">
                            Date
                        </p>
                        <p className="text-[6px] sm:text-[max(7px,1.6vh)]">
                            20/07/2025
                        </p>
                    </div>

                    <div className="grow flex items-center text-[10px] sm:text-[max(9px,2vh)] text-blue-100">
                        <Link className="underline decoration-blue-200" to="#">
                            more...
                        </Link>
                    </div>     
                </div>

                
                <div className="w-[100%] max-w-[700px] bg-blue-900/90 brightness-[80%] hover:scale-[105%] text-white flex flex-col items-center justify-center min-h-[45vh] max-h-[250px] sm:min-h-[70vh] sm:max-h-[400px] rounded">
                    <p className="text-white font-bold text-[11px] sm:text-[min(12px,2.4vh)] pt-[0.5%] whitespace-nowrap mb-[min(12px,2vh)]">
                        20th Aniversary
                    </p>

                    <div className="flex flex-col items-center text-[8px] py-[0.2em] sm:text-[max(10px,2vh)] text-slate-900 bg-slate-200/50">
                        <p className="bg-purple-500/50 text-slate-800 px-[0.2em]">
                            Description
                        </p>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur quaerat cum exercitationem...
                        </p>             
                    </div>

                    <div className="py-[4vh] flex flex-col items-center space-y-[2px] py-[0.2em] bg-slate-500/20 w-[100%]">
                        <p className="text-[10px] sm:text-[max(9px,2vh)]">
                            Venu
                        </p>
                        <p className="text-[6px] sm:text-[max(7px,1.6vh)]">
                            Accra
                        </p>
                    </div>

                    <div className="py-[4vh] flex flex-col items-center space-y-[2px] py-[0.2em] bg-indigo-500/30 w-[100%]">
                        <p className="text-[10px] sm:text-[max(9px,2vh)]">
                            Date
                        </p>
                        <p className="text-[6px] sm:text-[max(7px,1.6vh)]">
                            20/07/2025
                        </p>
                    </div>

                    <div className="grow flex items-center text-[10px] sm:text-[max(9px,2vh)] text-blue-100">
                        <Link className="underline decoration-blue-200" to="#">
                            more...
                        </Link>
                    </div>     
                </div>

                <div className="w-[100%] max-w-[700px] bg-blue-900/90 brightness-[80%] hover:scale-[105%] text-white flex flex-col items-center justify-center min-h-[45vh] max-h-[250px] sm:min-h-[70vh] sm:max-h-[400px] rounded">
                    <p className="text-white font-bold text-[11px] sm:text-[min(12px,2.4vh)] pt-[0.5%] whitespace-nowrap mb-[min(12px,2vh)]">
                        20th Aniversary
                    </p>

                    <div className="flex flex-col items-center text-[8px] py-[0.2em] sm:text-[max(10px,2vh)] text-slate-900 bg-slate-200/50">
                        <p className="bg-purple-500/50 text-slate-800 px-[0.2em]">
                            Description
                        </p>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur quaerat cum exercitationem...
                        </p>             
                    </div>

                    <div className="py-[4vh] flex flex-col items-center space-y-[2px] py-[0.2em] bg-slate-500/20 w-[100%]">
                        <p className="text-[10px] sm:text-[max(9px,2vh)]">
                            Venu
                        </p>
                        <p className="text-[6px] sm:text-[max(7px,1.6vh)]">
                            Accra
                        </p>
                    </div>

                    <div className="py-[4vh] flex flex-col items-center space-y-[2px] py-[0.2em] bg-indigo-500/30 w-[100%]">
                        <p className="text-[10px] sm:text-[max(9px,2vh)]">
                            Date
                        </p>
                        <p className="text-[6px] sm:text-[max(7px,1.6vh)]">
                            20/07/2025
                        </p>
                    </div>

                    <div className="grow flex items-center text-[10px] sm:text-[max(9px,2vh)] text-blue-100">
                        <Link className="underline decoration-blue-200" to="#">
                            more...
                        </Link>
                    </div>     
                </div>


            </div>
        </div>
    )
};