import React from 'react'
import SnippetItem from './SnippetItem';  

const SnippetList = ({ snippets, deleteSnippet, setSelectedSnippet }) => {
  return (
    <div className="snippet-list">
       {snippets.map((item, index) => (
        <SnippetItem key = { index } item = { item } onDelete={() => deleteSnippet(index)} setSelectedSnippet={setSelectedSnippet} />
      ))}
    </div>
  );
}

export default SnippetList;