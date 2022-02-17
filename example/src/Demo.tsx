import React, { useState, MouseEvent } from 'react';
import './Demo.css';
import { data } from './data';

import { Container, Window, DataGrid } from '../../src';

const Demo = () => {
  return (
    <div>
      <div style={{ minHeight: '100px' }}>This is our Demo</div>
      <Container style={{ minHeight: '400px', paddingTop: '20px' }}>
        <Window title="My Widget" style={{ height: '300px', width: '600px' }}>
          <DataGrid
            data={data}
            identifier={'grid1'}
            headers={[
              {
                columnName: 'storeid',
                title: 'storeid',
                visible: false,
                style: {
                  textAlign: 'left',
                },
              },
              {
                columnName: 'storeNumber',
                title: 'Store Number',
                sortable: 'asc',
                style: {
                  textAlign: 'left',
                },
              },
              {
                columnName: 'storeName',
                title: 'Name',
                style: {
                  textAlign: 'left',
                },
              },
              {
                columnName: 'termCount',
                title: 'Terms',
                style: {
                  textAlign: 'center',
                },
              },
            ]}
            customRenderers={{
              image: (it) => (
                <img
                  alt={`${it.storeNumber}`}
                  src={it.image.url}
                  width={it.image.width}
                  height={it.image.height}
                />
              ),
            }}
          />
        </Window>
      </Container>
      <div style={{ width: '150.65625px' }}></div>
    </div>
  );
};

export default Demo;
