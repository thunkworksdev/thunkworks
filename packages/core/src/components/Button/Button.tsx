import './Button.css';
import React from 'react';
import { THUNKWORKS } from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { UnstyledButtonProps } from '../UnstyledButton';
import { createFactoryPolymorphic } from '../../factory';

export interface ButtonProps extends UnstyledButtonProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export type ButtonFactory = THUNKWORKS.Factory<{
  component: 'button';
  reference: HTMLButtonElement;
  properties: ButtonProps;
  classNames: THUNKWORKS.ClassNames['Button'];
  variant: THUNKWORKS.Variants['Button'];
}>;

const defaultProps = {
  variant: 'default',
  classNames: {
    root: 'thwx-button',
    label: 'thwx-button-label',
    layout: 'thwx-button-layout',
    content: 'thwx-button-content',
  },
};

export const Button = createFactoryPolymorphic<ButtonFactory>((props, ref) => {
  const {
    loading,
    disabled,
    children,
    className,
    classNames,
    leftContent,
    rightContent,
    as: Component = 'button',
    ...otherProps
  } = props;

  const hasLeftContent = !!leftContent;
  const hasRightContent = !!rightContent;

  const { css } = useClassNames({ defaultProps, classNames });

  return (
    <Component className={css.root} ref={ref} {...otherProps}>
      <span className={css.layout}>
        {hasLeftContent && (
          <span className={css.content} data-position="left">
            {leftContent}
          </span>
        )}

        <div className={css.label}>{children}</div>

        {hasRightContent && (
          <span className={css.content} data-position="right">
            {rightContent}
          </span>
        )}
      </span>
    </Component>
  );
});

Button.displayName = '@thunkworks/core/Button';
