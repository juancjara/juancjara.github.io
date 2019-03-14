import React from 'react';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import { Overlay, MenuIcon, MenuContainer, MenuLink, CloseIcon } from './styles.js';

class Menu extends React.Component {
  state = { isOpen: false };

  toggleMenu = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  onClick = id => () => {
    document.querySelector(`#${id}`).scrollIntoView();
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <MenuIcon onClick={this.toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </MenuIcon>
        <Overlay onClick={this.toggleMenu} isOpen={isOpen} />
        <MenuContainer isOpen={isOpen}>
          <CloseIcon onClick={this.toggleMenu}>
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </CloseIcon>
          <nav
            className={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <MenuLink onClick={this.onClick('about')}>About</MenuLink>
            <MenuLink onClick={this.onClick('projects')}>Projects</MenuLink>
            <MenuLink hideDesktop onClick={this.onClick('contact')}>
              Contact
            </MenuLink>
          </nav>
        </MenuContainer>
      </>
    );
  }
}

export default Menu;
