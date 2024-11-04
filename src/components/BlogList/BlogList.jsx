import React, { useState } from 'react';
import BlogItem from './BlogItem';
import { Button, Container } from '@mui/material';
import "../BlogList/BlogList.css";
import PropTypes from "prop-types";


function BlogList({ blogs, onRemoveBlog, onUpdateBlog }) {
    const [sortBy, setSortBy] = useState();
    const [isSorted, setIsSorted] = useState(false);

    const toSort = () => {
        setIsSorted(!isSorted);
        console.log(!isSorted);
    };

    const sortedBlogs = [...blogs].sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(a.date) - new Date(b.date);
        } else if (sortBy === 'author') {
            return b.author.localeCompare(a.author);
        }
        return 0;
    });

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const finalSortedBlogs = isSorted ? sortedBlogs.slice().reverse() : sortedBlogs;

    return (
        <Container sx={{ marginRight: "2px" }}>
            <div className='blogs'>
                <div className='blog-list'>
                   
                    <div  className='sorting-div'>
                    <Button onClick={toSort} color="primary">Sırala</Button>
                    {isSorted &&
                        <select className='sorting' value={sortBy} onChange={handleSortChange}>
                            <option style={{background:"transparent"}} value="date">Tarihe Göre</option>
                            <option style={{background:"transparent"}} value="author">Yazara Göre</option>
                        </select>
                    }
                    </div>
                    {finalSortedBlogs.map((blog) => (
                        <BlogItem key={blog.id} blog={blog} onRemoveBlog={onRemoveBlog} onUpdateBlog={onUpdateBlog} />
                    ))}
                   
                </div>
            </div>
        </Container>
    );
}

BlogList.propTypes = {
    blogs: PropTypes.array.isRequired, 
    onRemoveBlog: PropTypes.func.isRequired,
    onUpdateBlog: PropTypes.func.isRequired
};
export default BlogList;

