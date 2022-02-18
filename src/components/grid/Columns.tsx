import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Filter } from './Filter';

import './Columns.css';
import { TableHeader } from '../DataGrid';

export interface ColumnProps<T> {
  open: boolean;
  divId: string;
  style?: React.CSSProperties;
  headers: string[];
  checkedColumns: string[];
  handleCheckClick: (e: string, checked: boolean) => void;
  header: TableHeader<T>;
  identifier: string;
  data: T[];
  filterChecked: boolean;
  checkedFilters: string[];
  setCheckedFilters: (s: string[]) => void;
  handleFilterItemClick: (checked: boolean, r: string, header: string) => void;
  handleMainFilterClick: (checked: boolean, s: string) => void;
  showFilter: boolean;
  setShowFilter: (b: boolean) => void;
}
export function Columns<T>(props: ColumnProps<T>) {
  const [filterStyle, setFilterStyle] = useState<React.CSSProperties>({
    position: 'absolute',
  });

  const {
    open,
    divId,
    style,
    headers,
    checkedColumns,
    handleCheckClick,
    header,
    filterChecked,
    handleFilterItemClick,
    checkedFilters,
    handleMainFilterClick,
    showFilter,
    setShowFilter,
  } = props;
  const div = document.getElementById(divId);

  const handleMouseOver = () => {
    const div = document.getElementById(
      `mikto-table-filter-${props.identifier}`
    );
    if (div) {
      const rect = div.getBoundingClientRect();
      if (rect) {
        setFilterStyle({
          position: 'fixed',
          zIndex: '5',
          left: rect.right.toString() + 'px',
          top: (rect.top - 200).toString() + 'px',
          backgroundColor: '#aaa',
          padding: '8px',
        });
        setShowFilter(true);
      }
    }
  };

  const handleMouseLeave = () => {
    //setShowFilter(false);
  };

  const amIChecked = (title: keyof T): boolean => {
    return checkedColumns.includes(title as string);
  };

  if (open && div) {
    return createPortal(
      <div className="mikto-table-modal" style={style}>
        <div className="mikto-table-modal-title">Columns</div>
        <div className="mikto-table-modal-body">
          {headers.map((item: any, idx: number) => {
            if (item.visible && item.visible !== false) {
              if (!checkedColumns.includes(item.title)) {
                checkedColumns.push(item.title);
              }
            } else if (item.visible === undefined) {
              if (!checkedColumns.includes(item.title)) {
                checkedColumns.push(item.title);
              }
            }
            return (
              <div className="mikto-table-modal-line" key={`mc-c-${idx}`}>
                <input
                  className="mikto-table-modal-check"
                  type="checkbox"
                  checked={amIChecked(item.title)}
                  onChange={(e) => {
                    handleCheckClick(item.title, e.target.checked);
                  }}
                />
                <span className="mikto-table-modal-line-title">
                  {item.title}
                </span>
              </div>
            );
          })}
          {header.filterable ? (
            <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
              <h3>Filter</h3>
              <input
                type="checkbox"
                checked={filterChecked}
                onChange={(e) =>
                  handleMainFilterClick(
                    e.target.checked,
                    header.columnName as string
                  )
                }
              />
              <div id={`mikto-table-filter-${props.identifier}`}></div>
              <Filter
                header={header}
                open={showFilter}
                divId={`mikto-table-filter-${props.identifier}`}
                data={props.data}
                style={filterStyle}
                availableFilters={checkedFilters}
                filterItemClicked={handleFilterItemClick}
              />
            </div>
          ) : null}
        </div>
      </div>,
      div
    );
  } else {
    return null;
  }
}
