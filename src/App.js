import './App.css';
import ProfileHeader from './components/ProfileHeader';
import Contact from './components/Contact';
import About from './components/About';
import Socials from './components/Socials';

function App() {
  return (
    <div className="business-card">
      <ProfileHeader />
      <Contact />
      <About />
      <Socials />
    </div>
  );
}

export default App;
