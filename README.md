# c5-ts-utils

currently working on implementing a generic table/grid very similar to the one in ExtJS.

installation:

```js
  npm install c5-ts-utils
```

sample usage:  

```js
import {DataGrid} from 'c5-ts-utils';

<DataGrid
  data={data}
  identifier={'grid1'}
  headers={[
    {
      columnName: 'storeNumber',
      title: '#',
      style: {
        textAlign: 'center'
      }
    },
    {
      columnName: 'storeName',
      title: 'Name',
      sortable: 'asc',
      style: {
        textAlign: 'left'
      }
    },
    {
      columnName: 'termCount',
      title: 'Terms',
      filterable: true,
      style: {
        textAlign: 'center'
      }
    }
  ]}
/>
```

Features available so far

  1. All columns can be sorted on
  2. Columns can be re-ordered
  3. Dropdown allows columns to be visible or hidden
  4. Filter feature enabled by adding filterable

Things to figure out:

[ ]: make both columns and filters be able to have large height and break out of the parent div
