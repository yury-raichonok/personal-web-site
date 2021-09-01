import React from 'react';
import Navigation from './components/navigation/Navigation';
import styled from 'styled-components';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutMe/AboutMe';
import ExpirienceAndAducation from './components/expirienceAndAducation/ExpirienceAndAducation';
import Hobbies from './components/hobbies/Hobbies';
import Skills from './components/skills/Skills';
import Languages from './components/languages/Languages';
import { BackTop } from 'antd';

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

function App() {

  return (
    <div className="App">
      <Navigation />
      <ContentContainer>
        <AboutMe />
        <ExpirienceAndAducation />
        <Skills />
        <Languages />
        <Hobbies />
      </ContentContainer>
      <BackTop />
      <Footer />
    </div>
  );
}

export default App;
