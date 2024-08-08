import './Radio.css';
import { THUNKWORKS } from '@thunkworks/types';
import { useClassNames } from '@thunkworks/style';
import { createFactory } from '../../factory';
import { Input, InputProps } from '../Input';

export interface RadioProps {
  rootProps?: Partial<InputProps>;
}

export type RadioFactory = THUNKWORKS.Factory<{
  component: 'input';
  properties: RadioProps;
  reference: HTMLInputElement;
  classNames: THUNKWORKS.ClassNames['Radio'];
  variant: THUNKWORKS.Variants['Radio'];
}>;

const defaultProps: THUNKWORKS.DefaultProps<'Radio'> = {
  variant: 'default',
  classNames: {
    input: 'thwx-radio-input',
    indicator: 'thwx-radio-indicator',
  },
};

export const Radio = createFactory<RadioFactory>((props, ref) => {
  const { rootProps, variant = 'default', classNames, ...otherProps } = props;

  const { css } = useClassNames({ defaultProps, classNames });

  return (
    <Input {...rootProps}>
      <div className={css.indicator} />
      <input ref={ref} type="radio" className={css.input} {...otherProps} />
    </Input>
  );
});

Radio.displayName = '@thunkworks/core/Radio';
