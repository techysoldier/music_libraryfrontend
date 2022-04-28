import React, { useState } from "react";
import "./SearchBar.css";


const SearchBar = (props) => {
  const [songSearch, setSongSearch] = useState("");

  function searchResults(event) {
    event.preventDefault();
    let response = props.songs.filter((song_list) => {
      if (song_list.album.includes(songSearch)) {
        return true;
      } else if (song_list.artist.includes(songSearch)) {
        return true;
      } else if (song_list.title.includes(songSearch)) {
        return true;
      } else if (song_list.genre.includes(songSearch)) {
        return true;
      } else if (song_list.release_date.includes(songSearch)) {
        return true;
      }
    });
    props.setSongs(response);
  }

  return (
    <div className="nav-bar">
      <h1 className="heading">Music Library</h1>
      <form onSubmit={searchResults}>
        <div>
          <input
            type="text"
            value={songSearch}
            onChange={(e) => setSongSearch(e.target.value)}
            placeholder="Search here..."
          />{" "}
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;