import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import'./AlbumDetails.css'

function AlbumDetails() {
  const [album, setAlbum] = useState(null);
  const { albumId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/Albums/${albumId}`)
      .then((response) => response.json())
      .then((data) => {
        setAlbum(data);
      });
  }, [albumId]);

  if (!album) {
    return <div>Loading...</div>;
  }

  let  {songs}= album;

  return (
    <div>
    <div className='SongsStyle'>
    <ul>
        {Object.values(songs).map((song) => (
          <li key={album.id}>{song}</li>
        ))}
      </ul>
    </div>
      
    </div>
  );
}

export default AlbumDetails;
