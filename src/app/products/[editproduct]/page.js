
"use client"
import { useEffect, useState } from "react"
import "../../style.css"
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

export default function Page({ params }) {


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        getProductDetail()
    },[])


    const getProductDetail = async () => {
        let id = params.editproduct;
        // console.log(id);

        let data = await fetch(`http://localhost:3000/api/products/${id}`);
        data = await data.json()
        // console.log(data.success);

        if (data.success) {
            let result = data.result
            setName(result.name)
            setPrice(result.price)
            setCompany(result.company)
            setColor(result.color)
            setCategory(result.category)
        }
    }

    const updateProduct = async()=>{
        let id = params.editproduct;
        const newData = {name,price,company,color,category}

        let result = await fetch(`http://localhost:3000/api/products/${id}`,{
            method:"PUT",
            body:JSON.stringify(newData)
        })

        result =await result.json();

        if(result.success){
            alert("Detail Updated Successfully...")

        // redirect("/products")
        }

    }

    return (

        <div className="add-user">
            <h1>Update Product</h1>
            <input value={name} type="text" placeholder="Enter Product Name" className="input-field" required onChange={(e) => setName(e.target.value)} />
            <input value={price} type="number" placeholder="Enter Price" className="input-field" required onChange={(e) => setPrice(e.target.value)} />
            <input value={company} type="text" placeholder="Enter Company" className="input-field" required onChange={(e) => setCompany(e.target.value)} />
            <input value={color} type="text" placeholder="Enter Color" className="input-field" required onChange={(e) => setColor(e.target.value)} />
            <input value={category} type="text" placeholder="Enter Category" className="input-field" required onChange={(e) => setCategory(e.target.value)} />
            <button className="btn" onClick={updateProduct} >Update Product</button>
            <div><Link href="/products">Go to Product List</Link>
            </div>
        </div>
    )
}