import { useEffect, useState } from 'react';
import './Home.css'; // Ensure the CSS file is linked

function HomePage() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const images = [
      '/assets/hbg1.jpg',
      '/assets/hbg2.jpg',
      '/assets/hbg3.jpg',
      '/assets/hbg4.jpg',
    ];
    let currentIndex = 0;

    const changeBackground = () => {
      setBackgroundImage(images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
    };

    // Set initial image
    changeBackground();

    // Change the background every 1 second
    const interval = setInterval(changeBackground, 1000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="home-page" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">
        <h1>Welcome to Cricket Tournaments</h1>
        <h2>WickPlay.com</h2>
        <p>Join and compete in the most exciting cricket tournaments!</p>
        <div className="buttons">
          <a href="/register" className="register-button">Register Now</a>
          <a href="/login" className="login-button">Login</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
