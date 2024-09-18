import DeleteProduct from "@/lib/deletep"
import Link from "next/link"

const getProduct = async () => {

    let data = await fetch("http://localhost:3000/api/products",{
        cache:"no-store"
    })
    data = await data.json()

    if (data.success) {
        return data.result
    } else {
        return { success: false }
    }

}



export default async function Page() {

    const products = await getProduct()
    // console.log(products);

    return (
        <div >
            <h1> Product List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Company</td>
                        <td>Color</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                           
                           <tr key={product._id}>

                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.company}</td>
                                <td>{product.color}</td>
                                <td>{product.category}</td>
                                <td><Link href={"/products/"+product._id}>Edit</Link></td>
                                <td><DeleteProduct id={product._id} />  </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}