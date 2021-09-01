import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 82px);
  justify-content: space-around;
  padding: 200px;
  width: 100%;
`;

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 1400px;
`;

const ContentText = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ContentTitle = styled.div`
  font-family: Bebas Neue;
  font-size: 32px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 20px;
`;

const DescriptionContainer = styled.div`
  max-width: 700px;
`;

const ImageContainer = styled.img`
  border-radius: 50%;
  width: 250px;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <ContentContainer>
        <DescriptionContainer>
          <ContentTitle>
            Hello, my name is Yury and I'm a Junior Software Engineer.
          </ContentTitle>
          <ContentText>
            I have a higher technical education, 5 years of experience in construction field in engineering and management positions. 
          </ContentText>
          <ContentText>
            Currently I hold the position of Junior Software ingineer at EPAM Systems.
          </ContentText>
        </DescriptionContainer>
        <ImageContainer src="https://media-exp1.licdn.com/dms/image/C4D03AQFnuLjJuCfD0Q/profile-displayphoto-shrink_800_800/0/1627720660846?e=1635984000&v=beta&t=yhzb4a0HwPSko8PxyvubXzGLc1MM73nOK9sWlfAd8IE"/>
      </ContentContainer>
    </AboutMeContainer>
  )
}

export default AboutMe
