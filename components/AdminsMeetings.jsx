import { NavLink } from "react-router";
import {motion} from "framer-motion"
import meetingPlaceImg from "/src/assets/meetingPlace.jpg";



export function loader(){
    return null;
};

export async function action({ request }){
    try{
        return null;
    }catch(error){
        return error;
    };
}

export default function AdminsMeetings(){
    const meetingAnimStylesVariants = {
        initial: {
            opacity: 0.5,
            x: -30
        },

        animate: {
            opacity: 1,
            x: 0
        }
    };


    return(
        <div className="grow flex flex-col space-y-3 py-[2vh]">
            <div className=" flex flex-col space-y-2 items-center truncate">
                <p className="fadeUp text-[11px] sm:text-[min(12px,2.4vh)] text-indigo-300">
                    All Administration <span className="text-indigo-100">Meetings</span> For This <span className="text-indigo-100">Week</span>
                </p>
            </div>

            <div className="grow flex flex-col items-center space-y-5">
                <motion.div variants={meetingAnimStylesVariants} initial="initial" animate="animate" transition={{delay: 0.125, duration: 0.5}} className="flex items-center space-x-[3%] px-[2%] w-[100%] max-w-[700px] bg-blue-900/90 brightness-[80%] hover:scale-[101%] text-white h-[min(70px,13vh)] rounded">
                    <div className="min-w-[min(45px,10vh)] max-w-[min(12%,11vh)]">
                        <img src={meetingPlaceImg} className="w-[100%] rounded" alt="" />
                    </div>
                    <div className="grow flex justify-between items-center bg-slate-500/50 px-[2%] rounded">
                        <div className="py-[min(2px,0.8vh)]">
                            <div  className="font-bold text-[11px] sm:text-[min(12px,2.4vh)]">20th Aniversary</div>
                            <div className="text-[8px] sm:text-[min(10.5px,2.25vh)]">
                                Venu: Block N
                            </div>
                            <div className="text-[6px] sm:text-[min(8px,1.8vh)]">
                                time: 16:00pm
                            </div>
                        </div>

                        <button className="text-[8px] sm:text-[min(10.5px,2.25vh)] bg-blue-500 hover:bg-blue-500/80 px-[0.4em] py-[0.1em] rounded cursor-pointer">follow</button>
                    </div>
                </motion.div>

                <motion.div variants={meetingAnimStylesVariants} initial="initial" animate="animate" transition={{delay: 0.25, duration: 0.5}} className="flex items-center space-x-[3%] px-[2%] w-[100%] max-w-[700px] bg-blue-900/90 brightness-[80%] hover:scale-[101%] text-white h-[min(70px,13vh)] rounded">
                    <div className="min-w-[min(45px,10vh)] max-w-[min(12%,11vh)]">
                        <img src={meetingPlaceImg} className="w-[100%] rounded" alt="" />
                    </div>
                    <div className="grow flex justify-between items-center bg-slate-500/50 px-[2%] rounded">
                        <div className="py-[min(2px,0.8vh)]">
                            <div  className="font-bold text-[11px] sm:text-[min(12px,2.4vh)]">20th Aniversary</div>
                            <div className="text-[8px] sm:text-[min(10.5px,2.25vh)]">
                                Venu: Block N
                            </div>
                            <div className="text-[6px] sm:text-[min(8px,1.8vh)]">
                                time: 16:00pm
                            </div>
                        </div>

                        <button className="text-[8px] sm:text-[min(10.5px,2.25vh)] bg-blue-500 hover:bg-blue-500/80 px-[0.4em] py-[0.1em] rounded cursor-pointer">follow</button>
                    </div>
                </motion.div>

                <motion.div variants={meetingAnimStylesVariants} initial="initial" animate="animate" transition={{delay: 0.375, duration: 0.5}} className="flex items-center space-x-[3%] px-[2%] w-[100%] max-w-[700px] bg-blue-900/90 brightness-[80%] hover:scale-[101%] text-white h-[min(70px,13vh)] rounded">
                    <div className="min-w-[min(45px,10vh)] max-w-[min(12%,11vh)]">
                        <img src={meetingPlaceImg} className="w-[100%] rounded" alt="" />
                    </div>
                    <div className="grow flex justify-between items-center bg-slate-500/50 px-[2%] rounded">
                        <div className="py-[min(2px,0.8vh)]">
                            <div  className="font-bold text-[11px] sm:text-[min(12px,2.4vh)]">20th Aniversary</div>
                            <div className="text-[8px] sm:text-[min(10.5px,2.25vh)]">
                                Venu: Block N
                            </div>
                            <div className="text-[6px] sm:text-[min(8px,1.8vh)]">
                                time: 16:00pm
                            </div>
                        </div>

                        <button className="text-[8px] sm:text-[min(10.5px,2.25vh)] bg-blue-500 hover:bg-blue-500/80 px-[0.4em] py-[0.1em] rounded cursor-pointer">follow</button>
                    </div>
                </motion.div>

                <motion.div variants={meetingAnimStylesVariants} initial="initial" animate="animate" transition={{delay: 0.5, duration: 0.5}} className="flex items-center space-x-[3%] px-[2%] w-[100%] max-w-[700px] bg-blue-900/90 brightness-[80%] hover:scale-[101%] text-white h-[min(70px,13vh)] rounded">
                    <div className="min-w-[min(45px,10vh)] max-w-[min(12%,11vh)]">
                        <img src={meetingPlaceImg} className="w-[100%] rounded" alt="" />
                    </div>
                    <div className="grow flex justify-between items-center bg-slate-500/50 px-[2%] rounded">
                        <div className="py-[min(2px,0.8vh)]">
                            <div  className="font-bold text-[11px] sm:text-[min(12px,2.4vh)]">20th Aniversary</div>
                            <div className="text-[8px] sm:text-[min(10.5px,2.25vh)]">
                                Venu: Block N
                            </div>
                            <div className="text-[6px] sm:text-[min(8px,1.8vh)]">
                                time: 16:00pm
                            </div>
                        </div>

                        <button className="text-[8px] sm:text-[min(10.5px,2.25vh)] bg-blue-500 hover:bg-blue-500/80 px-[0.4em] py-[0.1em] rounded cursor-pointer">follow</button>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};