import Product from "@/lib/model/product";
import dbUri, { connectionStr } from "../../../lib/db"
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function GET() {
    let data = []
    let success = true
    try {

        const conn = await mongoose.connect(connectionStr);

        data = await Product.find()

    } catch (err) {
        data = {result:err}
        success = false
    }

    return NextResponse.json({ result: data, success: true })

}


export async function POST(req) {
    try {

        const payload = await req.json()
        const db = await mongoose.connect(connectionStr)

        let product = new Product(payload)
        const result = await product.save()

        return NextResponse.json({ result, success: true })

    } catch (err) {
        return NextResponse.json({ result: err })
    }

}

