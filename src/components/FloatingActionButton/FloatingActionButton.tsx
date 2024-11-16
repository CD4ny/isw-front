import { Button } from '../ui/button';
import { FloatingActionButtonProps } from './types';

const FloatingActionButton = ({
  children,
  position = 'bottom-right',
  ...props
}: FloatingActionButtonProps) => {
  return (
    <Button
      className={`fixed z-50 ${position === 'top-left' ? 'top-4 left-4' : position === 'top-right' ? 'top-4 right-4' : position === 'bottom-right' ? 'bottom-4 right-4' : 'bottom-4 left-4'}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default FloatingActionButton;
