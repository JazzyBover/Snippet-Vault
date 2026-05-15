import React from "react";
import { useState,useEffect } from "react";
import SearchBar from "./components/SearchBar";
import SnippetList from "./components/SnippetList";
import Editor from "./components/Editor";
import "./App.css";

const App = () =>  {

  const [selectedSnippet, setSelectedSnippet] = useState(null);

  const [snippets, setSnippets] = useState(() => {
    return JSON.parse(localStorage.getItem("snippets")) || [ ];                                 //Load snippets from localStorage on initial render
    } );   
  const [search, setSearch] = useState('');

  useEffect(() => {
  localStorage.setItem("snippets", JSON.stringify(snippets));                                  //Save snippets to localStorage whenever they change
   }, [snippets]);  

   const addSnippet = (newSnippet) => {
    setSnippets([...snippets, newSnippet]);                                                        //Add new snippet to state
  };

  const deleteSnippet = (indexToDelete) => {
  setSnippets(
    snippets.filter((_, index) => index !== indexToDelete)
  );
};

  const filteredSnippets = snippets.filter((val) => {
    return (
      val.title.toLowerCase().includes(search.toLowerCase())   || 
      val.category.toLowerCase().includes(search.toLowerCase())   );                  //Filter snippets based on search query 
    });                                                                                                                                                                                                       

 return (
    <div className="app">
      {/* LEFT SIDE */}
      <div className="middle">
        <h1 className="logo" onClick={() => window.location.reload()}>SnippetVault</h1>
        <SearchBar search={search}  setSearch={setSearch} />
        <p className="section-title">SNIPPETS</p>
        <SnippetList snippets={filteredSnippets}  setSelectedSnippet={setSelectedSnippet}  deleteSnippet={deleteSnippet}/>
      </div>

      {/* RIGHT SIDE */}
      <div className="editor">
        <div className="editor-header">
          <div className="editor-actions">
            </div>
            </div>
            <Editor addSnippet={addSnippet}  selectedSnippet={selectedSnippet}  setSelectedSnippet={setSelectedSnippet}/>
            </div>
    </div>
  );
}

export default App;
