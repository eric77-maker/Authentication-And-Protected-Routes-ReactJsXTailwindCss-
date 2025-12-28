import { Form, useActionData, useLoaderData, Link } from "react-router";
import {useRef, useEffect} from 'react';

export async function loader(){
    try{
        const userInfo = {firstName: 'Eric', middleName: 'Boakye', 
                    lastName: 'Mpeanin', dateOfBirth: '1999-05-02', username: 'eric89', email: 'esoterbeat@gmail.com', type: 'savings'}
        return userInfo;
    }catch(error){
        return error;
    }
};

export async function action({ request }){
    try{}catch(error){
        return error;
    };
};




export default function EditCustomerInfo(){
    const loaderData = useLoaderData();
    const actionData = useActionData();

    const firstNameRef = useRef(null);
    const middleNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const dateOfBirthRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const typeRef = useRef(null);


    useEffect(() => {
        if(firstNameRef.current){
            firstNameRef.current.value = loaderData.firstName;
            firstNameRef.current.focus();
        };

        if(middleNameRef.current){
            middleNameRef.current.value = loaderData.middleName;
        };

        if(lastNameRef.current){
            lastNameRef.current.value = loaderData.lastName;
        };

        if(dateOfBirthRef.current){
            dateOfBirthRef.current.value = loaderData.dateOfBirth;
        };

        if(usernameRef.current){
            usernameRef.current.value = loaderData.username;
        };

        if(emailRef.current){
            emailRef.current.value = loaderData.email;
        };

        if(typeRef.current){
            typeRef.current.value = loaderData.type;
        };

    }, []);

    return(
        <div className="grow flex flex-col py-0">

            <Form method="post" className="grow flex flex-col space-y-[1vh] rounded">
                <p className="fadeIn customerIndServiceTitle text-[11px] sm:text-[min(14px,2.4vh)] flex justify-center shadow-sm  rounded items-center bg-indigo-700 text-white">
                    Edit Customer Information
                </p>

                <div className="customerIndServiceInfo grow text-[9px] sm:text-[min(11px,2.2vh)] flex flex-col text-slate-800 divide-y divide-indigo-400 rounded bg-indigo-500">
                    <div className="py-[0.7vh] flex space-x-[3px]">
                        <label htmlFor="">First Name:</label>
                        <input type="text" ref={firstNameRef}  className="grow border outline-none border-indigo-300/70 text-white sm:max-w-[50vw] md:max-w-[35vw] lg:max-w-[25vw] rounded pl-1" />
                    </div>
               
                    <div className="py-[0.7vh] flex space-x-[3px]">
                        <label htmlFor="">Middle Name:</label>
                        <input type="text" ref={middleNameRef}  className="grow border outline-none border-indigo-300/70 text-white sm:max-w-[50vw] md:max-w-[35vw] lg:max-w-[25vw] rounded pl-1" />
                    </div>

                    <div className="py-[0.7vh] flex space-x-[3px]">
                        <label htmlFor="">Last Name:</label>
                        <input type="text" ref={lastNameRef}  className="grow border outline-none border-indigo-300/70 text-white sm:max-w-[50vw] md:max-w-[35vw] lg:max-w-[25vw] rounded pl-1" />
                    </div>

                    <div className="py-[0.7vh] flex space-x-[3px]">
                        <label htmlFor="">Birth Date:</label>
                        <input type="date" ref={dateOfBirthRef}   className="grow border outline-none border-indigo-300/70 text-white sm:max-w-[50vw] md:max-w-[35vw] lg:max-w-[25vw] rounded pl-1" />
                    </div>

                    <div className="py-[0.7vh] flex space-x-[3px]">
                        <label htmlFor="">Username:</label>
                        <input type="text" ref={usernameRef}  className="grow border outline-none border-indigo-300/70 text-white sm:max-w-[50vw] md:max-w-[35vw] lg:max-w-[25vw] rounded pl-1" />
                    </div>

                    <div className="py-[0.7vh] flex space-x-[3px]">
                        <label htmlFor="">Email:</label>
                        <input type="email" ref={emailRef}  className="grow border outline-none border-indigo-300/70 text-white sm:max-w-[50vw] md:max-w-[35vw] lg:max-w-[25vw] rounded pl-1" />
                    </div>

                    <div className="py-[0.7vh] flex space-x-[3px]">
                        <label htmlFor="">Type:</label>
                        <input type="text" ref={typeRef}  className="grow border outline-none border-indigo-300/70 text-white sm:max-w-[50vw] md:max-w-[35vw] lg:max-w-[25vw] rounded pl-1" />
                    </div>


                    <div className="py-[0.7vh] flex space-x-[3px]">
                        <label htmlFor="">New Password:</label>
                        <input type="password"  className="grow border outline-none border-indigo-300/70 text-white sm:max-w-[50vw] md:max-w-[35vw] lg:max-w-[25vw] rounded pl-1" />
                    </div>

                    <div className="py-[0.7vh] flex space-x-[3px]">
                        <label className="whitespace-nowrap" htmlFor="">Confirm Password:</label>
                        <input type="password"  className="grow border outline-none border-indigo-300/70 text-white sm:max-w-[50vw] md:max-w-[35vw] lg:max-w-[25vw] rounded pl-1" />
                    </div>

                    <button className="fadeUp mt-[0.4vh] rounded w-[50%] mx-auto border-none bg-indigo-600/80 py-[2px] cursor-pointer transition duration-[0.5s] text-white hover:bg-red-500/90">save changes</button>
                </div>
            </Form>
        </div>
    );
};