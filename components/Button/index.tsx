import { CustomFlowbiteTheme, Button as FlowbiteButton } from 'flowbite-react';
import React, { FC, ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<typeof FlowbiteButton> {}

const buttonTheme: CustomFlowbiteTheme['button'] = {
  color: {
    yellow: 'bg-yellow-1',
    outline: 'bg-transparent border border-black',
    green: 'bg-primary-1 text-white',
    outlineGreen: 'border border-primary-2 text-primary-2',
  },
  base: 'focus:outline-none focus:ring-0 [&>span]:justify-center py-1',
};

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <FlowbiteButton theme={buttonTheme} {...props}>
      {children}
    </FlowbiteButton>
  );
};

export default Button;
