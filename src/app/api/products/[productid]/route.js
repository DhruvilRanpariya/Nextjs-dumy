import { connectionStr } from "@/lib/db";
import Product from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function PUT(req, params) {

    const id = params.params.productid;
    const filter = { _id: id }

    const payload = await req.json()
    // console.log(payload);
    await mongoose.connect(connectionStr);

    let result = await Product.findOneAndUpdate(filter, payload, { new: true, })

    return NextResponse.json({ result,success: true })
}

export async function GET(req, params) {

    await mongoose.connect(connectionStr);
    const _id = params.params.productid;

    const result = await Product.findById(_id)

    return NextResponse.json({ result ,success: true})


}

export async function DELETE(req,params) {

    const id = params.params.productid;
    const record = {_id:id}
    await mongoose.connect(connectionStr);
    const result = await Product.deleteOne(record)

    return NextResponse.json({result,success:true})



}