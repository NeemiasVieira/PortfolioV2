'use client';
import Typewriter from 'typewriter-effect';
import {
  About,
  Actions,
  Content,
  CvContainer,
  DecorativeIcon,
  ImageAndTitle,
  ProfileImage,
  ProfileWrapper,
  SocialLinkItem,
  SocialLinks,
  SocialLinksList,
  Texts,
} from './style';
import NeemiasImage from '../../../assets/images/neemias.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from './contract';
import { faCode, faCodeBranch, faDatabase, faFileLines, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import { useLanguageStore } from '@/stores/useLanguageStore';

export const Profile = () => {
  const age = new Date().getFullYear() - 1999 - (new Date() < new Date(`11-23-${new Date().getFullYear()}`) ? 1 : 0);
  const t = useTranslations();
  const { language } = useLanguageStore();

  return (
    <ProfileWrapper>
      <ImageAndTitle>
        <ProfileImage src={NeemiasImage} alt="Imagem do Neemias" priority />
        <h2 key={language}>
          <Typewriter
            options={{
              loop: true,
              delay: 60,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Neemias Vieira')
                .pauseFor(1000)
                .deleteAll(15)
                .typeString(t('developerFullStack'))
                .pauseFor(7000)
                .deleteAll(25)
                .start();
            }}
          />
        </h2>

        <div className="border-animation"></div>
      </ImageAndTitle>

      <About>
        <Content>
          <Texts>
            <h3>
              {t('hello')}
              <br />
              {t('welcome')}
            </h3>

            <h4>{t('resumeTitle')}</h4>
            <p>
              {t('resume1', { age })}{' '}
              <a href="https://modalgr.io/" target="_blank">
                <b>
                  <span style={{ color: ' rgb(48, 119, 171)' }}>Modal</span>
                  <span style={{ color: 'rgb(254, 122, 0)' }}>GR</span>
                </b>
              </a>
              {t('resume2')}
            </p>
          </Texts>
          <Actions>
            <SocialLinks>
              <h3>{t('connectWithMe')}</h3>
              <SocialLinksList>
                {socialLinks.map(({ hoverColor, icon, link }) => (
                  <SocialLinkItem $hoverColor={hoverColor} key={link}>
                    <a href={link} target="_blank">
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  </SocialLinkItem>
                ))}
              </SocialLinksList>
            </SocialLinks>
            <CvContainer>
              <h3>{t('cvTitle')}</h3>
              <a
                target="_blank"
                href="https://www.canva.com/design/DAGPEuJAXIs/kaVsT37vH__TY82ucAb-eg/view?utm_content=DAGPEuJAXIs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h62c0068d5f"
              >
                {t('cvActionLabel')}
                <FontAwesomeIcon icon={faFileLines} />
              </a>
            </CvContainer>
          </Actions>
        </Content>
      </About>
      <DecorativeIcon icon={faCode} $top="25%" $left="15%" />
      <DecorativeIcon icon={faRocket} $top="15%" $left="8%" />
      <DecorativeIcon icon={faCodeBranch} $top="15%" $right="8%" />
      <DecorativeIcon icon={faDatabase} $top="25%" $right="15%" />
    </ProfileWrapper>
  );
};
