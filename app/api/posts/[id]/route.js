import connectMongoDB from "@/libs/database";
import Post from "@/models/posts";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const post = await Post.findOne({_id: id})
  return NextResponse.json({post})
}
