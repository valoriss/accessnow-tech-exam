export const centerStyle = () => ({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
});

export const headerStyle = (additionalStyle) => ({
  fontWeight: 'bold',
  marginBottom: '10px',
  marginTop: '0',
  ...additionalStyle,
});

export const smallHeaderStyle = () => ({
  fontWeight: 'lighter',
  fontSize: '18px',
  margin: '12px 0 0 0',
});

export const appBarStyle = () => ({
  backgroundColor: '#4c8bf5',
  flexGrow: '1',
  position: 'static',
});
