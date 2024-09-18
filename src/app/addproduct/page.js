"use client"
import { useState } from "react"
import "../style.css"

export default function Page() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");

    const addProduct = async () => {
        const detail = { name, price, company, color, category }
        // console.log(name, price, company, color, category);

        let result = await fetch("http://localhost:3000/api/products", {
            method: "post",
            body: JSON.stringify(detail)
        })

        result = await result.json()

        if (result.success) {
            alert("New Product Added")

            setName("");
            setPrice("");
            setCompany("");
            setColor("");
            setCategory("");
        }
    }

    return (
        <div className="add-user">
            <h1>Add Product</h1>
            <input value={name} type="text" placeholder="Enter Product Name" className="input-field" required onChange={(e) => setName(e.target.value)} />
            <input value={price} type="number" placeholder="Enter Price" className="input-field" required onChange={(e) => setPrice(e.target.value)} />
            <input value={company} type="text" placeholder="Enter Company" className="input-field" required onChange={(e) => setCompany(e.target.value)} />
            <input value={color} type="text" placeholder="Enter Color" className="input-field" required onChange={(e) => setColor(e.target.value)} />
            <input value={category} type="text" placeholder="Enter Category" className="input-field" required onChange={(e) => setCategory(e.target.value)} />
            <button onClick={addProduct} className="btn">Add Product</button>
        </div>
    )
}