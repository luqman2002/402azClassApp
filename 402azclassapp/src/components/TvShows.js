import React, { Component, useState, Fragment, useEffect } from "react";
import {toHaveDisplayValue} from '@testing-library/jest-dom/dist/matchers';



function TvShows(){


const [tvshows, setTvshows] = useState([]);


const baseUrl = "https://847pz3ny24.execute-api.us-east-1.amazonaws.com/tvshows";



const getTvShows = () => {
    try{
        fetch(baseUrl)
        .then((res) => res.json())
        .then((res) => setTvshows(res.Items))
       }catch(err){
           console.log(err)
       }

    }

useEffect (() => {
  getTvShows()
}, [])


return(
    <>
    <section className="section">
        <h1 className="title">TvShows</h1>
        <h2 className="subtitle" >
           you can watch tvshows <strong>here</strong> on this free streaming site
        </h2>
    </section>
    <section className="container">
        <div className="columns is-multiline">
            {
                tvshows && tvshows.length > 0
                ? tvshows.map(tvshow =>
                    <div className="column m-2">
                    <div className="card">
                        <div className="card-content">
                            <div className="content">
                                <p className='subtitle has-text-black'>{tvshow.ShowTitle}</p>
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
                         </div>
                    </div>
                    </div>
                    )
                    : <h1>Tvshow not found</h1>
            }
        </div>
    </section>
    </>
)
      
}



export default TvShows;
