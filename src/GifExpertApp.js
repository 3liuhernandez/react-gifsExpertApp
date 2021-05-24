import { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import MetaTags from 'react-meta-tags';

import {Helmet} from "react-helmet";

import image__ from './images/balanz.jpg';
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    /* console.log(categories); */

    /* const handleAdd = () => {
        // setCategories( ['Marvel', ...categories] );
        setCategories( cats => [ ...cats, 'Marvel'] );
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />
            {/* <button onClick = { handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = { category }
                            category = { category }
                        />
                    ))
                }
            </ol>

            
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
        </>
    )
}

export default GifExpertApp;