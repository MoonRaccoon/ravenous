import React from "react";

function SearchBar() {
  return (
    <section>
      <div>
        <button type='button'>Best Match</button>
        <button type='button'>Highest Rated</button>
        <button type='button'>Most Reviewed</button>
      </div>
      <div>
        <input/>
        <input/>
      </div>
      <button type='button'>Let's Go</button>
    </section>
  );
}

export default SearchBar;