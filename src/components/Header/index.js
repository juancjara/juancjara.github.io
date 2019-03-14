import React from 'react';
import Img from 'gatsby-image';

import { AvatarClassName, Container, Box, Description, Name } from './styles';
import SocialIcons from '../SocialIcons';
import Copyright from '../Copyright';

const Header = ({ name, description, socialLinks, avatar, bgImage }) => (
  <Container>
    <Img
      title="bg"
      fluid={bgImage.childImageSharp.fluid}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
    <Img title="avatar" fluid={avatar.childImageSharp.fluid} css={AvatarClassName} />
    <Description>
      <Name>{name}</Name>
      <span dangerouslySetInnerHTML={{ __html: description }} />
    </Description>
    <Box mt="auto" mb="1em">
      <SocialIcons links={socialLinks} />
    </Box>
    <Box>
      <Copyright />
    </Box>
  </Container>
);

export default Header;
