interface ButtonProps {
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { leftContent, rightContent, children, ...otherProps } = props;
  return (
    <button {...otherProps}>
      {leftContent && <div>{leftContent}</div>}
      <div>{children}</div>
      {rightContent && <div>{rightContent}</div>}
    </button>
  );
}

Button.displayName = '@thunkworks/core/Button';
