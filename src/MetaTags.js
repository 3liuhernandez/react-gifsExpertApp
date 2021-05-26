import Helmet from 'react-helmet';
import imagen__ from './images/balanz.jpg';

const getDefault = {
    title: "title default", 
    description: "My default Website description",
    keywords: "My default Website keyowrods",
    robots:"index/follow",
    imagen: imagen__,
    canonicalUrl: 'https://gomuf.com'
};

/* export const getPageMetadata = ( metaData ) => {
    const { title, description, keywords, robots, canonicalUrl } = metaData;
    const defaultData = getDefault;
    return {
        title: title || defaultData?.title,
        description: description || defaultData?.description,
        keywords: keywords || defaultData?.keywords,
        robots: robots || defaultData?.canonicalUrl,
        canonicalUrl: canonicalUrl || defaultData?.canonicalUrl,
    };
}; */
export const getPageMetadata = ( ) => {
    
    const defaultData = getDefault;
    return {
        title: defaultData?.title,
        description: defaultData?.description,
        keywords: defaultData?.keywords,
        robots: defaultData?.robots,
        canonicalUrl: defaultData?.canonicalUrl,
    };
};

const MetaTags = () => {
    const meta = getPageMetadata();
    return (
        <Helmet>
            <meta charset="utf-8" />
            <link rel="icon" href="./favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="./logo192.png" />
            <link rel="manifest" href="./manifest.json" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            <link rel="stylesheet" href="./index.css"/>

            <title>mi titulo de pagina</title>
            <meta name="title" content="mi titulo de pagina" />
            <meta name="description" content="esta es una descripcion" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://gomuf.com" />
            <meta property="og:title" content="mi titulo de pagina" />
            <meta property="og:description" content="esta es una descripcion" />
            <meta property="og:image" content="https://3liuhernandez.github.io/react-gifsExpertApp/images/balanz.jpg" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://gomuf.com" />
            <meta property="twitter:title" content="mi titulo de pagina" />
            <meta property="twitter:description" content="esta es una descripcion" />
            <meta property="twitter:image" content="https://3liuhernandez.github.io/react-gifsExpertApp/images/balanz.jpg" />

        </Helmet>
    );
}; 

export default MetaTags;
