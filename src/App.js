import axios from 'axios';
import React, { useState,useEffect } from 'react';
import MusicTable from './Component/MusicTable/MusicTable';
import AddEntry from './Component/AddEntry/AddEntry';
import './App.css'
import SearchBar from './Component/SearchBar/SearchBar';

function App() {

    const [music, setMusic] = useState([{title:'', artist: '', genre:'', release_date:'', likes:'' }])

    useEffect(() => {
      getAllSongs();
    }, [])

    async function getAllSongs(){
      try{
        let response = await axios.get('http://127.0.0.1:8000/music');
        setMusic(response.data);

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
        <div>
        <SearchBar songs={music} setSongs={setMusic} />
      </div>
      <div>
      <button className ='getAllSongs' onClick = {getAllSongs}>Music Time Download your Library!</button>
    </div>
      <div className='row-posts'>
        <MusicTable parentMusicTable = {music}/>
      </div>  
      <div className='row-createSong'>
        <AddEntry addNewSongProperty = {addSong}/>
        </div>
      
    </div>
    );
  
}

export default App;
