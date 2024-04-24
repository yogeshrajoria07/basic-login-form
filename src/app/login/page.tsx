"use client";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { z } from "zod";
import { Button } from '@/components/ui/button'
import verifyType, { loginverify } from "@/redux/slice/verifySlice";
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store";




interface logindata {
    email: string;
    password: string;
}

const loginschema = z.object({
    email: z.string().email({ message: "enter email" }),
    password: z.string().min(8)
});

function page() {

    const { register, handleSubmit, } = useForm<logindata>({ resolver: zodResolver(loginschema), });

    const dispatch = useDispatch();

    const submitdata = (data: logindata) => {
        dispatch(
            loginverify({
                email: data.email,
                password: data.password
            })
        );

        console.log(data);


    };



    return (
        <div className='flex justify-center '>
            <form onSubmit={handleSubmit(submitdata)} className='p-2 border-2 border-solid flex justify-center items-center flex-col w-[200] h-screen text-black'>
                <input type="text" placeholder='email' {...register("email")} className='p-2' />

                <input type="password" placeholder='password' {...register("password")} className='p-2' />

                <div className="bg-white w-full flex justify-center items-center ">
                    <Button>submit</Button>
                </div>
            </form>
        </div>
    )
}

export default page
