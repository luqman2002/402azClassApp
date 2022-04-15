import React, {Component} from 'react';

// This is the about page //

export default class About extends Component {
    render(){
        return(
            // The hero which sets the background of the webapp //
            <div className=' hero-body'> 
                <section className>
                <div className="card">
                        <div className="card-content">
                            <div className="content">
                            <h1 className='title'>WHO WE ARE </h1>
                                <p className='subtitle has-text-black'> 
                                    WebVideo Inc. is a US enterprise video hosting platform
                                </p>
                            <h2 className='subtitle'>Learn about us</h2>
                                <p>
                                We have now launched a UK consumer platform, that allows customers to access syndicated US television shows and movies for free with separate listing of shows and descriptions available. all you need to do is signup for free with an email and password and you can enter the world of endless entertainment.
                                </p>



                            </div>
                         </div>
                    </div>

                </section>
            </div>

        );
    }
}