"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteMakup({makupDetail}) {
    const{_id,name}=makupDetail;

    const handleDelete=async(e)=>{
        e.preventDefault()
        const res=await fetch(`http://localhost:5001/makup/${_id}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json'
            },
           // body:JSON.stringify()
        })
        const data=await res.json()
        redirect('/products/makup')
        console.log(data)
    }
  return (
    <AlertDialog>
      <Button variant="outline">Delete Project</Button>
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
                This will permanently delete <strong>{name}</strong> and all of its
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
}