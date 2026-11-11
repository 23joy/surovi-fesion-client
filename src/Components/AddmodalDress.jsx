"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";

export function AAddmodalDress() {
    const onhandleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const dressProduct = Object.fromEntries(formData.entries())
        dressProduct.features = formData.getAll("features");
        dressProduct.season = formData.getAll("season");
        dressProduct.sizes = formData.getAll("sizes");
        dressProduct.occasion = formData.getAll("occasion");

        dressProduct.price = Number(dressProduct.price);
        dressProduct.discount = Number(dressProduct.discount);
        dressProduct.discountPrice = Number(dressProduct.discountPrice);
        dressProduct.stock = Number(dressProduct.stock);
        dressProduct.rating = Number(dressProduct.rating);
        dressProduct.reviews = Number(dressProduct.reviews);
        console.log(dressProduct)

        const res=await fetch("http://localhost:5001/dress",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(dressProduct)
        })
        const data=await res.json()
        console.log(data);
    }
    return (
        <Modal>
            <Button variant="secondary">+ Add Dress</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Add your favorite dress</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={onhandleSubmit}>
                                    <TextField className="w-full" name="name" variant="secondary">
                                        <Label>Product Name</Label>
                                        <Input placeholder="Enter product name" />
                                    </TextField>

                                    <TextField className="w-full" name="slug" variant="secondary">
                                        <Label>Slug</Label>
                                        <Input placeholder="Enter slug" />
                                    </TextField>

                                    <TextField className="w-full" name="category" variant="secondary">
                                        <Label>Category</Label>
                                        <Input placeholder="Enter category" />
                                    </TextField>

                                    <TextField className="w-full" name="subcategory" variant="secondary">
                                        <Label>Subcategory</Label>
                                        <Input placeholder="Enter subcategory" />
                                    </TextField>

                                    <TextField className="w-full" name="brand" variant="secondary">
                                        <Label>Brand</Label>
                                        <Input placeholder="Enter brand name" />
                                    </TextField>

                                    <TextField className="w-full" name="price" variant="secondary">
                                        <Label>Price</Label>
                                        <Input type="number" placeholder="Enter price" />
                                    </TextField>

                                    <TextField className="w-full" name="discount" variant="secondary">
                                        <Label>Discount (%)</Label>
                                        <Input type="number" placeholder="Enter discount" />
                                    </TextField>

                                    <TextField className="w-full" name="discountPrice" variant="secondary">
                                        <Label>Discount Price</Label>
                                        <Input type="number" placeholder="Enter discount price" />
                                    </TextField>

                                    <TextField className="w-full" name="color" variant="secondary">
                                        <Label>Color</Label>
                                        <Input placeholder="Enter color" />
                                    </TextField>

                                    <TextField className="w-full" name="fabric" variant="secondary">
                                        <Label>Fabric</Label>
                                        <Input placeholder="Enter fabric" />
                                    </TextField>

                                    <TextField className="w-full" name="pattern" variant="secondary">
                                        <Label>Pattern</Label>
                                        <Input placeholder="Enter pattern" />
                                    </TextField>

                                    <TextField className="w-full" name="sleeve" variant="secondary">
                                        <Label>Sleeve</Label>
                                        <Input placeholder="Enter sleeve type" />
                                    </TextField>

                                    <TextField className="w-full" name="neckline" variant="secondary">
                                        <Label>Neckline</Label>
                                        <Input placeholder="Enter neckline" />
                                    </TextField>

                                    <TextField className="w-full" name="fit" variant="secondary">
                                        <Label>Fit</Label>
                                        <Input placeholder="Enter fit" />
                                    </TextField>

                                    <TextField className="w-full" name="length" variant="secondary">
                                        <Label>Length</Label>
                                        <Input placeholder="Enter dress length" />
                                    </TextField>

                                    <TextField className="w-full" name="description" variant="secondary">
                                        <Label>Description</Label>
                                        <Input placeholder="Enter product description" />
                                    </TextField>

                                    <TextField className="w-full" name="stock" variant="secondary">
                                        <Label>Stock</Label>
                                        <Input type="number" placeholder="Enter stock quantity" />
                                    </TextField>

                                    <TextField className="w-full" name="sku" variant="secondary">
                                        <Label>SKU</Label>
                                        <Input placeholder="Enter SKU" />
                                    </TextField>

                                    <TextField className="w-full" name="rating" variant="secondary">
                                        <Label>Rating</Label>
                                        <Input type="number" placeholder="Enter rating" />
                                    </TextField>

                                    <TextField className="w-full" name="reviews" variant="secondary">
                                        <Label>Reviews</Label>
                                        <Input type="number" placeholder="Enter review count" />
                                    </TextField>

                                    <TextField className="w-full" name="image" variant="secondary">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter image URL" />
                                    </TextField>

                                    <TextField className="w-full" name="sizes" variant="secondary">
                                        <Label>Sizes</Label>
                                        <div className="flex gap-4">
                                            {["S", "M", "L", "XL"].map((size) => (
                                                <label key={size}>
                                                    <input type="checkbox" name="sizes" value={size} />
                                                    {size}
                                                </label>
                                            ))}
                                        </div>
                                    </TextField>

                                    <TextField className="w-full" name="features" variant="secondary">
                                        <Label>Features </Label>
                                        <div className="flex gap-4">
                                            {["Lightweight Fabric", "Floral Print", "Comfortable Fit"].map((item) => (
                                                <label key={item}>
                                                    <input type="checkbox" name="features" value={item} />
                                                    {item}
                                                </label>
                                            ))}
                                        </div>
                                    </TextField>

                                    <TextField className="w-full" name="occasion" variant="secondary">
                                        <Label>Occasion</Label>
                                        <div className="flex gap-3">
                                            {["Party", "Casual", "Travel"].map((item) => (
                                                <label key={item}>
                                                    <input type="checkbox" name="occasion" value={item} />
                                                    {item}
                                                </label>
                                            ))}
                                        </div>
                                    </TextField>

                                    <TextField className="w-full" name="season" variant="secondary">
                                        <Label>Season</Label>
                                        <div className="flex gap-3">
                                            {["summer", "winter", "Spring", "Autumn"].map((item) => (
                                                <label key={item}>
                                                    <input type="checkbox" name="season" value={item} />
                                                    {item}
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