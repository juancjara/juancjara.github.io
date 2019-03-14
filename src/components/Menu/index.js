import React from 'react';
import { css } from 'emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import { zIndex } from '../../utils/styles';
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
        <Overlay
          onClick={this.toggleMenu}
          className={css`
            opacity: ${isOpen ? '1' : '0'};
            z-index: ${isOpen ? zIndex.MENU_OVERLAY : -1};
          `}
        />
        <MenuContainer
          className={css`
            ${isOpen ? '' : 'transform: translate3d(100%, 0px, 0px);'}
          `}
        >
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
            <MenuLink
              className={css`
                @media (min-width: 1024px) {
                  display: none;
                }
              `}
              onClick={this.onClick('contact')}
            >
              Contact
            </MenuLink>
          </nav>
        </MenuContainer>
      </>
    );
  }
}

export default Menu;