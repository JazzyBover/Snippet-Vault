import React from 'react'
import { useState } from 'react'

const Editor = ({addSnippet}) => {                                                         
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();                                                                         
  const snippet = {
    title,
    category,
    code             };

  addSnippet(snippet);                                                                       //Pass new snippet to parent component
  setTitle('');        
  setCategory('');   
  setCode('');                       }     

  return (
    <>
  <form onSubmit={handleSubmit} className="editor-form">

    {/* TOP ROW */}
    <div className="top-bar">

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="title-input"
      />

      <div className="radio-group">

        <label>
          <input
            type="radio"
            name="category"
            value="JavaScript"
            checked={category === "JavaScript"}
            onChange={(e) => setCategory(e.target.value)}
          />
          JavaScript
        </label>

        <label>
          <input
            type="radio"
            name="category"
            value="React"
            checked={category === "React"}
            onChange={(e) => setCategory(e.target.value)}
          />
          React
        </label>

        <label>
          <input
            type="radio"
            name="category"
            value="HTML"
            checked={category === "HTML"}
            onChange={(e) => setCategory(e.target.value)}
          />
          HTML
        </label>

        <label>
          <input
            type="radio"
            name="category"
            value="CSS"
            checked={category === "CSS"}
            onChange={(e) => setCategory(e.target.value)}
          />
          CSS
        </label>

      </div>

      <button type="submit" className="save-btn">
        Save
      </button>

    </div>

    {/* TEXTAREA */}
    <textarea
      className="code-area"
      placeholder="Write your code here..."
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />

  </form>
    </>
  );
}

export default Editor;