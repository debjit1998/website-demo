import { FC, Fragment, ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default HomeLayout;
