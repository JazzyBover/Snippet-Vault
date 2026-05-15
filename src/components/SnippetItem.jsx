import React from 'react'

const SnippetItem = ({ item, onDelete, setSelectedSnippet  }) => {
  return (
    <div className="snippet-item"
      onClick={() => setSelectedSnippet(item)}>
        
      <span>{item.title}</span>
      <small>{item.category}</small>
      <button className="delete-btn" onClick={onDelete}> ✕ </button>
      
    </div>
  )
}

export default SnippetItem;