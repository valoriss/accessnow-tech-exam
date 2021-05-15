export const center = () => ({
  display: 'flex',
  //flexWrap: 'wrap',
  justifyContent: 'center',
  textAlign: 'center'
});

export const flexStartStyle = () => ({
  justifyContent: 'flex-start',
  display: 'flex',
});

export const headerStyle = (additionalStyle) => ({
  fontWeight: 'bold',
  marginBottom: '10px',
  marginTop: '0',
  ...additionalStyle,
});

export const smallHeader = () => ({
  fontWeight: 'lighter',
  fontSize: '18px',
  margin: '12px 0 0 0'
});

export const appBarStyle = () => ({
  backgroundColor: '#4c8bf5',
  flexGrow: '1',
  position: 'static',
});
