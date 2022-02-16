import React, { useState, MouseEvent } from 'react';
import './Demo.css';

import { Container, Window } from '../../src';

const Demo = () => {
  return (
    <div>
      <div style={{ minHeight: '100px' }}>This is our Demo</div>
      <Container style={{ minHeight: '400px', paddingTop: '20px' }}>
        <Window title="My Widget" style={{ height: '300px', width: '400px' }}>
          <div>Here is our window content</div>
        </Window>
      </Container>
    </div>
  );
};

export default Demo;
