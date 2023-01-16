import './App.css';
import ProfileHeader from './components/ProfileHeader';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="business-card">
      <ProfileHeader />
      <Contact />
      <About />
    </div>
  );
}

export default App;
