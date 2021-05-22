import Nav from './components/Nav';
import Header from './components/Header';
import AsideBannerTop from './components/AsideBannerTop';
import Main from './components/Main';
import AsideBannerBottom from './components/AsideBannerBottom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
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
