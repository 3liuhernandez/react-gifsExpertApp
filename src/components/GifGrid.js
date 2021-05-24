import { GifGridItem } from "./GifGridItem"; 

import { useFetchGifs } from "../hooks/useFetchGifs";

import MetaTags from 'react-meta-tags';

export const GifGrid = ({ category }) => {

    const { data:gifs, loading } = useFetchGifs( category );

    return (
        <>
            <div className="wrapper">
            <MetaTags>
            <title>Page 1</title>
            <meta property="og:url" content="https://3liuhernandez.github.io/react-gifsExpertApp/" />
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="images/balanz.jpg" />
            </MetaTags>
            <div className="content"> Some Content </div>
            </div>

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
