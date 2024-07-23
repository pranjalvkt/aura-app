import { NextResponse } from "next/server";

import { connectToDatabase } from '../../utils/db';

export async function GET(request) {
  const db = await connectToDatabase();

  const collection = db.collection('products');
  
  const data = await collection.find({}).toArray();

  return NextResponse.json({ data: data });
}

// export async function POST(request) {
//   const db = await connectToDatabase();

//   const collection = db.collection('products');
  
//   const data = await collection.insertMany([{}]);

//   return NextResponse.json({ data: data });
// }