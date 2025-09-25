import { useCallback, useState } from 'react';
import './App.scss';
import { Toaster } from './components/Toaster';
import { makeToast, ToastMessageProps } from './model/toaster-message-creator';

export default function App() {
  const [toasts, setToasts] = useState<ToastMessageProps[]>(() => []);

  const addToast = useCallback(() => {
    setToasts(prevToasts => [makeToast(), ...prevToasts]);
  }, []);

  const removeToast = useCallback((targetId: number) => {
    setToasts(prevToasts => {
      const nextState = prevToasts.filter(({ id }) => {
        return parseInt(id) !== targetId;
      });
      return nextState;
    });
  }, []);

  const onRemoveAll = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <>
      <h1>Peregrine Toasts</h1>
      <div className="card">
        <button onClick={addToast}>Toast</button>
      </div>
      <Toaster toasts={toasts} onRemove={removeToast} onRemoveAll={onRemoveAll} />
    </>
  );
}
