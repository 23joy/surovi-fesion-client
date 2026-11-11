"use client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";

export function AddModalMakup() {
    const [benefits, setBenefits] = useState([""]);

    const addBenefit = () => {
        setBenefits([...benefits, ""]);
    };

    const removeBenefit = (index) => {
        setBenefits(benefits.filter((_, i) => i !== index));
    };

    const handleBenefitChange = (index, value) => {
        const updated = [...benefits];
        updated[index] = value;
        setBenefits(updated);
    };
    const onhandleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const makeupProduct = Object.fromEntries(formData.entries())

        makeupProduct.benefit = benefits;


        makeupProduct.price = Number(makeupProduct.price);
        makeupProduct.stock = Number(makeupProduct.stock);

        const res = await fetch("http://localhost:5001/makup", {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(makeupProduct)
        })
        const data = await res.json()

        console.log(data);
    }
    return (
        <Modal>
            <Button variant="secondary" className={'bg-red-950 text-white rounded-2xl'}>+ Add Makup Product</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Add your Favorite Makup</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={onhandleSubmit}>
                                    <TextField className="w-full" name="name" variant="secondary">
                                        <Label>Product Name</Label>
                                        <Input placeholder="Enter product name" />
                                    </TextField>

                                    <TextField className="w-full" name="category" variant="secondary">
                                        <Label>Category</Label>
                                        <Input placeholder="Enter category" />
                                    </TextField>

                                    <TextField className="w-full" name="brand" variant="secondary">
                                        <Label>Brand</Label>
                                        <Input placeholder="Enter brand name" />
                                    </TextField>

                                    <TextField className="w-full" name="price" variant="secondary">
                                        <Label>Price</Label>
                                        <Input type="number" placeholder="Enter price" />
                                    </TextField>

                                    <TextField className="w-full" name="description" variant="secondary">
                                        <Label>Description</Label>
                                        <Input placeholder="Enter product description" />
                                    </TextField>

                                    <TextField className="w-full" name="image" variant="secondary">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter image URL" />
                                    </TextField>

                                    <TextField className="w-full" name="stock" variant="secondary">
                                        <Label>Stock</Label>
                                        <Input />
                                    </TextField>


                                    {/* Benefits */}
                                    <div className="space-y-4">

                                        <div className="flex justify-between items-center">
                                            <h2 className="text-xl font-semibold">Product Benefits</h2>

                                            <Button type="button" onPress={addBenefit}>
                                                + Add More
                                            </Button>
                                        </div>

                                        {benefits.map((benefit, index) => (
                                            <div key={index}>
                                                <Input
                                                    name="benefit"
                                                    placeholder="Enter benefit"
                                                    value={benefit}
                                                    onChange={(e) => handleBenefitChange(index, e.target.value)}
                                                />

                                                {benefits.length > 1 && (
                                                    <Button
                                                        type="button"
                                                        variant="danger"
                                                        onPress={() => removeBenefit(index)}
                                                    >
                                                        Remove
                                                    </Button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <Button type="submit">Submit</Button>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}