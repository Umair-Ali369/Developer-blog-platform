import { useContext } from "react";
import { Link } from "react-router-dom";
import MotionWrapper from "../Animation/MotionWrapper";

const PostCard = ({post}) => {
    
  return (
    <MotionWrapper>

   <div className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-lg transition">
    <h2 className="text-xl font-semibold mb-2 dark:text-white capitalize">
        {post.title.slice(0, 40)}...
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-4 ">
        {post.body.slice(0, 80)}...
    </p>
    <Link to={`/post/${post.id}`} className="text-blue-500 font-medium hover:underline"> Read More  </Link>
   </div>
    </MotionWrapper>
  )
}

export default PostCard