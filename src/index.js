import ReactDOM from 'react-dom';

/* import imagen__ from './images/balanz.jpg'; */

import GifExpertApp from './GifExpertApp';
import MetaTags from './MetaTags';

/* import './index.css'; */
/* 
const metaData = {
  title: "t asd", 
  description: "d asd",
  keywords: "k asd",
  robots:"follow",
  imagen: imagen__,
  canonicalUrl: 'https://gomuf.com'
}; */

ReactDOM.render(
  <MetaTags /* metaData={metaData} *//>,
  document.getElementById('head')
);

ReactDOM.render(
  <GifExpertApp />,
  document.getElementById('root')
);
