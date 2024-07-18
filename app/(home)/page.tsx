import Compliance from '@/components/Compliance';
import CustomImage from '@/components/CustomImage';
import Testimonials from '@/components/Testimonials';

import Companies from './components/Companies';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import LeadYourTeam from './components/LeadYourTeam';
import OlivEnRoute from './components/OlivEnRoute';
import OlivMonitoring from './components/OlivMonitoring';
import OlivPlanForGrowth from './components/OlivPlanForGrowth';
import OlivReps from './components/OlivReps';
import SalesManagement from './components/SalesManagement';
import Video from './components/Video';

const HomePage = () => {
  return (
    <main className='pt-16 lg:pt-[86px]'>
      <Hero />
      <Video />
      <Companies />
      <SalesManagement />
      <OlivMonitoring />
      <OlivPlanForGrowth />
      <OlivEnRoute />
      <Integrations />
      <OlivReps />
      <Compliance />
      <Testimonials className='mt-6 lg:mt-10' />
      <LeadYourTeam />
      <CustomImage alt='img' src='/icons/footer/linkedin.svg' />
    </main>
  );
};

export default HomePage;
