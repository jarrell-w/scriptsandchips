import ReadMore from "@/components/ReadMore";
import Image from "next/image";
import Link from "next/link";
//
// @TODO -replace blog post paragraph & title on this paragraph with the most recent blog post
export default async function Home() {
  const getPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
      });
      const data = await res.json();
      return data.posts || [];
    } catch (e) {
      console.log(e);
    }
  };

  let hasPosts;
  const posts = await getPosts();
  if (posts.length >= 1) {
    hasPosts = "yes";
  } else {
    hasPosts = null;
  }

  const limitWords = (sentence) => {
    const wordLimit = Math.floor(Math.random() * (35 - 5 + 15)) + 25;
    const splitSentence = sentence.split(" ");
    if (splitSentence.length > wordLimit) {
      return splitSentence.slice(0, wordLimit).join(" ") + "...";
    } else {
      return sentence;
    }
  };
  const mainPost = limitWords(posts[0].body);
  return (
    <div>
      <div className="max-w-3xl mx-auto my-5">
        <div className="flex items-center justify-center my-10">
          <Image
            src={"/images/cover.png"}
            alt={"A logo"}
            width={"500"}
            height={"300"}
          />
        </div>
        <div className="text-center my-4">
          <h1 className="text-2xl ">Most Recent Blog Post</h1>
        </div>
        <div className="flex flex-col justify-between px-4">
          <div className="flex flex-col">
            <p className="text-justify py-5 text-lg">
              {!hasPosts ? "Hello World" : mainPost}
            </p>
            <div className="flex justify-center items-center my-5">
              <ReadMore mainPost={posts[0]._id}/>
            </div>
            <div className="max-w-3xl w-full mx-auto my-10 text-left border">
              <h1 className="text-2xl text-center my-5">Other Posts</h1>
              <ul className="flex flex-col gap-7 cursor-pointer hover text- list-disc px-2">
                {posts.slice(1).map((post, index) => {
                  const limitedBody = limitWords(post.body);
                  return (
                    <li key={index} className="hover:text-gray-600">
                      <Link href={`/post/${post._id}`}>
                      {!hasPosts
                        ? "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                        : limitedBody}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
