"use client"
import { authClient } from '@/lib/auth-client';
import { Eye, EyeSlash } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, FieldGroup, Fieldset, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const SingUpPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())
        console.log(userData)
        const { data, error } = await authClient.signUp.email({
            name: userData.names,
            email: userData.email,
            password: userData.password,
        })
        console.log(userData)
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
                            name="names"
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