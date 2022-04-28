import axios from 'axios';
import React, { useState,useEffect } from 'react';
import MusicTable from './Component/MusicTable/MusicTable';

function App() {

    const [music, setMusic] = useState([{title:'', artist: '', genre:'', release_date:'', likes:'' }])

    useEffect(() => {
      getAllSongs();
    }, [])

    async function getAllSongs(){
      try{
        let response = await axios.get('http://127.0.0.1:8000/music');
        console.log(response.data);

      } catch(ex) {
        console.log ('Error');
      }
    }
  
  async function addSong(newSong){

let response = await axios.post('http://127.0.0.1:8000/music', newSong);
if(response.status === 201){
  await getAllSongs();
} 
}
  return (
    <div>
      <h1>Music Library</h1>
      <div>
      <button className ='getAllSongs' onClick = {getAllSongs}>Music Time!</button>
    </div>
      <div className='row-posts'>
        <MusicTable parentMusicTable = {music}/>
      </div>  
      <div class name='row-createSong'>
        {/* <AddEntry addNewSongProperty = {addSong}/> */}
        </div>
      
    </div>
    );
  
}

export default App;
