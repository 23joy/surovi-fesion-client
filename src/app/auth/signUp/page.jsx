"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField } from '@heroui/react';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';


const SingUpPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())
        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password
        })
        if (data) {
            redirect("/")
        }
    }
    return (
        <Card className='max-w-2xl mx-auto mt-10 w-full max-w-md rounded-3xl border border-white/30
               bg-white/80 backdrop-blur-xl shadow-2xl p-8 space-y-5 '>
            <h2 className='p-5 text-center text-2xl font-bold'>SignIN</h2>
            <Form className="w-full max-w-96" onSubmit={onSubmit}>
                <Fieldset>
                    <FieldGroup>
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit">
                            submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </Card>
    );
};

export default SingUpPage;