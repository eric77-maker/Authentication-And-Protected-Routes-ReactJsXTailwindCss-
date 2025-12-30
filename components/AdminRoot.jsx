import profileImg from '/src/assets/img6.jpeg';
import { NavLink, redirect } from 'react-router';


export function loader(){
    if(!true){
        return redirect('../login');
    }
    return null;
};


export default function AdminRoot(){
    return(
        <div className="grow pt-5 flex flex-col items-center rounded">
            <p className='fadeIn text-[14px] sm:text-[min(14px,12vh)] text-blue-200'>
                Welcome
            </p>

            <div className="w-[50%] text-white flex flex-col pt-[3%] space-y-[min(12px,2.2vh)] items-center">
                <figure className="w-[80%] flex flex-col items-center">
                    <img className="rounded-full w-[60%] min-w-[100px] max-w-[150px]" src={profileImg} alt="" />
                    <figcaption className="hidden sm:block fadeUp relative w-[100%] hover:scale-[101%] pl-[23px] sm:pl-[0] md:pl-[15px] text-[11px] text-center truncate sm:text-[min(14px,2.4vh)] mt-[2vh] px-[2%] rounded text-white bg-slate-600 brightness-[80%] shadow-lg shadow-slate-700/70">
                        <span className='absolute top-[2%] left-[1%] text-[90%] text-blue-200'>CEO</span> <span className='text-white inline-block font-bold text-[12px] sm:text-[min(14.5px,2.5vh)] bg-purple-500/50 px-[0.5em]'>Kim Tyaeyung</span>
                    </figcaption>
                    <figcaption className="flex flex-col items-center space-y-[min(5px,2vh)] pb-[min(5px,2vh)] sm:hidden fadeUp min-w-[100px] w-[120%] sm:w-[100%] hover:scale-[101%] text-[11px] text-center truncate sm:text-[min(14px,2.4vh)] mt-[2vh] px-[2%] rounded text-white bg-slate-600 brightness-[80%] shadow-lg shadow-slate-700/70">
                        <span className='text-[100%] text-blue-200'>CEO</span> <span className='text-white font-bold text-[12px] sm:text-[min(14.5px,2.5vh)] bg-purple-500/50 px-[0.5em]'>Kim Tyaeyung</span>
                    </figcaption>
                </figure>
            </div>

            <div className='mt-[5vh] px-[2vw] py-[1vh] text-blue-200 flex flex-col items-center space-y-[min(5.7px,3vh)] text-[9px] sm:text-[min(12px,2.2vh)]'>
                <NavLink className="underline hover:text-blue-300 hover:font-bold transition underline-offset-2 decoration-green-300" to="../activities">View Activities</NavLink>
                <NavLink className="underline hover:text-blue-300 hover:font-bold transition underline-offset-2 decoration-green-300" to="../meetings">Follow Meetings</NavLink>
                <NavLink className="underline hover:text-blue-300 hover:font-bold transition underline-offset-2 decoration-green-300" to=".">Seek Promotion</NavLink>
            </div>
        </div>
    )
};