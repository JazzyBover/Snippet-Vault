import React from 'react'

const SnippetItem = ({ item }) => {
  return (
    <div className="snippet-item">

      <span>{item.title}</span>
      <small>{item.category}</small>
      
    </div>
  )
}

export default SnippetItem;