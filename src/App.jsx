import { useState } from "react";
import "./App.css";
import BlogList from "./components/BlogList/BlogList";
import AddNewBlog from "./components/BlogList/AddNewBlog";
import { blogData } from "./data/blogData";

function App() {
  const [blogs, setBlogs] = useState(blogData);
  const removeBlog = (blogId) => {

    setBlogs([...blogs.filter((blog) => blog.id !== blogId)])
  }

  const updateBlog =(newBlog)=>
    {
       const updatedblogs = blogs.map((blog)=>
      {
        if (blog.id !== newBlog.id)
          {return blog}
        return newBlog
  
      })
      setBlogs([...updatedblogs])
    }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(189, 133, 185)",
      }}
    >
      <h2
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "200px",
          marginLeft: "500px",
          marginTop: "20px",
          fontFamily: "sans-serif",
          color: "#fff",
        }}
      >
        Blog Site
      </h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <AddNewBlog blogs={blogs} setBlogs={setBlogs} />
        <BlogList onRemoveBlog={removeBlog} blogs={blogs} onUpdateBlog={updateBlog} />
      </div>
    </div>
  );
}

export default App;
