import React from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';
import Arsenal from '../../images/arsenal.jpg';
import Guitar from '../../images/guitar.jpg';
import Coding from '../../images/coding.png';
import Sport from '../../images/sport.jpg';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { Icon28LogoVkColor } from '@vkontakte/icons';

const ChapterTitle = styled.div`
  font-family: Bebas Neue;
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  padding: 100px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 32px;
    padding: 50px;
  }
`;

const HobbieCard = styled.div`
  box-shadow: 0px 2px 38px rgba(0, 0, 0, 0.2);
  display: flex;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
  margin-bottom: 40px;
  min-height: 150px;
  width: 900px;

  @media (max-width: 950px) { 
    width: 90%;
  }

  @media (max-width: 650px) { 
    flex-direction: column;
  }

  @media (max-width: 770px) {
    min-height: 170px;
  }
`;

const HobbieContainer = styled.div`
  align-items: center;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
  width: 100%;
`;

const HobbieContent = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (max-width: 650px) {
    height: 180px; 
    width: 100%;
  }
`;

const HobbieContentRow = styled.div`
  display: flex;
  padding: 5px;
  max-width: 80%;
  text-align: justify;

  @media (max-width: 950px) {
    font-size: 15px;
  }
`;

const HobbieContentTitle = styled.div`
  font-family: Bebas Neue;
  font-size: 25px;
  font-weight: 500;
  padding-bottom: 10px;

  
`;

const HobbieImage = styled.div`
  width: 600px;

  @media (max-width: 650px) {
    height: 150px; 
    width: 100%;
  }
`;

const HobbieLink = styled.a`
  font-size: 22px;
  margin: 0 10px;
`;

const Hobbies = () => {
  return (
    <HobbieContainer id="hobbies">
      <ChapterTitle>
        My hobbies
      </ChapterTitle>
      <HobbieCard>
        <HobbieContent>
          <HobbieContentTitle>
            Coding
          </HobbieContentTitle>
          <HobbieContentRow>
            I like coding, learn new technologies and improve on what I have learned. Currently studying the content and media management system Adobe Expirience Manager (AEM).
          </HobbieContentRow>
        </HobbieContent>
        <HobbieImage 
          style={{
            background: `url(${Coding})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        />
      </HobbieCard>
      <HobbieCard>
        <HobbieContent>
          <HobbieContentTitle>
            Football
          </HobbieContentTitle>
          <HobbieContentRow>
            I'm a big fan of Arsenal Football Club. Started supporting the club in 2006.
          </HobbieContentRow>
          <HobbieContentRow>
            <HobbieLink href="https://www.arsenal.com/" target="_blank">
              <Tooltip title="Official web-site">
                <AiOutlineGlobal style={{color: '#000'}} />
              </Tooltip>
            </HobbieLink>
            <HobbieLink href="https://www.facebook.com/Arsenal/" target="_blank">
              <Tooltip title="Official Facebook">
                <FaFacebookSquare style={{color: '#3b5998'}} />
              </Tooltip>
            </HobbieLink>
            <HobbieLink href="https://vk.com/arsscnews" target="_blank">
              <Tooltip title="Russian-speaking community">
                <Icon28LogoVkColor />
              </Tooltip>
            </HobbieLink>
          </HobbieContentRow>
        </HobbieContent>
        <HobbieImage 
          style={{
            background: `url(${Arsenal})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        />
      </HobbieCard>
      <HobbieCard>
        <HobbieContent>
          <HobbieContentTitle>
            Music
          </HobbieContentTitle>
          <HobbieContentRow>
            I love music, I've been playing guitar since 2010. 
            I like to attend concerts and open airs. 
            Favorite directions: EDM, acoustic music.
          </HobbieContentRow>
        </HobbieContent>
        <HobbieImage 
          style={{
            background: `url(${Guitar})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        />
      </HobbieCard>
      <HobbieCard>
        <HobbieContent>
          <HobbieContentTitle>
            Sport
          </HobbieContentTitle>
          <HobbieContentRow>
            I go in for sports, ride a bike and skate. I follow many disciplines from Formula 1 to eSports.
          </HobbieContentRow>
        </HobbieContent>
        <HobbieImage 
          style={{
            background: `url(${Sport})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        />
      </HobbieCard>
    </HobbieContainer>
  )
}

export default Hobbies
