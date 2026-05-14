import React from 'react'
import SnippetItem from './SnippetItem';  

const SnippetList = ({ snippets }) => {
  return (
    <div className="snippet-list">
       {snippets.map((item, index) => (
        <SnippetItem key = { index } item = { item } />
      ))}
    </div>
  );
}

export default SnippetList;