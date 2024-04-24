"use client";

import { Button } from '@/components/ui/button'
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { signupverify } from '@/redux/slice/verifySlice';

interface formdata {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
};

// create schema 

function page() {

    const signupschema: ZodType<formdata> = z.object({
        firstname: z.string().min(2).max(30),
        lastname: z.string().min(2).max(30),
        email: z.string().email(),
        password: z.string().min(5).max(20),
        confirmpassword: z.string().min(5).max(20),
    })
        .refine((data) => data.password == data.confirmpassword, {
            message: "password do not match",
            path: ["confirmpassword"],
        });

    const { register, handleSubmit } = useForm<formdata>({ resolver: zodResolver(signupschema), });

    const dispatch = useDispatch();

    const submitData = (data: formdata) => {
        dispatch(
            signupverify({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
            })
        );
        console.log("ok done", data)
    }

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit(submitData)} className='flex justify-center items-center flex-col w-[200] h-screen text-black'>
                <label className='text-white'>firstname</label>
                <input type="text" {...register("firstname")} />

                <label className='text-white'>lastName</label>
                <input type="text" {...register("lastname")} />

                <label className='text-white'>email</label>
                <input type="email" {...register("email")} />

                <label className='text-white'>password</label>
                <input type="password" {...register("password")} />

                <label className='text-white'>confirm password</label>
                <input type="password" {...register("confirmpassword")} />

                <Button>submit</Button>
            </form>
        </div>
    )
}

export default page
