import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

import { Social, Icon } from './styles';

const color = 'rgba(255, 255, 255, 0.4)';
const ICONS = {
  twitter: faTwitter,
  linkedIn: faLinkedIn,
  github: faGithub,
  email: faEnvelope
};

const SocialIcons = ({ links }) => (
  <Social>
    {links.map(({ icon, url, samePage }, i) => (
      <Icon key={i}>
        <a href={url} target={samePage ? '' : '_blank'} rel="noopener noreferrer">
          <FontAwesomeIcon icon={ICONS[icon]} size="2x" color={color} />
        </a>
      </Icon>
    ))}
  </Social>
);

export default SocialIcons;
