import { GifGridItem } from "./GifGridItem"; 

import { useFetchGifs } from "../hooks/useFetchGifs";

import MetaTags from 'react-meta-tags';

export const GifGrid = ({ category }) => {

    const { data:gifs, loading } = useFetchGifs( category );

    return (
        <>
            <MetaTags>
                <title>Page 12</title>
                <meta name="description" content="Some description." />
                <meta property="og:url" content="produccion.url.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`Buscamos hacer el meta`} />
                <meta property="og:description" content="implementando los metas" />
                <meta property="og:image" content={`src/images/balanz.jpg`} />
            </MetaTags>

            <h3 className="animate__animated animate__backInLeft"> { category } </h3>

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
