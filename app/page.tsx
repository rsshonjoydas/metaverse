import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='overflow-hidden bg-dark'>
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />
      <div className='z-0 gradient-03' />
      <Explore />
    </div>
    <div className='relative'>
      <GetStarted />
      <div className='z-0 gradient-04' />
      <WhatsNew />
    </div>
    <div className='relative'>
      <World />
      <div className='z-0 gradient-04' />
      <Insights />
    </div>
    <Feedback />
    <Footer />
  </div>
);

export default Page;
