import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";

const page = async () => {
  const { data } = await axiosInstance.get(`/items`);
{/* <Post key={post?._id} post={post} /> */}

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <Post key={post?._id} post={post}/>)}
      </div>
    </Container>
  );
};

export default page;
