import './MusicTable.css';

const MusicTable = (props) => {
    
    console.log(props.parentMusicTable);

    return(
        <div>
        
        <table className="table" chart='Table'>
                <thead>
                    <tr>
                    <th scope="col" className ="index-col">Index</th>
                    <th scope="col" className ="title-col">Title</th>
                    <th scope="col" className='artist-col'>Artist</th>
                    <th scope="col" className='album-col'>Album</th>
                    <th scope="col" className='release_date-col'>Release Date</th>
                    <th scope="col" className='genre-col'>Genre</th>
                    </tr>
                </thead>
            <tbody>
                {props.parentMusicTable.map((songs, index) => {
                    return(
                        <tr key={index}>
                        <td>{index}</td>
                        <td>{songs.title}</td>
                        <td>{songs.artist}</td>    
                        <td>{songs.album}</td>
                        <td>{songs.release_date}</td>
                        <td>{songs.genre}</td>   
                        </tr>
                    )
                })}
            </tbody>
        </table>

        </div>
    );
                }

export default MusicTable;