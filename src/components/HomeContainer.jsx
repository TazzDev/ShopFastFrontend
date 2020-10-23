import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//importing images

import SampleOne from '../../public/images/sample1.png';
import SampleTwo from '../../public/images/sample2.png';


const HomeContainer = (props) => {
    return (
        <div id="home-container">

            <div id="carousel-products">

                <Carousel autoPlay showThumbs={false} infiniteLoop={true}>

                    <div>
                        <img src={SampleOne} />
                        <p className="legend">Legend 1</p>
                    </div>

                    <div>
                        <img src={SampleTwo} />
                        <p className="legend">Legend 1</p>
                    </div>

                </Carousel>

            </div>
        </div>
    )
}

export default HomeContainer;