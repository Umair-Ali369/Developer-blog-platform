import React, { useContext, useState } from "react";
import { PostsContext } from "../Context/PostsContext";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";
import { Link } from "react-router-dom";
import EditPost from "./EditPost";
import MotionWrapper from "../Animation/MotionWrapper";

const Admin = () => {
  const { localPosts, createPost, deletePost } = useContext(PostsContext);
  const [formDate, setFromData] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formDate.title || !formDate.body) {
      return alert("Please fill all fields");
    }
    createPost(formDate);

    setFromData({ title: "", body: "" });
  };
  return (
    <MotionWrapper>
      <section className="h-auto bg-white dark:bg-gray-700">
        <div className="max-w-4xl mx-auto px-4 pb-8 pt-24">
          <h1 className="text-3xl dark:text-white font-bold mb-6 ">
            Admin Panel
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 shadow-md p-6 rounded-lg mb-10 border"
          >
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Create Post
            </h2>

            <input
              type="text"
              placeholder="Post title...."
              value={formDate.title}
              className="w-full p-4 mb-4 border rounded dark:bg-gray-800 dark:text-white"
              onChange={(e) =>
                setFromData({ ...formDate, title: e.target.value })
              }
            />

            <textarea
              placeholder="Post Content..."
              rows={5}
              value={formDate.body}
              className="w-full p-4 mb-4 border rounded dark:bg-gray-800 dark:text-white"
              onChange={(e) =>
                setFromData({ ...formDate, body: e.target.value })
              }
            ></textarea>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
            >
              {" "}
              Add Post{" "}
            </button>
          </form>

          <h2 className="text-2xl dark:text-white font-semibold mb-4">
            Your Posts
          </h2>

          {localPosts.length === 0 ? (
            <p className="text-gray-400"> NO Posts Found Yet. </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-4">
              {localPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border dark:shadow-lg transition"
                >
                  <h2 className="text-xl font-semibold mb-2 dark:text-white capitalize">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 ">
                    {post.body}
                  </p>
                  <div className="flex gap-4">
                    <Link
                      to={`/edit/${post.id}`}
                      className="px-3 py-1 bg-green-500 text-white rounded"
                    >
                      Eidt
                    </Link>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded"
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Admin;
