'use client';
import { Profile } from '@/components/profile';
import { Tecnologies } from '@/components/tecnologies';
import { HomePageWrapper } from './style';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import { Competencies } from '@/components/competencies/Competencies';
import { Projects } from '@/components/projects';
import { HomePageLocalRoutes } from '@/components/header/Contract';

const App = () => {
  useSmoothScroll();
  return (
    <HomePageWrapper id={HomePageLocalRoutes.TOP}>
      <Profile />
      <Tecnologies />
      <Competencies />
      <Projects />
    </HomePageWrapper>
  );
};

export default App;
