import React, {  useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

function TvShowAdmin(){


    // sets the variables in setTvshow//
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

    const [tvshows, setTvshows] = useState([]);


    // connection to the api //
    const baseUrl = "https://847pz3ny24.execute-api.us-east-1.amazonaws.com/tvshows";

    const navigate = useNavigate();

    const requestOptions = {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(tvshow)
    }

    const deleterequestOptions = {
        method: 'DELETE',
        headers:{'Content-Type': 'application/json'},
    }


    // fetch for deleting tv shows from the webapp//
    const deleteTvshow =(id) => {
        try{
            fetch(`${baseUrl}/${id}`,deleterequestOptions)
            .then((res) => res.json())
            .then((data) => console.log(data));
            navigate("/tvshows");
        }catch(err){
            console.log(err)
        }
    }


    // fetch for adding tvshows to the webapp //
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

    // fetch for getting tvshows and displaying for the user to see on the webapp //
    const getTvShows = () => {
        try {
            fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => setTvshows(data.Items))
        }catch(err){
            console.log(err)
        }
    }


    useEffect(() =>{
        getTvShows()
    }, [])

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
    <section className="container">
        <div className="columns is-multiline">
            {
                tvshows && tvshows.length > 0
                ? tvshows.map(tvshow =>
                    <div className="column">
                    <div className="card">
                        <div className="card-content">
                            <div className="content">
                                <p className='subtitle'>{tvshow.ShowTitle}</p>
                                <p>{tvshow.ShowDuration}</p>
                                <p>{tvshow.ShowAgeRating}</p>
                                <p>{tvshow.ShowAverageViewerRating}</p>
                                <p>{tvshow.ShowViewCount}</p>
                                <p>{tvshow.ShowAvailableCaptions}</p>
                                <p>{tvshow.ShowPublisher}</p>
                                <p>{tvshow.ShowEpisode}</p>
                                <p>{tvshow.ShowSeries}</p>
                                <p>{tvshow.ShowDescription}</p>
                                <p>{tvshow.ShowGenres}</p>
                                <p>{tvshow.ShowAudioLanguage}</p>
                                <p>{tvshow.ShowReleaseDate}</p>
                                <p>{tvshow.ShowFeatutedCast}</p>


                            </div>
                            <footer className="card-footer">
                                <button className="button is-primary card-footer-item" onClick={() => deleteTvshow(tvshow.id)}>Delete</button>
                            </footer>
                         </div>
                    </div>
                    </div>
                    )
                    : <div className='column is-one-third'><h1>Tvshow not found</h1></div>
            }
        </div>
    </section>
    </>
    )

}

export default TvShowAdmin