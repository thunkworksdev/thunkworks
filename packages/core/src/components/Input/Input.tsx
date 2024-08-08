import './Input.css';
import { THUNKWORKS } from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { createFactoryPolymorphic } from '../../factory';

export interface InputProps {
  label?: React.ReactNode;
  message?: React.ReactNode;
}

export type InputFactory = THUNKWORKS.Factory<{
  component: 'div';
  reference: HTMLDivElement;
  properties: InputProps;
  classNames: THUNKWORKS.ClassNames['Input'];
  variant: THUNKWORKS.Variants['Input'];
}>;

const defaultProps = {
  classNames: {
    root: 'thwx-input',
    label: 'thwx-input-label',
    content: 'thwx-input-content',
    message: 'thwx-input-message',
  },
};

export const Input = createFactoryPolymorphic<InputFactory>((props, ref) => {
  const { label, classNames, message, children, ...otherProps } = props;

  const { css } = useClassNames({ defaultProps, classNames });

  return (
    <div ref={ref} className={css.root} {...otherProps}>
      {children}
      <div className={css.content}>
        {label && <div className={css.label}>{label}</div>}
        {message && <div className={css.message}>{message}</div>}
      </div>
    </div>
  );
});

Input.displayName = '@thunkworks/core/Input';
