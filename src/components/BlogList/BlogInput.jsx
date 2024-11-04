import React from 'react'
import PropTypes from "prop-types";


function BlogInput(props) {
  const {handleChange, label, type, name}=props
  return (
    <label>
    {label}:
    <input
      type={type}
      name={name}
      onChange={handleChange}
      style={{ border: "none",
        borderBottom: "1px solid #fff", 
        background: "none",
        outline: "none", margin:"8px"}}/> 
  </label>
  )
}

export default BlogInput

BlogInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};
