
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/homepage/Homepage';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <Homepage />
      </div>
      <Footer />


    </div>
  );
}

export default App;
