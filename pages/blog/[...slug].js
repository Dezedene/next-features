import { useRouter } from 'next/router'

const BlogPostPage = () => {
  const router = useRouter()
  console.log('🤖💬 ~ :', router.query);
  console.log('🤖💬 ~ :', typeof router.query);

// the [...] mean catch all
// for example if we go to URL http://localhost:3000/blog/2020/12
// router.query = an object containing an array of 2 strings, slug: ["2020", "12"]
// Now we can use this values to make a request to our database to filter our request
// It allow us to make dynamic path

  return (
    <div>
      <h1>Blog Post Page</h1>
    </div>
  );
};

export default BlogPostPage;
