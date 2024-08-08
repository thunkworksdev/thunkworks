import './Checkbox.css';
import { THUNKWORKS } from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { createFactory } from '../../factory';
import { Input, InputProps } from '../Input';

export interface CheckboxProps {
  rootProps?: Partial<InputProps>;
}

export type CheckboxFactory = THUNKWORKS.Factory<{
  component: 'input';
  properties: CheckboxProps;
  reference: HTMLInputElement;
  classNames: THUNKWORKS.ClassNames['Checkbox'];
  variant: THUNKWORKS.Variants['Checkbox'];
}>;

const defaultProps: THUNKWORKS.DefaultProps<'Checkbox'> = {
  variant: 'default',
  classNames: {
    input: 'thwx-switch-input',
    indicator: 'thwx-switch-indicator',
  },
};

export const Checkbox = createFactory<CheckboxFactory>((props, ref) => {
  const { rootProps, variant = 'default', classNames, ...otherProps } = props;

  const { css } = useClassNames({ defaultProps, classNames });

  return (
    <Input {...rootProps}>
      <div className={css.indicator} />
      <input ref={ref} type="checkbox" className={css.input} {...otherProps} />
    </Input>
  );
});

Checkbox.displayName = '@thunkworks/core/Checkbox';
