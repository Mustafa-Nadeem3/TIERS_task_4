import React, { useEffect, useState } from "react";
import "./styles.css";
import "react-quill/dist/quill.snow.css";
import Navbar from "./Navbar";

export default function ViewBlog() {
  const [content, setContent] = useState([]);

  const HTMLtoText = ({ htmlcode }) => {
    return (
      <div
        style={{
          width: "100%",
          wordWrap: "break-word",
          height: "400px",
          overflowY: "auto",
        }}
      >
        <pre dangerouslySetInnerHTML={{ __html: htmlcode }} />
      </div>
    );
  };

  useEffect(() => {
    async function getBlogs() {
      const response = await fetch("https://complex-pine-rhubarb.glitch.me/get_blog");
      const data = await response.json();
      console.log(data);
      setContent(data);
    }
    getBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <section id="viewBlog">
        <div className="container p-5">
          <div className="row">
            <div className="col-12">
              {content && content.length > 0 ? (
                content.map((data, index) => (
                  <div key={index} className="col-lg-8 col-md-6 col-sm-12 mx-auto">
                    <h2>Blog Title: {data.title}</h2>
                    <h4>Author: {data.name}</h4>
                    <img src={`https://complex-pine-rhubarb.glitch.me/images/${data.image}`} alt="Image" className="w-100 h-100 mb-5"/>
                    <p><HTMLtoText htmlcode={data.blog} /></p>
                    <hr />
                  </div>
                ))
              ) : (
                <p>No content available.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
