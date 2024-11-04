import React, { useState } from "react"; // Import useState from React
import BlogInput from "./BlogInput";
import "../BlogList/AddNewBlog.css";
import Button from "../UI/Button";
import blogData from "../../data/blogData";

function AddNewBlog({ blogs, setBlogs }) {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
  });

  function handleChange({ target: { name, value } }) {
    setBlog({ ...blog, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isFormValid = Object.values(blog).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      console.error("Input alanları boş geçilemez!");
      return;
    }

    const newBlog = {
      title: blog.title,
      content: blog.content,
      author: blog.author,
      date: blog.date,
      id:Math.random()
    };
    
    setBlogs([...blogs, newBlog]);
    blogData.push(newBlog)

    console.log(blogs);
    
  }

  const blogInputs = [
    {
      label: "Title",
      type: "text",
      name: "title",
    },
    {
      label: "Content",
      type: "text",
      name: "content",
    },
    {
      label: "Author",
      type: "text",
      name: "author",
    },
    {
      label: "Date",
      type: "text",
      name: "date",
    },
  ];

  return (
    <div className="new-blog">
     
      <form
        style={{ display: "flex", flexDirection: "column", padding: "20px" }}
        onSubmit={handleSubmit}
      >
        {blogInputs.map((input, index) => (
          <BlogInput key={index} {...input} handleChange={handleChange} />
        ))}
        <Button color="danger">Blog Ekle</Button>
      </form>
    </div>
  );
}

export default AddNewBlog;
