export const getDressProduct=async()=>{
    'use server'
    const res=await fetch("http://localhost:5001/dress")
    const data=res.json();
    return data;
}
export const dressDetails=async(DressId)=>{
    const res=await fetch(`http://localhost:5001/dress/${DressId}`)
    const data = res.json();
    return data;
}


export const getShoesProduct=async()=>{
    'use server'
    const res=await fetch("http://localhost:5001/shoes")
    const data=res.json();
    return data;
}

export const shoesDetails=async(ShoesId)=>{
    const res=await fetch(`http://localhost:5001/shoes/${ShoesId}`)
    const data=res.json();
    return data;
}


export const getMakupProduct=async()=>{
    'use server'
    const res=await fetch("http://localhost:5001/makup")
    const data=res.json()
    return data;
}
export const makupDetails=async(MakupId)=>{
    const res=await fetch(`http://localhost:5001/makup/${MakupId}`)
    const data=res.json();
    return data;
}