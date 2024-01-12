"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });
      if (res.ok) {
        router.push('/')
      }
    } catch (e) {
      throw new Error(e);
    }

  };


  return (
    <div>
      <div className="flex flex-col max-w-3xl mx-auto my-5 border border-gray-200 shadow-xl px-10">
        <h1 className="my-10 text-center text-xl">Create New Post</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 flex-shrink"
        >
          <div>
            <label htmlFor="title"></label>
            <input
              name="title"
              placeholder="Title your post..."
              type="text"
              className="w-full h-12 border border-b-gray-300 focus:outline-none focus:border-gray-300"
              onChange={(e => setTitle(e.target.value))}
              value={title}
            />
          </div>
          <div>
            <label htmlFor="Body"></label>
            <textarea
              className="w-full h-72 border border-gray-200 focus:outline-none focus:border-gray-300"
              name="body"
              placeholder="Write your post..."
              onChange={(e => setBody(e.target.value))}
              value={body}
            ></textarea>
            <div className="flex">
            <input
              name="title"
              placeholder="Title your post..."
              type="submit"
              className="bg-black text-white  px-2 py-2 mx-2 my-7 hover:bg-gray-800 cursor-pointer rounded"
            />
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
