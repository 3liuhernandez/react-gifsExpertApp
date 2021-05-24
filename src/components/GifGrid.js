import { GifGridItem } from "./GifGridItem"; 

import { useFetchGifs } from "../hooks/useFetchGifs";

import MetaTags from 'react-meta-tags';

import {Helmet} from "react-helmet";

import image__ from './balanz.jpg';
export const GifGrid = ({ category }) => {

    const { data:gifs, loading } = useFetchGifs( category );

    return (
        <>
            {/* <MetaTags>
            <title>My METADATOS AAAA</title>

            <meta name="description" content="Otra web de desarrollo web AAAA" />

            <link rel="canonical" href="http://oropensando.com/" />

            // Open Graph para Facebook
            <meta property="og:title" content="OROPEnSAndo" /> 
            <meta property="og:type" content="website" /> 
            <meta property="og:url" content="http://oropensando.com/" />
            <meta property="og:image" content={image__}/>
            <meta property="og:description" content="Otra web de desarrollo web" /> 
            <meta property="og:site_name" content="Oropensando" />
            <meta property="og:locale" content="es_ES" />
            <meta property="fb:admins" content="Facebook ID" />

            // Twitter Card
            <meta name="twitter:card" content="summary_large_image"/> 
            <meta name="twitter:site" content="@oropensando" /> 
            <meta name="twitter:title" content="OROPEnSAndo" /> 
            <meta name="twitter:description" content="Otra web de desarrollo web" /> 
            <meta name="twitter:creator" content="@oropensando" /> 
            <meta name="twitter:image:src" content={image__} />
            </MetaTags> */}

            <Helmet>
                {/* <meta charSet="utf-8" /> */}
                <title>Buscamos Gente</title>
                {/* <meta name="description" content="Helmet application" /> */}
                <meta property="og:url" content="https://rrhh.balanz.com/aplicar/33" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Buscamos Desarrollador iOS" />
                <meta property="og:description" content="Entre sus principales responsabilidades se" />
                <meta property="og:image" content={image__} />
                
                <link rel="canonical" href="http://mysite.com/example" />

                {/* <meta property="og:title" content={'Hola'} />
                <meta property="og:type" content={'website'} />
                <meta property="og:image" content="{Your content}" />
                <meta property="og:url" content="{Your content}" /> */}
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
