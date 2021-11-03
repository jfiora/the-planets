import './NotFoundPage.css';

const NotFoundPage = ({ NotFoundImg }) => {
  return (
    <div className="NotFoundPage">
      <div>
        <h2>
          404 <br /> Page not found
        </h2>
        <img src={NotFoundImg} alt="" />
      </div>
    </div>
  );
};

export default NotFoundPage;
