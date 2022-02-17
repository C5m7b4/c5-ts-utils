import React from 'react';
import { createPortal } from 'react-dom';

import './Columns.css';

export interface ColumnProps<T> {
  open: boolean;
  divId: string;
  style?: React.CSSProperties;
  headers: string[];
  checkedColumns: string[];
  handleCheckClick: (e: string, checked: boolean) => void;
}
export function Columns<T>(props: ColumnProps<T>) {
  const { open, divId, style, headers, checkedColumns, handleCheckClick } =
    props;
  const div = document.getElementById(divId);

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
        </div>
      </div>,
      div
    );
  } else {
    return null;
  }
}
