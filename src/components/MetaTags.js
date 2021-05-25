import Helmet from 'react-helmet';
import imagen__ from './balanz.jpg';

const getDefault = {
    title: "title default", 
    description: "My default Website description",
    keywords: "My default Website keyowrods",
    robots:"follow",
    imagen: imagen__,
    canonicalUrl: 'https://gomuf.com'
};

export const getPageMetadata = ( metaData ) => {
    const { title, description, keywords, robots, canonicalUrl } = metaData;
    const defaultData = getDefault;
    return {
        title: title || defaultData?.title,
        description: description || defaultData?.description,
        keywords: keywords || defaultData?.keywords,
        robots: robots || defaultData?.canonicalUrl,
        canonicalUrl: canonicalUrl || defaultData?.canonicalUrl,
    };
};

const MetaTags = ({ metaData }) => {
    const meta = getPageMetadata(metaData);
    return (
        <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            {meta.robots && <meta name="robots" content={meta.robots} />}
            <link rel="canonical" href={meta.canonicalUrl} />
            <meta name="imagen" content={meta.imagen} />
        </Helmet>
    );
}; 

export default MetaTags;
