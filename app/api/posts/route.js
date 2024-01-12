import connectMongoDB from "@/libs/database";
import { NextResponse } from "next/server";
import Post from "@/models/posts";

export async function POST(request) {

  const { title, body } = await request.json();
  await connectMongoDB();
  const newPost = await Post.create({ title, body });
  console.log(newPost)
  return NextResponse.json({ message: "successfully added" });
}

export async function GET() {
  await connectMongoDB();
  const posts = await  Post.find()
  return NextResponse.json({posts})
}
