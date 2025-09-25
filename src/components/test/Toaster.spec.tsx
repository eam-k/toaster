import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Toaster, { ToasterProps } from '../Toaster';
import { ToastMessageProps } from '../../model/toaster-message-creator';

// Mock SCSS import
jest.mock('../Toaster.styles.scss', () => ({}));

describe('Toaster Component', () => {
  const mockOnRemove = jest.fn();
  const mockOnRemoveAll = jest.fn();

  const defaultProps: ToasterProps = {
    toasts: [],
    onRemove: mockOnRemove,
    onRemoveAll: mockOnRemoveAll,
  };

  const mockToasts: ToastMessageProps[] = [
    { id: '1', message: 'Important Message' },
    { id: '2', message: 'Successfull response' },
    { id: '3', message: 'Please retry to submit' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe('Toaster', () => {
    it('should render empty section when no toasts', () => {
      render(<Toaster {...defaultProps} />);

      const section = screen.getByTestId('toaster-main-section');
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass('toast__section');
      expect(section).not.toHaveClass('expanded');
      expect(section).not.toHaveClass('disappear');
    });

    it('should correctly display a message', async () => {
      render(
        <Toaster toasts={[mockToasts[0]]} onRemove={defaultProps.onRemove} onRemoveAll={defaultProps.onRemoveAll} />
      );
      expect(screen.queryByTestId('toast-message-notification')).toHaveTextContent('Important Message');
    });

    it('should render control buttons', () => {
      // To do
    });
  });
});
