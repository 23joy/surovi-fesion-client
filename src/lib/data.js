export const getDressProduct=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/dress`)
    const data=res.json();
    return data;
}
export const dressDetails=async(DressId)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/dress/${DressId}`)
    const data = res.json();
    return data;
}


export const getShoesProduct=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/shoes`)
    const data=res.json();
    return data;
}

export const shoesDetails=async(ShoesId)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/shoes/${ShoesId}`)
    const data=res.json();
    return data;
}


export const getMakupProduct=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/makup`)
    const data=res.json()
    return data;
}
export const makupDetails=async(MakupId)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/makup/${MakupId}`)
    const data=res.json();
    return data;
}