import React from 'react';

export declare namespace THUNKWORKS {
  export type Extend<A = {}, B = {}> = B & Omit<A, keyof B>;

  export type Filter<K, P = {}> = P extends any ? (K extends keyof P ? Omit<P, K> : P) : P;

  export type NonUndefined<T> = { [K in keyof T]: T[K] extends undefined ? never : K }[keyof T];

  export type FilterUndefined<T> = Pick<T, NonUndefined<T>>;

  export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  export type Side = 'top' | 'bottom' | 'left' | 'right';

  export type Length = 'height' | 'width';

  export type Position = Side | `${Side}-${Placement}`;

  export type Placement = 'start' | 'center' | 'end';

  export type Orientation = 'horizontal' | 'vertical';
  
  export type SideObject<T = number> = { [Key in Side]: T };

  export type LengthObject<T = number> = { [Key in Length]: T };

  export type ClassValue = ClassArray | ClassObj | string | undefined;

  export type ClassArray = ClassValue[];

  export type ClassObj = Record<string, any>;
  
  export type ClassPayload<K> = { key: K; index: number; array: K[] };

  export type ClassMiddleware<K extends string> = (payload: ClassPayload<K>) => ClassValue;

  export type ClassMiddlewares<K extends string> = Partial<Record<K, ClassMiddleware<K>[]>>;

  export type ClassBuilderFunction = (...inputs: ClassValue[]) => string;

  export type ClassOptions = { prefix?: string; prefixer?: ClassPrefixer };

  export type ClassPrefixer = (value: string, options?: ClassPrefixerOptions) => string;

  export type ClassPrefixerOptions = { prefix?: string; separator?: string };

  export type ComponentTypeProps = Partial<{ [Key in keyof React.JSX.IntrinsicElements]: boolean }>;

  export type ComponentSearchProps = ComponentTypeProps & Partial<{ as: keyof React.JSX.IntrinsicElements; defaultAs: keyof React.JSX.IntrinsicElements }>;

  export function noop(): void;
 
  export function keys<T extends Record<string, any>>(obj: T): (keyof T)[];

  export function capitalizeString(str: string): string;
 
  export function camelToKebabCase(str: string): string;
 
  export function findComponent(props: ComponentSearchProps): React.ElementType;

  export function parseClassOptions(input?: Partial<ClassOptions>): ClassOptions;

  export function useClassMiddleware(options: { 
    prefixer?: ClassPrefixer; prefix?: string 
  }): {
    merge<K extends string>(current: Record<K, string>, payload?: Partial<Record<K, string>>, prefixer?: ClassPrefixer): Record<K, string>;
  };

  export function useClassNames<K extends string>(props: {
    classNames?: Partial<Record<K, string>>;
    defaultProps: { classNames: Record<K, string> }
  }): {
    css: Record<K, string> 
  };

  export type Payload = {
    reference: any;
    component: any;
    components?: Record<string, any> | undefined;
    properties?: Record<string, any> | undefined;
    classNames?: any | undefined;
    variant?: any | undefined;
    tokens?: any | undefined;
  };
  
  export type StyleProps<P extends Payload> = Partial<{
    classNames: Partial<Record<P['classNames'], string>>
    tokens: Partial<Record<P['tokens'], string>>
    variant: P['variant'];
  }>;

  export type AsProp<E> = Partial<{ as: E }>

  export type ComponentProps<E, P = {}> = E extends React.ElementType
    ? P & React.ComponentPropsWithoutRef<E> & Partial<{ as: E }>
    : P & Partial<{ as: React.ElementType }>;

  export type PolymorphicProps<E, P = {}> = E extends React.ElementType
    ? P & React.ComponentPropsWithoutRef<E> & Partial<{ as: E; ref: React.ComponentPropsWithRef<E>['ref'] }>
    : P & Partial<{ as: React.ElementType; }>;

  export type Components<T> = T extends Record<string, any> ? T : Record<string, never>;

  export type ComponentFactoryProps<P extends Payload> = ComponentProps<P['component'], P['properties'] & StyleProps<P>>;

  export type PolymorphicFactoryProps<E, P extends Payload> = PolymorphicProps<E, P['properties'] & StyleProps<P>>;

  export type NamedComponent = { displayName?: string | undefined };

  export type ComponentRender<P extends Payload> = NamedComponent & {
    (props: ComponentFactoryProps<P>, ref: React.ForwardedRef<P['reference']>): React.ReactNode;
  };

  export type Component<P extends Payload> = NamedComponent & {
    (props: ComponentFactoryProps<P>): React.ReactNode
  };

  export type PolymorphicRender<P extends Payload> = NamedComponent & {
    (props: PolymorphicFactoryProps<P['component'], P>, ref: React.ForwardedRef<P['reference']>): React.ReactNode;
  };

  export type PolymorphicComponent<P extends Payload> = NamedComponent & {
    <E = P['component']>(props: PolymorphicFactoryProps<E, P>): React.ReactNode;
  };

  export type Factory<P extends Payload> = P;
};