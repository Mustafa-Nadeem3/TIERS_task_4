import React, { useRef, useState } from "react";
import "./styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "./Navbar";

export default function CreateBlog() {
  const [content, setContent] = useState("");
  
  const quillref = useRef(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link"],
      [{ align: [] }],
      ["image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "link",
    "align",
    "image",
  ];

  const getText = () => {
    if (quillref.current) {
      const editor = quillref.current.getEditor();
      const text = editor.root.innerHTML;
      setContent(text);
    }
  };

  return (
    <>
      <Navbar />
      <section id="createBlog">
        <div className="container p-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center w-100">
              <div className="col-6">
                <form action={`http://localhost:4000/post_blog?blog=${content}`} method="post" encType="multipart/form-data">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="Enter Blog Title"
                    />
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter Your Name"
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                    />
                    <label htmlFor="image">Cover Image</label>
                  </div>
                  <ReactQuill
                    ref={quillref}
                    value={content}
                    modules={modules}
                    formats={formats}
                    style={{ height: "300px" }}
                    onChange={getText}
                  />
                  <button className="text-white bg-black rounded-pill p-2 mybtn d-flex mx-auto">
                    Post Blog
                  </button>
                </form>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center w-100"></div>
          </div>
        </div>
      </section>
    </>
  );
}
