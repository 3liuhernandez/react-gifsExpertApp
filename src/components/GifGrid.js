import { GifGridItem } from "./GifGridItem"; 

import { useFetchGifs } from "../hooks/useFetchGifs";
import MetaTags from "./MetaTags";
import imagen__ from './balanz.jpg';


export const GifGrid = ({ category }) => {

    const { data:gifs, loading } = useFetchGifs( category );

    const metaData = {
        title: "t asd", 
        description: "d asd",
        keywords: "k asd",
        robots:"follow",
        imagen: imagen__,
        canonicalUrl: 'https://gomuf.com'
    };
    
    return (
        <>
            <MetaTags metaData={metaData}/>
            <h3 className="animate__animated animate__backInLeft"> { category } </h3>
            <img src="images/balanz.jpg" alt="balanz logo"/>

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
