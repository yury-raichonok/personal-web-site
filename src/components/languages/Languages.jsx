import React from 'react';
import styled from 'styled-components';
import { Rate } from 'antd';
import { BsFillCircleFill } from 'react-icons/bs';

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

const LanguagesContainer = styled.div`
  margin-bottom: 50px;
  width: 100%;
`;

const LanguagesDescription = styled.div`
  color: gray;
`;

const LanguagesName = styled.div`
  font-family: Bebas Neue;
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
  padding-top: 5px;

  @media (max-width: 360px) {
    font-size: 18px;
    margin-right: 30px;
  }
`;

const LanguagesNameContainer = styled.div`
  width: 110px;

  @media (max-width: 360px) {
    display: flex;
    align-items: center;
  }
`;

const LanguagesRowContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .ant-rate {
    color: #fb5525;
  }

  @media (max-width: 470px) {
    .ant-rate-star {
      font-size: 15px;
    }
  }

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

const customIcons = {
  1: <BsFillCircleFill />,
  2: <BsFillCircleFill />,
  3: <BsFillCircleFill />,
  4: <BsFillCircleFill />,
  5: <BsFillCircleFill />,
  6: <BsFillCircleFill />,
  7: <BsFillCircleFill />,
  8: <BsFillCircleFill />,
  9: <BsFillCircleFill />,
  10: <BsFillCircleFill />
};

const Languages = () => {
  return (
    <LanguagesContainer id="languages">
      <ChapterTitle>
        Languages
      </ChapterTitle>
      <LanguagesRowContainer>
        <LanguagesNameContainer>
          <LanguagesName>
            Belarussian
          </LanguagesName>
          <LanguagesDescription>
            Native
          </LanguagesDescription>
        </LanguagesNameContainer>
        <Rate disabled defaultValue={10} character={({ index }) => customIcons[index + 1]} count="10" />
      </LanguagesRowContainer>
      <LanguagesRowContainer>
        <LanguagesNameContainer>
          <LanguagesName>
            Russian
          </LanguagesName>
          <LanguagesDescription>
            Native
          </LanguagesDescription>
        </LanguagesNameContainer>
        <Rate disabled defaultValue={10} character={({ index }) => customIcons[index + 1]} count="10" />
      </LanguagesRowContainer>
      <LanguagesRowContainer>
        <LanguagesNameContainer>
          <LanguagesName>
            English
          </LanguagesName>
          <LanguagesDescription>
            B1
          </LanguagesDescription>
        </LanguagesNameContainer>
        <Rate disabled defaultValue={5} character={({ index }) => customIcons[index + 1]} count="10" />
      </LanguagesRowContainer>
    </LanguagesContainer>
  )
}

export default Languages
