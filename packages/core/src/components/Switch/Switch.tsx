import './Switch.css';
import { THUNKWORKS } from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { createFactory } from '../../factory';
import { Input, InputProps } from '../Input';

export interface SwitchProps {
  rootProps?: Partial<InputProps>;
}

export type SwitchFactory = THUNKWORKS.Factory<{
  component: 'input';
  properties: SwitchProps;
  reference: HTMLInputElement;
  classNames: THUNKWORKS.ClassNames['Switch'];
  variant: THUNKWORKS.Variants['Switch'];
}>;

const defaultProps: THUNKWORKS.DefaultProps<'Switch'> = {
  variant: 'default',
  classNames: {
    input: 'thwx-switch-input',
    indicator: 'thwx-switch-indicator',
  },
};

export const Switch = createFactory<SwitchFactory>((props, ref) => {
  const { rootProps, variant = 'default', classNames, className, ...otherProps } = props;

  const { css } = useClassNames({ defaultProps, classNames });

  return (
    <Input {...rootProps}>
      <div className={css.indicator} />
      <input ref={ref} type="checkbox" className={css.input} {...otherProps} />
    </Input>
  );
});

Switch.displayName = '@thunkworks/core/Switch';
