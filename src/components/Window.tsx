import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  MouseEvent,
} from 'react';
import './Window.css';

export interface WindowProps {
  title: string;
  children: ReactNode;
  onPointerDown?: (e: MouseEvent) => void;
  onPointerUp?: (e: MouseEvent) => void;
  onPointerMove?: (e: MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Window: React.FC<WindowProps> = (props) => {
  const {
    onPointerDown,
    onPointerUp,
    onPointerMove,
    title,
    children,
    className = 'mikto-window',
    style,
  } = props;
  const [isDragging, setIsDragging] = useState(false);
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  const [lastNewY, setLastNewY] = useState(0);
  const [lastNewX, setLastNewX] = useState(0);

  const dragOffset = 3;

  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('useEffect');
    // @ts-ignore
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      // @ts-ignore
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  const handlePointerDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    if (onPointerDown) {
      onPointerDown(e);
    }
  };

  const handlePointerUp = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (onPointerUp) {
      onPointerUp(e);
    }
  };

  const handlePointerMove = (e: MouseEvent) => {
    e.preventDefault();
    if (isDragging) {
      onDragMove(e);
    }
    if (onPointerMove) {
      onPointerMove(e);
    }
  };

  const onDragMove = (e: MouseEvent) => {
    let newY = translate.y + e.movementY;
    let newX = translate.x + e.movementX;
    if (frame.current) {
      const parent = frame.current.parentNode as HTMLElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        const window = frame.current.getBoundingClientRect();
        if (rect) {
          if (window.top < rect.top) {
            newY = lastNewY + dragOffset;
          } else {
            setLastNewY(newY);
          }
          if (window.top + window.height > rect.bottom) {
            newY = lastNewY - dragOffset;
          }
          if (window.left < rect.left) {
            newX = lastNewX + dragOffset;
          } else {
            setLastNewX(newX);
          }
          if (window.right > rect.right) {
            newX = lastNewX - dragOffset;
          }
        }
      }
    }
    setTranslate({
      x: newX,
      y: newY,
    });
  };

  const setStyle = () => {
    return {
      ...style,
      transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    };
  };

  return (
    <div ref={frame} draggable className={className} style={setStyle()}>
      <div
        className="window-header"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        <div className="window-header-red">
          <div className="window-header-red-span"></div>
        </div>
        <div className="window-header-yellow">
          <div className="window-header-yellow-span"></div>
        </div>
        <div className="window-header-green">
          <div className="window-header-green-span"></div>
        </div>
        <div className="window-header-text">{title}</div>
      </div>
      <div className="window-body">{children}</div>
      <div className="window-footer"></div>
    </div>
  );
};

Window.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
};
