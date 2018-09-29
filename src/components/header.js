import React from 'react';

const Header = () => (
  <header style={{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    minHeight: '64px',
    padding: '0 16px',
    verticalAlign: 'middle',
  }}
  >
    <div style={{
      float: 'left',
      flexShrink: '0',
      padding: '0',
      verticalAlign: 'middle',
    }}
    >
      IT&apos;S TOM
    </div>
    <div style={{
      flex: '1 1 auto',
      textAlign: 'center',
    }}
    />
    <div style={{
      flexShrink: '0',
      float: 'right',
      paddingRight: '40px',
      textAlign: 'center',
      verticalAlign: 'middle',
    }}
    >
      <a
        href="https://twitter.com/tomconder"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      {' '}
      <a
        href="https://github.com/tomconder"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  </header>
);

export default Header;
