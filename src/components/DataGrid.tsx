import React, { useState, useEffect, useRef } from 'react';
import { isPrimitive } from '../utils/utils';
import { Columns } from './grid/Columns';

import './DataGrid.css';

export type CustomRenderers<T> = Partial<
  Record<keyof T, (it: T) => React.ReactNode>
>;

export type TableHeader<T> = {
  columnName: keyof T;
  title: string;
  sortable?: 'asc' | 'desc' | false;
  visible?: boolean;
  style?: React.CSSProperties;
  width?: number;
};

export interface TableProps<T> {
  data: T[];
  identifier: string;
  customRenderers?: CustomRenderers<T>;
  headers: TableHeader<T>[];
  fill?: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

export function DataGrid<T>(props: TableProps<T>) {
  const [render, setRender] = useState(false);
  const [showColumnsModal, setShowColumnModal] = useState(false);
  const [columnModalStyle, setColumnModalStyle] = useState({});
  const [checkedColumns, setCheckedColumns] = useState<string[]>([]);

  const { fill = true } = props;

  const table = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (table.current) {
      if (fill) {
        const parent = table.current.parentNode as HTMLElement;
        const rect = parent.getBoundingClientRect();
        if (rect) {
          const tbody = table.current.querySelector('tbody');
          if (tbody) {
            table.current.style.height = rect.height.toString() + 'px';
            tbody.style.height = (rect.height - 55).toString() + 'px';
          }
        }
      }
    }
  }, []);

  const handleModal = (divId: string) => {
    const div = document.getElementById(divId);

    if (div && table.current) {
      const rect = div.getBoundingClientRect();
      const tableRect = table.current.getBoundingClientRect();
      if (rect && tableRect) {
        const left = (rect.left + rect.width - 75).toFixed(0).toString() + 'px';
        const top =
          (rect.top - tableRect.top + 50).toFixed(0).toString() + 'px';
        const style = {
          position: 'absolute',
          top: top,
          left: left,
        };
        setColumnModalStyle(style);
        setShowColumnModal(!showColumnsModal);
      }
    }
  };

  const sortByProperty = (prop: keyof T, asc = 0) => {
    if (!asc)
      return (a: T, b: T) =>
        a[prop] === b[prop] ? 0 : a[prop] < b[prop] ? -1 : 1;
    else
      return (b: T, a: T) =>
        a[prop] == b[prop] ? 0 : a[prop] < b[prop] ? -1 : 1;
  };

  const handleColumnCheck = (e: string, checked: boolean) => {
    const header = props.headers.filter((h) => h.title === e)[0];
    if (checked) {
      setCheckedColumns([...checkedColumns, e]);
      header.visible = true;
    } else {
      const newArray = checkedColumns.filter((c) => c !== e);
      setCheckedColumns(newArray);
      header.visible = false;
    }
  };

  const handleSortClick = (columnName: keyof T) => {
    const header = props.headers.find((h) => h.columnName === columnName);
    if (header) {
      if (!header.sortable) {
        header.sortable = 'asc';
      }
      if (header.sortable === 'asc') {
        header.sortable = 'desc';
        const sortedData = props.data.sort(sortByProperty(columnName, 0));
        props.data = sortedData;
      } else {
        header.sortable = 'asc';
        const sortedData = props.data.sort(sortByProperty(columnName, 1));
        props.data = sortedData;
      }
      setRender(!render);
    }
  };

  function renderHeader(header: TableHeader<T>, id: number) {
    const { title, visible = true } = header;
    if (!visible === false) {
      return (
        <th
          key={`table-header-${id}`}
          id={`table-header-${props.identifier}-${id}`}
          style={header.style}
          className="mikto-header-sort"
        >
          <span
            style={{ width: '80%' }}
            onClick={() => handleSortClick(header.columnName)}
          >
            {title}
          </span>
          <span
            style={{
              width: '20%',
              float: 'right',
              textAlign: 'center',
            }}
            onClick={() =>
              handleModal(`table-header-${props.identifier}-${id}`)
            }
            className={`mikto-grid-chevron down`}
          ></span>
        </th>
      );
    } else {
      return;
    }
  }
  function renderRow(item: T, id: number) {
    return (
      <tr key={`table-row-${id}`} className="mikto-table-row">
        {objectKeys(item).map((itemProperty, i) => {
          if (props.headers[i]) {
            const { visible = true } = props.headers[i];
            if (!visible === false) {
              const customRenderer = props.customRenderers?.[itemProperty];
              const style = props.headers[i].style;

              if (customRenderer) {
                return (
                  <td style={style} key={`table-td-${i}`}>
                    {customRenderer(item)}
                  </td>
                );
              }

              return (
                <td style={style} key={`table-td-${i}`}>
                  {isPrimitive(item[itemProperty]) ? item[itemProperty] : ''}
                </td>
              );
            }
          }
          return;
        })}
      </tr>
    );
  }
  return (
    <div>
      <table ref={table} className="mikto-table">
        <thead>
          <tr>{props.headers.map(renderHeader)}</tr>
        </thead>
        <tbody>{props.data.map(renderRow)}</tbody>
      </table>
      <div id={`mikto-columns-${props.identifier}`}></div>
      <Columns
        open={showColumnsModal}
        divId={`mikto-columns-${props.identifier}`}
        style={columnModalStyle as React.CSSProperties}
        headers={props.headers as unknown as string[]}
        checkedColumns={checkedColumns}
        handleCheckClick={handleColumnCheck}
      />
    </div>
  );
}
