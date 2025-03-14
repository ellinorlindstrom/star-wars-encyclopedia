import "../styles/HomePage.scss";


const HomePage: React.FC = () => {
  const handleRandomNavigation = () => {
    const pages = ["films", "people", "planets", "species", "starships", "vehicles"];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = `/${randomPage}`;
  };  


  return (
    <>
      <h1 className="press-start-2p-regular text-center">
      Welcome to the Galactic Encyclopedia
      </h1>
      <div className="soldier"></div>
    <button className="button-homepage" onClick={handleRandomNavigation}>EXPLORE</button>
    </>
  );
};

export default HomePage;
