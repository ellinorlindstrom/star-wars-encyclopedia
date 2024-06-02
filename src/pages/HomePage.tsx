import "../styles/HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <>
      <h1 className="press-start-2p-regular text-center">
        Welcome to the Galactic Encyclopedia of Star Wars Wonders
      </h1>
      <h2 className="text-center">Explore the Galaxy Far, Far Away</h2>
      <div className="soldier"></div>
      <h4 className="text-center">
        And yes, that stormtrooper is indeed moonwalking. Because in our galaxy,
        even the Empire likes to have a little fun.
      </h4>
      <p className="press-start-2p-regular text-center">May the Force (and the funk) be with you!</p>
    </>
  );
};

export default HomePage;
