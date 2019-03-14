import styled from '@emotion/styled';

import { zIndex, theme } from '../../utils/styles';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease 0s;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  z-index: ${props => (props.isOpen ? zIndex.MENU_OVERLAY : -1)};
`;

export const MenuIcon = styled.button`
  outline: none;
  background: transparent;
  border: none;
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: ${zIndex.MENU_ICON};
  cursor: pointer;
  svg {
    color: ${theme.palette.menu};
  }
`;

export const CloseIcon = styled.button`
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  svg {
    color: white;

    &:hover {
      color: ${theme.palette.link};
    }
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  z-index: ${zIndex.MENU};
  z-index: 1002;
  transition: all 0.5s ease 0s;
  background: ${theme.palette.menu};
  color: white;
  padding: 2.5em 1.5em 0;
  ${props => (props.isOpen ? '' : 'transform: translate3d(100%, 0px, 0px);')}
`;

export const MenuLink = styled.div`
  cursor: pointer;
  font-size: 20px;
  padding: 0.8em;
  &:hover {
    color: ${theme.palette.link};
  }
`;
