import React, { useState } from 'react';
import { Toast } from './Toast';
import { ToastMessageProps } from '../model/toaster-message-creator';
import './Toaster.styles.scss';

export interface ToasterProps {
  toasts: ToastMessageProps[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

export const Toaster: React.FC<ToasterProps> = ({ toasts, onRemove, onRemoveAll }) => {
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

  return (
    <section className={`toast__section${expand ? ' expanded' : ''} ${disappearAll ? ' disappear' : ''}`}>
      <div className="toast__section-messages">
        {toasts.map((t, i) => {
          return <Toast key={t.id} {...t} position={i} onRemove={onRemove} setExpand={setExpand} expand={expand} />;
        })}
      </div>
      <div className="toast__section-buttons">
        <button className="toast__button toast__button_arrow-up" type="button" onClick={arrowUpHandler}>
          <img src="./src/resources/arrow-sm-up-svgrepo-com.svg" alt="arrow-up-icon" width="35" height="30" />
        </button>
        <button className="toast__button toast__button_garbage-can" type="button" onClick={garbageCanHandler}>
          <img src="./src/resources/icons8-garbage.svg" alt="garbage-can-icon" width="35" height="30" />
        </button>
      </div>
    </section>
  );
};

Toaster.displayName = 'Toaster';
