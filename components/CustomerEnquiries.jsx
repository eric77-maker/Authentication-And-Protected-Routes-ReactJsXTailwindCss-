import { Outlet } from "react-router";


export function loader(){
    return null;
};





export default function CustomerEnquiries(){
    
    return(
        <div className="grow flex flex-col space-y-2 py-1">
            <Outlet />
        </div>
    );
}