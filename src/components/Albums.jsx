import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import'./Albums.css'
function Albums() {
    let[items,setItems]=useState([])
    useEffect(()=>{
fetch("http://localhost:5000/Albums")
.then((response)=>response.json())
.then((data)=>{
    setItems(data)
})

    },[])

   
    return (
        <>
        <h1> Albums</h1>
        <div className='BigContainer'> 
       
          {items.map((Album) => (
            <div className='AlbumContainer' key={Album.id}>
              <img src={Album.image} alt='' className='ImgSize'/>
              <h3>{Album.title}</h3>
              <h3>{Album.year}</h3>
              < Link to={`/Albums/${Album.id}`}className='View'>View Songs</Link>
            </div>
          ))}
        </div>
        </>
      );      
        
   
  
    
    }

export default Albums
