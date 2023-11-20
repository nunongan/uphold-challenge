import NavigationBar from './components/Navbar';
import './App.css';
import Converter from './components/Converter';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <Converter />
      <Footer />
    </>
  );
}

export default App;
