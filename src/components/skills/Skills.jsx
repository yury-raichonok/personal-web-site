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

const SkillsContainer = styled.div`
  margin-bottom: 50px;
  width: 100%;
`;

const SkillsNameContainer = styled.div`
  font-family: Bebas Neue;
  font-size: 22px;
  font-weight: 500;
  padding-top: 5px;
  width: 110px;
  
  @media (max-width: 360px) {
    font-size: 18px;
    margin-right: 30px;
  }
`;

const SkillsRowContainer = styled.div`
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

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <ChapterTitle>
        My skills
      </ChapterTitle>
      <SkillsRowContainer>
        <SkillsNameContainer>
          Java:
        </SkillsNameContainer>
        <Rate disabled defaultValue={8} character={({ index }) => customIcons[index + 1]} count="10" />
      </SkillsRowContainer>
      <SkillsRowContainer>
        <SkillsNameContainer>
          Spring:
        </SkillsNameContainer>
        <Rate disabled defaultValue={7} character={({ index }) => customIcons[index + 1]} count="10" />
      </SkillsRowContainer>
      <SkillsRowContainer>
        <SkillsNameContainer>
          React JS:
        </SkillsNameContainer>
        <Rate disabled defaultValue={5} character={({ index }) => customIcons[index + 1]} count="10" />
      </SkillsRowContainer>
      <SkillsRowContainer>
        <SkillsNameContainer>
          HTML 5:
        </SkillsNameContainer>
        <Rate disabled defaultValue={5} character={({ index }) => customIcons[index + 1]} count="10" />
      </SkillsRowContainer>
      <SkillsRowContainer>
        <SkillsNameContainer>
          AEM:
        </SkillsNameContainer>
        <Rate disabled defaultValue={4} character={({ index }) => customIcons[index + 1]} count="10" />
      </SkillsRowContainer>
    </SkillsContainer>
  )
}

export default Skills
