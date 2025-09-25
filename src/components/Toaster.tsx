import React, { useEffect, useState } from 'react';
import Toast from './Toast';
import { ToastMessageProps } from '../model/toaster-message-creator';
import './Toaster.styles.scss';

export interface ToasterProps {
  toasts: ToastMessageProps[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const Toaster: React.FC<ToasterProps> = ({ toasts, onRemove, onRemoveAll }) => {
  const [expand, setExpand] = useState(false);
  const [disappearAll, setDisappearAll] = useState(false);

  const arrowUpHandler = () => {
    setExpand(false);
  };

  const garbageCanHandler = () => {
    setDisappearAll(true);
    setTimeout(() => {
      setDisappearAll(false);
      onRemoveAll();
      setExpand(false);
    }, 250);
  };

  // In case user manually close all toast messages when it is expanded
  useEffect(() => {
    if (toasts.length === 0) setExpand(false);
  }, [toasts]);

  return (
    <section
      className={`toast__section${expand ? ' expanded' : ''} ${disappearAll ? ' disappear' : ''}`}
      data-testid="toaster-main-section"
    >
      <div className="toast__section-messages" data-testid="toaster-message-section">
        {toasts.map((t, i) => {
          return <Toast key={t.id} {...t} position={i} onRemove={onRemove} setExpand={setExpand} expand={expand} />;
        })}
      </div>
      <div className="toast__section-buttons">
        <button
          className="toast__button toast__button_arrow-up"
          type="button"
          onClick={arrowUpHandler}
          data-testid="toaster-buttons-collapse"
        >
          <img src="./src/resources/arrow-sm-up-svgrepo-com.svg" alt="arrow-up-icon" width="35" height="30" />
        </button>
        <button
          className="toast__button toast__button_garbage-can"
          type="button"
          onClick={garbageCanHandler}
          data-testid="toaster-buttons-remove-all"
        >
          <img src="./src/resources/icons8-garbage.svg" alt="garbage-can-icon" width="35" height="30" />
        </button>
      </div>
    </section>
  );
};

export default Toaster;

Toaster.displayName = 'Toaster';
