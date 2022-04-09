import React, {  useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

function TvShowAdmin(){

    const [tvshow, setTvshow] = useState({
        id: "",
        ShowTitle: "",
        ShowDuration: "",
        ShowAgeRating: "",
        ShowAverageViewerRating: "",
        ShowViewCount: "",
        ShowAvailableCaptions: "",
        ShowPublisher: "",
        ShowEpisode: "",
        ShowSeries: "",
        ShowDescription: "",
        ShowGenres: "",
        ShowAudioLanguage: "",
        ShowReleaseDate: "",
        ShowFeatutedCast: ""

    });

    const baseUrl = "https://847pz3ny24.execute-api.us-east-1.amazonaws.com/tvshows";

    const navigate = useNavigate();

    const requestOptions = {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(tvshow)
    }

    const putTvshow =() => {
       try{
        fetch(baseUrl, requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data));
        navigate("/tvshows");
       }catch(err){
           console.log(err)
       }

    }


    return(
        <>
        <section className="section">
        <h1 className="title">TvShow Admin</h1>
        <h2 className="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're cu
        </h2>
    </section>
    <div className='container'>
        <input className="input m-1" type="text" placeholder="Tv Show id" onChange={e => setTvshow({...tvshow, id:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show Title" onChange={e => setTvshow({...tvshow, ShowTitle:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show duration" onChange={e => setTvshow({...tvshow, ShowDuration:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show age rating" onChange={e => setTvshow({...tvshow, ShowAgeRating:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show viewer rating" onChange={e => setTvshow({...tvshow, ShowAverageViewerRating:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show view count" onChange={e => setTvshow({...tvshow, ShowViewCount:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show captions" onChange={e => setTvshow({...tvshow, ShowAvailableCaptions:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show publisher" onChange={e => setTvshow({...tvshow, ShowPublisher:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show episode" onChange={e => setTvshow({...tvshow, ShowEpisode:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show series" onChange={e => setTvshow({...tvshow, ShowSeries:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show description" onChange={e => setTvshow({...tvshow, ShowDescription:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show genre" onChange={e => setTvshow({...tvshow, ShowGenres:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show audio language" onChange={e => setTvshow({...tvshow, ShowAudioLanguage:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show release date" onChange={e => setTvshow({...tvshow, ShowReleaseDate:e.target.value})} />
        <input className="input m-1" type="text" placeholder="Tv Show cast" onChange={e => setTvshow({...tvshow, ShowFeatutedCast:e.target.value})} />
        <button className='button is-primary' onClick={putTvshow}>Add TvShow</button>
    </div>
    </>
    )

}

export default TvShowAdmin