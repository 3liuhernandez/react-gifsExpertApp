import { GifGridItem } from "./GifGridItem"; 

import { useFetchGifs } from "../hooks/useFetchGifs";

import MetaTags from 'react-meta-tags';

import {Helmet} from "react-helmet";

export const GifGrid = ({ category }) => {

    const { data:gifs, loading } = useFetchGifs( category );

    return (
        <>
            <MetaTags>
                <title>My METADATOS</title>
                <link rel="canonical" href="https://3liuhernandez.github.io/react-gifsExpertApp/" />
                <meta property="og:description" content="Nested METADATOS" />
                <meta property="og:image" content="images/balanz.jpg" />
                <meta property="og:title" content="METADATOS" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://3liuhernandez.github.io/react-gifsExpertApp/" />
            </MetaTags>

            <Helmet>
                <title>My METADATOS</title>
                <link rel="canonical" href="https://3liuhernandez.github.io/react-gifsExpertApp/" />
                <meta property="og:description" content="Nested METADATOS" />
                <meta property="og:image" content="images/balanz.jpg" />
                <meta property="og:title" content="METADATOS" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://3liuhernandez.github.io/react-gifsExpertApp/" />
            </Helmet>

            <h3 className="animate__animated animate__backInLeft"> { category } </h3>
            <img src="images/balanz.jpg" />

            { loading && <p className="animate__animated animate__flash animate__infinite">Loading</p>}

            <div className='card-grid'>
                {
                    gifs.map( (img) => (
                        <GifGridItem key={ img.id } { ...img } />
                    ))
                }
            </div>
        </>
    )
}
