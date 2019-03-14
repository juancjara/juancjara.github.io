import React from 'react';
import { css } from '@emotion/core';

import { Container } from './styles';
import SocialIcons from '../SocialIcons';
import Copyright from '../Copyright';

const Footer = ({ links }) => (
  <Container
    id="contact"
    className={css`
      color: rgba(255, 255, 255, 0.4);
    `}
  >
    <p
      className={css`
        font-size: 25px;
        margin-bottom: 20px;
      `}
    >
      Contact me
    </p>
    <SocialIcons links={links} />
    <Copyright />
  </Container>
);

export default Footer;
