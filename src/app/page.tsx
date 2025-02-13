'use client';
import { Profile } from '@/components/profile';
import { Tecnologies } from '@/components/tecnologies';
import { HomePageWrapper } from './style';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import { Projects } from '@/components/projects';
import { HomePageLocalRoutes } from '@/components/header/Contract';
import { Skills } from '@/components/skills';
import { usePreserveScroll } from '@/hooks/usePreserveScroll';

const App = () => {
  useSmoothScroll();
  usePreserveScroll();

  return (
    <HomePageWrapper id={HomePageLocalRoutes.TOP}>
      <Profile />
      <Tecnologies />
      <Skills />
      <Projects />
    </HomePageWrapper>
  );
};

export default App;
