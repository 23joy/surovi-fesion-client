"use client"
import { authClient } from '@/lib/auth-client';
import { Eye, EyeSlash } from '@gravity-ui/icons';
import { Button, Card, Checkbox, Description, FieldError, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignInPage = () => {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries())
        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,

        })
        console.log(data);
        if (data) {
            toast.success("SignIn successfully")
            setTimeout(() => {
                router.push("/")
            })
        }
        else if (error) {
            toast.error("The user is not SignUp")
        }

    };
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data)
    };
    return (
        <Card className='max-w-2xl mx-auto mt-10 w-full max-w-md rounded-3xl border border-white/30
        bg-white/80 backdrop-blur-xl shadow-2xl p-8 space-y-5 '>
            <h2 className='p-5 text-center text-2xl font-bold'>SignIN</h2>
            <Form
                className="flex w-96 flex-col gap-4 space-y-5 p-10"
                onSubmit={onSubmit}
            >
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField className="w-full max-w-[280px]" name="password">
                    <Label>Password</Label>
                    <InputGroup>
                        <InputGroup.Input
                            className="w-full max-w-[280px]"
                            type={isVisible ? "text" : "password"}
                            name='password'
                            placeholder='your password'
                        />
                        <InputGroup.Suffix className="pe-0">
                            <Button
                                isIconOnly
                                aria-label={isVisible ? "Hide password" : "Show password"}
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                            </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>
                <div className="flex flex-col gap-2">
                    <div className='flex gap-2'>
                        <Button type="submit " className={'bg-[#7B2024]'} >
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </div>
                <p className="text-center font-extrabold m-3">or continue with</p>
                <Button onClick={handleGoogleSignIn} className="w-full mt-3" variant="tertiary">
                    <Icon icon="devicon:google" />
                    Sign in with Google
                </Button>
            </Form>

        </Card>
    );
}
export default SignInPage;