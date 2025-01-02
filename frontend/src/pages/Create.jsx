import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import PostService from "../services/post.service";
import Editor from "../components/Editor";

const Create = () => {
  const [postDetail, setPostDetail] = useState({
    title: "",
    summary: "",
    content: "",
    file: null,
  });
  const [content, setContent] = useState("");
  const editorRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "file") {
      setPostDetail({ ...postDetail, [name]: e.target.files[0] });
    } else {
      setPostDetail({ ...postDetail, [name]: value });
    }
  };

  const handleContentChange = (value) => {
    setContent(value);
    setPostDetail({ ...postDetail, content: value });
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.set("title", postDetail.title);
      data.set("summary", postDetail.summary);
      data.set("content", postDetail.content);
      data.set("file", postDetail.file);
      const response = await PostService.createPost(data);
      if (response.status === 200) {
        Swal.fire({
          title: "Create Post",
          text: "Create post successfully",
          icon: "success",
        }).then(() => {
          setPostDetail({
            title: "",
            summary: "",
            content: "",
            file: null,
          });
        });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        title: "Create Post",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen max-h-fit w-5/6">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-5/6 max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create New Post
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={postDetail.title}
              onChange={handleChange}
              className="input input-bordered w-full truncate"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="summary"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Summary
            </label>
            <input
              type="text"
              name="summary"
              value={postDetail.summary}
              onChange={handleChange}
              className="input input-bordered w-full truncate"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Content
            </label>
            <div className="h-32">
              <Editor
                value={content}
                onChange={handleContentChange}
                ref={editorRef}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Upload Image
            </label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="file-input file-input-bordered w-full"
              accept="image/*"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              className="btn btn-error"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button type="submit" href="/" className="btn btn-primary">
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
