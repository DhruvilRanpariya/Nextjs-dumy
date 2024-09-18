"use client"
import Link from "next/link";
import "./style.css"
import { useState } from "react";

export default  function Home() {

  // const [file, setFile] = useState()

  // const onSubmit =async (e) => {

  //   e.preventDefault();
  //   // console.log(file);

  //   const imgData = new FormData()
  //   imgData.set('file',file)

  //   const result = await fetch('api/upload',{
  //     method:"POST",
  //     body:imgData
  //   });

  //   console.log(result);
    

  // }


  return (
    <div className="main">
      <h1>Next with MongoDB</h1>

      <Link href="/addproduct"><h2>Add Product</h2></Link>
      <Link href="/products"><h2>Product List</h2></Link>

      {/* <h2> Upload Image</h2>
      <form onSubmit={onSubmit}>

        <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />
        <button type="submit">Upload Now</button>

      </form> */}




    </div>
  );
}
