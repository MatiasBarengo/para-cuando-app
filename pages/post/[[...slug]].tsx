import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  console.log(router);

  return <div>Post page</div>;
};

export default Post;
