import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <News></News>
      
    </div>
  );
}

export default App;
