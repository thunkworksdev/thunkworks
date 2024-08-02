export namespace Factory {
  export interface Payload {
    ref: any;
    comp: any;
    comps?: Record<string, any> | undefined;
    props?: Record<string, any> | undefined;
    omits?: any;
  }

  export type Prop<C> = { as?: C };

  export type ElementProps<
    ElementType extends React.ElementType,
    OmittedProps extends string = never,
  > = Omit<React.ComponentPropsWithoutRef<ElementType>, OmittedProps>;

  export type ComponentProps<T extends React.ElementType> =
    T extends React.JSXElementConstructor<infer P>
      ? P
      : T extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[T]
        : {};

  export type Extend<P = {}, O = {}> = O & Omit<P, keyof O>;

  export type Inherited<C extends React.ElementType, Props = {}> = Extend<ComponentProps<C>, Props>;

  export type Config<T extends Payload> = T;

  export type Attributes<T> = T extends React.ElementType ? React.RefAttributes<T> : never;

  export type Components<Input> = Input extends Record<string, any> ? Input : Record<string, never>;

  export type Props<T, K> = T extends React.ElementType
    ? K extends keyof React.ComponentPropsWithoutRef<T>
      ? Omit<React.ComponentPropsWithoutRef<T>, K>
      : React.ComponentPropsWithoutRef<T>
    : never;

  export type Filter<T extends React.ElementType, K = unknown, P = {}> = Props<T, K> & P;

  export type Render<TPayload extends Payload> = React.ForwardRefRenderFunction<
    TPayload['ref'],
    Filter<TPayload['comp'], TPayload['omits'], TPayload['props']> & {
      ref?: React.ComponentPropsWithRef<TPayload['comp']>['ref'];
    }
  >;

  export type Component<TPayload extends Payload> = React.ForwardRefExoticComponent<
    Filter<TPayload['comp'], TPayload['omits'], TPayload['props']> & {
      ref?: React.ComponentPropsWithRef<TPayload['comp']>['ref'];
    }
  >;

  export type PolymorphicRender<TPayload extends Payload> = React.ForwardRefRenderFunction<
    TPayload['ref'],
    Prop<TPayload['comp']> &
      Filter<TPayload['comp'], TPayload['omits'], TPayload['props']> & {
        ref?: React.ComponentPropsWithRef<TPayload['comp']>['ref'];
      }
  >;

  export type PolymorphicRef<C> = C extends React.ElementType
    ? React.ComponentPropsWithRef<C>['ref']
    : never;

  export type PolymorphicProps<C, Props = {}> = C extends React.ElementType
    ? Inherited<C, Props & Prop<C>> & {
        ref?: PolymorphicRef<C>;
      }
    : { as: any };
}
