import React from 'react';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <main
      className="content"
      style={{
        alignItems: 'center',
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
      }}
    >
      <div style={{
        padding: '20px',
      }}
      >
        <h2>Hi, it&apos;s Tom</h2>
        <h1>
          I am a full stack software engineer
        </h1>
        <h2>
          I am a
          {' '}
          <span role="img" aria-label="dice">🎲</span>
          {' '}
          game designer.
        </h2>
      </div>
    </main>
  </Layout>
);
