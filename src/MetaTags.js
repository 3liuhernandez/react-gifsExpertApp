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
        robots: defaultData?.canonicalUrl,
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
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            {meta.robots && <meta name="robots" content={meta.robots} />}
            <link rel="canonical" href={meta.canonicalUrl} />
            <meta name="imagen" content={meta.imagen} />

            <mata property="og:title" content="Factores de posicionamiento de Google: 10 herramientas que te ayudarán"/>
            <meta property="og.type" content="website"/>
            <meta property="og:description" content="aqui va el contenido"/>
            <meta property="og:image" content="https://3liuhernandez.github.io/react-gifsExpertApp/images/balanz.jpg" />
            <meta property="og:url" content="https://gomuf.com" />
            <meta property="og:site_name" content="https://gomuf.com" />

            

        </Helmet>
    );
}; 

export default MetaTags;
