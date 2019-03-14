export const theme = {
  palette: {
    link: '#49bf9d',
    title: '#787878',
    content: '#a2a2a2',
    menu: '#373a47'
  }
};

const properties = {
  m: 'margin',
  p: 'padding',
  t: 'top',
  b: 'bottom',
  r: 'right',
  l: 'left'
};

const getProp = key => {
  const [a, b] = key.split('');
  return properties[a] + (properties[b] ? `-${properties[b]}` : '');
};

export const space = props =>
  Object.keys(props)
    .filter(k => k.length <= 2 && (k[0] === 'm' || k[0] === 'p'))
    .map(k => `${getProp(k)}: ${props[k]};`);

export const width = (w = 'auto') => ` width: ${w};`;

export const zIndex = {
  MENU_ICON: '1001',
  MENU_OVERLAY: '1000',
  MENU: '1002'
};
