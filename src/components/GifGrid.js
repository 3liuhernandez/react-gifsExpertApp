import { GifGridItem } from "./GifGridItem"; 

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { data:gifs, loading } = useFetchGifs( category );
    
    return (
        <>
            
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
