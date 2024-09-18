// import { NextResponse } from "next/server";
// import { writeFile } from "fs/promises"

// export async function POST(rea, params) {

//     const data = await req.formData()
//     const file = data.get('file');

//     if (!file) {
//         return NextResponse.json({ msg: "Image not Selected, please Select Image" })
//     }

//     const imgData = await file.arrayBuffer();
//     const buffer = Buffer.from(imgData)
//     const path = `./public/${file.name}`
//     await writeFile(path, buffer)
//     return NextResponse.json({ "msg": "file Uploaded succ..." })
// }