import "../styles/HomePage.scss";


const HomePage: React.FC = () => {
  const handleRandomNavigation = () => {
    const pages = ["films", "people", "planets", "species", "starships", "vehicles"];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = `/${randomPage}`;
  };  


  return (
    <>
    <div className="homepage-content">
      <h1 className="homepage-title">
      Welcome to the Galactic Encyclopedia
      </h1>
      <p className="homepage-description">
      Explore random place in the Star Wars universe
      </p>
      <button className="black-button" onClick={handleRandomNavigation}>EXPLORE</button>
      </div>
      <div className="soldier"></div>
    </>
  );
};

export default HomePage;
