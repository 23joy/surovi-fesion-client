"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function AddModalShoes() {

    const onhandleSubmit=async(e)=>{
        e.preventDefault();
        const formData=new FormData(e.currentTarget)
        const ShoesProduct=Object.fromEntries(formData.entries())

        ShoesProduct.sizes=formData.getAll("sizes")

        ShoesProduct.price=Number(ShoesProduct.price);
        ShoesProduct.oldprice=Number(ShoesProduct.oldprice);
        ShoesProduct.stock=Number(ShoesProduct.stock);
        console.log(ShoesProduct)

        const res=await fetch("http://localhost:5001/shoes",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(ShoesProduct)
        })
        const data=await res.json()
        console.log(data);

    }
    return (
        <Modal>
            <Button variant="secondary" className={"bg-rose-950 bg-none text-white rounded-2xl"}>+ Add Shoes</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Add your favorite Shoes</Modal.Heading>
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

                                    <TextField className="w-full" name="price" variant="secondary">
                                        <Label>Price</Label>
                                        <Input type="number" placeholder="Enter price" />
                                    </TextField>

                                    <TextField className="w-full" name="color" variant="secondary">
                                        <Label>Color</Label>
                                        <Input placeholder="Enter color" />
                                    </TextField>

                                    <TextField className="w-full" name="description" variant="secondary">
                                        <Label>Description</Label>
                                        <Input placeholder="Enter product description" />
                                    </TextField>

                                    <TextField className="w-full" name="stock" variant="secondary">
                                        <Label>Stock</Label>
                                        <Input type="number" placeholder="Enter stock quantity" />
                                    </TextField>

                                    <TextField className="w-full" name="featured" variant="secondary">
                                        <Label>Featured Product</Label>
                                        <input type="checkbox" name="featured" value="true" />
                                    </TextField>


                                    <TextField className="w-full" name="oldprice" variant="secondary">
                                        <Label>OldPrice</Label>
                                        <Input type="number" placeholder="Enter oldprice" />
                                    </TextField>

                                    <TextField className="w-full" name="image" variant="secondary">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter image URL" />
                                    </TextField>

                                    <TextField className="w-full" name="sizes" variant="secondary">
                                        <Label>Sizes</Label>
                                        <div className="flex gap-4">
                                            {["36", "37", "38", "40"].map((size) => (
                                                <label key={size}>
                                                    <input type="checkbox" name="sizes" value={size} />
                                                    {size}
                                                </label>
                                            ))}
                                        </div>
                                    </TextField>
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