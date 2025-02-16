'use client';
import { Profile } from '@/app/components/profile';
import { Tecnologies } from '@/app/components/tecnologies';
import { HomePageWrapper } from './style';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import { Projects } from '@/app/components/projects';
import { HomePageLocalRoutes } from '@/components/header/Contract';
import { Skills } from '@/app/components/skills';
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
