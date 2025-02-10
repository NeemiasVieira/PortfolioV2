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
import NeemiasImage from '../../assets/images/neemias.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from './contract';
import { faCode, faCodeBranch, faDatabase, faFileLines, faRocket } from '@fortawesome/free-solid-svg-icons';

export const Profile = () => {
  const age = new Date().getFullYear() - 1999 - (new Date() < new Date(`11-23-${new Date().getFullYear()}`) ? 1 : 0);
  return (
    <ProfileWrapper>
      <ImageAndTitle>
        <ProfileImage src={NeemiasImage} alt="Imagem do Neemias" />
        <h2>
          <Typewriter
            options={{
              loop: true,
              delay: 50,
              deleteSpeed: 1000,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Desenvolvedor Full Stack').pauseFor(2000).deleteAll().start();
            }}
          />
        </h2>
        <div className="border-animation"></div>
      </ImageAndTitle>

      <About>
        <Content>
          <Texts>
            <h3>
              Opa, eai, tudo bom?
              <br />
              Seja muito bem-vindo ao meu portfólio
            </h3>

            <h4>Saiba um pouquinho sobre mim:</h4>
            <p>
              Desenvolvedor de Software com {age} anos, formando em Engenharia da Computação, atuo na equipe da{' '}
              <a href="https://modalgr.io/" target="_blank">
                <b>
                  <span style={{ color: ' rgb(48, 119, 171)' }}>Modal</span>
                  <span style={{ color: 'rgb(254, 122, 0)' }}>GR</span>
                </b>
              </a>
              . Apaixonado por tecnologia e resolução de problemas, tenho experiência sólida em desenvolvimento Web,
              atuando em projetos profissionais, educacionais e pessoais. Focado em entregar soluções eficientes.
            </p>
          </Texts>
          <Actions>
            <SocialLinks>
              <h3>Contatos</h3>
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
              <h3>Currículo</h3>
              <a
                target="_blank"
                href="https://www.canva.com/design/DAGPEuJAXIs/kaVsT37vH__TY82ucAb-eg/view?utm_content=DAGPEuJAXIs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h62c0068d5f"
              >
                Abrir
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
