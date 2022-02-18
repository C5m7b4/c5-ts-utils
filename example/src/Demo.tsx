import React, { useState, MouseEvent } from 'react';
import './Demo.css';
import { data, data2 } from './data';

import { Container, Window, DataGrid } from '../../src';

const Demo = () => {
  return (
    <div>
      <div style={{ minHeight: '100px' }}>This is our Demo</div>
      <Container
        style={{
          minHeight: '800px',
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Window
          title={`Stores (${data.length})-records`}
          style={{ height: '300px', width: '800px' }}
        >
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
                filterable: true,
              },
              {
                columnName: 'version',
                title: 'version',
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
        <Window title="Grid 2" style={{ marginTop: '20px' }}>
          <DataGrid
            data={data2}
            identifier={'grid2'}
            headers={[
              {
                columnName: 'id',
                title: 'ID',
                style: {
                  textAlign: 'center',
                },
              },
              {
                columnName: 'name',
                title: 'Name',
                style: {
                  textAlign: 'left',
                },
              },
              {
                columnName: 'state',
                title: 'State',
                style: {
                  textAlign: 'center',
                },
              },
              {
                columnName: 'employees',
                title: 'Emp Cnt',
                style: {
                  textAlign: 'center',
                },
              },
            ]}
          />
        </Window>
      </Container>
      <div style={{ width: '150.65625px' }}></div>
    </div>
  );
};

export default Demo;
