import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setitems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setitems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
