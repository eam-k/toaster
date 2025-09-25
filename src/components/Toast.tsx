import React, { useState } from 'react';

export interface ToastProps {
  id: string;
  message: string;
  position: number;
  onRemove: (id: number) => void;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  expand: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, id, position, onRemove, setExpand, expand }) => {
  const [removeElement, setRemoveElement] = useState(false);

  const onClickHandler: React.MouseEventHandler<HTMLDivElement> = event => {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const classValue = target.getAttribute('class');

    console.log(classValue);
    if (classValue === 'toast__button-remove') {
      setRemoveElement(true);
      setTimeout(() => {
        onRemove(parseInt(id));
      }, 200);
    } else {
      setExpand(!expand);
    }
  };

  // const firstMessage = position === 0 // For ADA in the future we can anounce errors.
  const toastMessageClass = `toast__message-body`;
  // Control animations when the stack is collapsed, if expanded nothing must be applied.
  const positionClass = ` ${position < 3 ? `position-${position}` : 'hidden'}`;
  const expandedClass = expand ? `` : positionClass;
  // Control the removal of elements and its animations.
  const removeMessageClass = ` ${removeElement ? ' remove' : ''}`;

  return (
    <div className={toastMessageClass.concat(expandedClass, removeMessageClass)} onClick={onClickHandler}>
      <div className="toast__message-wrapper">
        <span className="toast__message" data-testid="toast-message-notification">
          {message}
        </span>
        <button className="toast__button-remove" aria-label="close-toast-message" data-testid="toaster-buttons-remove">
          X
        </button>
      </div>
    </div>
  );
};

export default Toast;

Toast.displayName = 'Toast';
