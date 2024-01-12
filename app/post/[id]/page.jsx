const getTopicById = async (id) => {
    try {
        console.log(id)
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
      });
      const data = await res.json()
      return data;
    } catch (e) {
      console.log(e);
    }
  };

const page = async ({ params }) => {

const {id} = params
  const {post} = await getTopicById(id);
  return (
    <div className="max-w-2xl mx-auto text-center my-10 py-10">
      <article>
        <h1 className="text-xl my-10">{post.title}</h1>
        <p class="text-justify leading-7">{post.body}</p>
      </article>
    </div>
  );
};

export default page;
