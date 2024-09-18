"use client"

import  {useRouter}  from "next/navigation"

export default function DeleteProduct(params) {
    const id = params.id
    const router = useRouter();
    const deleteProduct = async () => {
        let result = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE",
            // cache: "no-store"
        })

        result = await result.json()

        if (result.success) {
            alert("Product Deleted successfully...")
            router.push("/products")
            console.log("this page is rediret to products page");
            
        }

    }

    return <button onClick={deleteProduct}>Delete</button>
}