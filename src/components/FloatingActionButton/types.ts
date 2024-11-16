import { PropsWithChildren } from 'react';
import { ButtonProps } from '../ui/button';

export interface FloatingActionButtonProps
  extends PropsWithChildren,
    ButtonProps {
  position?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
}
