import Nav from './components/Nav';
import Header from './components/Header';
import AsideBannerTop from './components/AsideBannerTop';
import Main from './components/Main';
import AsideBannerBottom from './components/AsideBannerBottom';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Rule of thumb</title>
        <meta
          name="description"
          content="Rule of Thumb™️ tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JhoanZamora10" />
        <meta name="twitter:creator" content="@JhoanZamora10" />
        <meta name="twitter:title" content="Rule of thumb" />
        <meta name="twitter:description" content="Rule of thumb" />
        <meta
          name="twitter:image"
          content="https://twitter.com/JhoanZamora10/photo"
        />
      </Helmet>
      <Nav />
      <Header />
      <div className="max-centered">
        <AsideBannerTop />
        <Main />
        <AsideBannerBottom />
        {
          // eslint-disable-next-line jsx-a11y/no-redundant-roles
          <hr role="separator" />
        }
        <Footer />
      </div>
    </div>
  );
}

export default App;
