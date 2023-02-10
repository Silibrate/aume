import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import imgBG from '../../images/errorPage/errorPage.png';

const ErrorPage = () => {
  return (

    <>
      <Header />
      <div className='errorPage'>
        <img className='errorPage__img' src={imgBG} alt="Bg" />
        <h3 className='errorPage__title' >404</h3>
        <p className='errorPage__subtitle'>Sorry, the page you're looking for doesn't exist</p>
        <Link className='button errorPage__link' to='/'>Back to home</Link>
      </div>
    </>

  );
}

export default ErrorPage;