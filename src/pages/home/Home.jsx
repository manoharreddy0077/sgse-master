import FAQs from '../../components/FAQs';
import Footer from '../../components/Footer';
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import Testimonials from '../../components/Testimonials';
import Values from '../../components/Values';
import './home.css';

const Home = () => {
  return (
    <>
      <MainHeader />
      <FAQs />
      <Values />
      <Programs />
      <Testimonials />
    </>
  )
}

export default Home