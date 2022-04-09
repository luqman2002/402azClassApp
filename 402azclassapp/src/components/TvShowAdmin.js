import React, {  useState, useEffect } from "react";

function TvShowAdmin(){

    const [tvshow, setTvshow] = useState({
        ID: "3",
        ShowTitle: "Stranger Things",
        ShowDuration: "50",
        ShowAgeRating: "TV-14",
        ShowAverageViewerRating: "9.0",
        ShowViewCount: "10 million",
        ShowAvailableCaptions: "english",
        ShowPublisher: "jim carrey",
        ShowEpisode: "1",
        ShowSeries: "1",
        ShowDescription: "a bunch of kids find distrubing things at their home town",
        ShowGenres: "supernatural",
        ShowAudioLanguage: "english",
        ShowReleaseDate: "2016",
        ShowFeatutedCast: "millie bobby brown"

    });

    const baseUrl = "https://847pz3ny24.execute-api.us-east-1.amazonaws.com/tvshows";

    const requestOptions = {
        method: 'PUT',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(tvshow)
    }

    useEffect (() => {
        fetch(baseUrl, requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data));
      }, [])

    return(
        <section className="section">
        <h1 className="title">TvShow Admin</h1>
        <h2 className="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're cu
        </h2>
    </section>
    )

}

export default TvShowAdmin