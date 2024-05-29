import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <Image src="/images/404.png" alt="404" fluid />
      <h1>404: Oops! It seems you have encountered a disturbance in the Force.</h1>
      <p className="lead">Use the Force to go home.</p>
      <Link className="btn-jedi" to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
