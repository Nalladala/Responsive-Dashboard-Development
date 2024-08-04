import React from 'react';
import './searchBar.css';

function SearchBar() {
  return (
   <div className="search-bar">
<from 
className="search-from d-flex align-items-center"
method="POST"
action="#">
<input 
type="text"
name="query"
placeholder="Search"
title="Enter Search keyword"/>
<button type="submit" title="Search">
    <i className="bi bi-search"></i>
</button>

</from>

   </div>
  );
}

export default SearchBar;
