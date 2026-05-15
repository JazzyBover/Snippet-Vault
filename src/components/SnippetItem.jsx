import React from 'react'

const SnippetItem = ({ item, onDelete, setSelectedSnippet  }) => {
  return (
    <div className="snippet-item"
      onClick={() => setSelectedSnippet(item)}>

      <div className="snippet-icon">
        {item.category === "React" && "⚛"}
        {item.category === "JavaScript" && "JS"}
        {item.category === "HTML" && "</>"}
        {item.category === "CSS" && "#"}
        </div>  
        
      <div className="snippet-content">
        <h3>{item.title}</h3>
        <p>{item.category}</p>

</div>
      <button className="delete-btn" onClick={onDelete}> ✕ </button>
      
    </div>
  )
}

export default SnippetItem;