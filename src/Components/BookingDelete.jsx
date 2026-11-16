'use client'
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const BookingDelete =({bookingId}) => {

    const handleDelete=async()=>{
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/booking/${bookingId}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json'
            }
        })
        const data=await res.json()
        window.location.reload();
        console.log(data)
    }
    return (
        <AlertDialog>
            <Button variant="outline" className={'rounded-none border-red-500 text-red-500 '}><TrashBin/> Cencle</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong></strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default BookingDelete;