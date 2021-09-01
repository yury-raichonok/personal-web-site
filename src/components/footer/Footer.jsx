import React from 'react';
import styled from 'styled-components';
import { Icon28LogoVkColor } from '@vkontakte/icons';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub, AiOutlineCopyrightCircle } from 'react-icons/ai';

const FooterContainer = styled.div`
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  height: 220px;
  justify-content: center;
  width: 100%;
`;

const FooterCopyRights = styled.div`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  width: 100%;
`;

const FooterEmailRow = styled.div`
  font-family: Bebas Neue;
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
`;

const FooterLink = styled.a`
  margin: 15px;
`;

const FooterLinksRow = styled.div`
  align-items: center;
  display: flex;
  font-size: 24px;
  justify-content: center;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterEmailRow>
        yury.raichonak@gmail.com
      </FooterEmailRow>
      <FooterLinksRow>
        <FooterLink href="https://github.com/yury-raichonok" target="_blank">
          <AiFillGithub style={{color: '#000'}} />
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/yury-raichonak/" target="_blank">
          <FaLinkedin style={{color: '#0b66c2'}} />
        </FooterLink>
        <FooterLink href="https://vk.com/yourrray" target="_blank">
          <Icon28LogoVkColor />
        </FooterLink>
      </FooterLinksRow>
      <FooterCopyRights>
        <AiOutlineCopyrightCircle />&nbsp;
        {new Date().getFullYear()}
      </FooterCopyRights>
    </FooterContainer>
  )
};


export default Footer
