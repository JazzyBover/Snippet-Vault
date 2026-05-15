import React from 'react'

const icons = {
  React: "⚛",
  JavaScript: "JS",
  HTML: "</>",
  CSS: "#"
}

const SnippetItem = ({ item, onDelete, setSelectedSnippet }) => (
  
  <div className="snippet-item">

    <div className="snippet-icon">
      {icons[item.category]}
    </div>

    <div className="snippet-content" onClick={() => setSelectedSnippet(item)}>
      <h3>{item.title}</h3>
      <p>{item.category}</p>
    </div>      
     <button className="delete-btn" onClick={onDelete}> ✕ </button>
    </div>
    )

export default SnippetItem;