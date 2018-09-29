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
        <h2>Oops! That isn&apos;t right...</h2>
      </div>
    </main>
  </Layout>
);
