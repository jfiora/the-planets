import './NotFoundPage.css';
import NotFoundImg from '../../img/internal/undraw_astronaut_re_8c33.svg';

const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <div>
        <div>
          <h2>404</h2>
          <h2>Page not found</h2>
        </div>
        <img src={NotFoundImg} alt="" />
      </div>
    </div>
  );
};

export default NotFoundPage;
