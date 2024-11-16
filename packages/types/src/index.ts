import React from 'react';

type Node = React.ReactNode;
type Booleanish = boolean | "true" | "false";

type Axis = 'x' | 'y';
type Side = 'top' | 'bottom' | 'left' | 'right';
type Length = 'height' | 'width';

type Position = Side | `${Side}-${Placement}`;
type Placement = 'start' | 'center' | 'end';
type Orientation = 'horizontal' | 'vertical';

type SizeCompact = 'sm' | 'md' | 'lg';
type SizeStandard = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SizeExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Sides<T = number> = { [K in Side]: T };
type Coords<T = number> = { [K in Axis]: T };
type Dimension<T = number> = { [K in Length]: T };

type BaseRect = Coords & Dimension;
type ClientRect = BaseRect & Sides;

type ScrollOptions = { behavior?: ScrollBehavior };
type ScrollPosition = { [K in Axis]: number };
type ScrollToOptions = ScrollToPosition & ScrollOptions;
type ScrollToPosition = { left?: number; top?: number };

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;
type TitleOrder = `h${TitleLevel}`;

type CodeLanguage = 'bash' | 'html' | 'ts' | 'tsx' | 'js' | 'jsx' | 'json' | 'css' | 'scss';
type CodeLanguageProps = Partial<{ [K in CodeLanguage]: boolean }>

type Filter<K, P = {}> = P extends any ? (K extends keyof P ? Omit<P, K> : P) : P;
type Merge<T = {}, P = {}> = P & Omit<T, keyof P>;
type Extend<T = {}, P = {}> = T & Omit<P, keyof T>;

type TupleToUnion<T extends any[]> = T[number];  
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type NonUndefined<T> = { [K in keyof T]: T[K] extends undefined ? never : K }[keyof T];
type FilterUndefined<T> = Pick<T, NonUndefined<T>>;

type ViableRef<T> = React.Ref<T> | undefined;

type RefAttributes<T> = T extends React.ElementType
  ? React.RefAttributes<T>
  : never;

type ComponentPropsWithRef<T> = T extends React.ElementType
  ? React.ComponentPropsWithRef<T>
  : never;

type ComponentPropsWithoutRef<T> = T extends React.ElementType
  ? React.ComponentPropsWithoutRef<T>
  : never;

type ClassName<K = string> = Record<string, string>;
type ClassNames<T> = T extends any ? { classNames: T } : never;
type ClassValue = ClassValues | ClassName | string | null | undefined;
type ClassValues = ClassValue[];  

interface BasePayload {
  props?: Record<string, any>;
  exclude?: any;
  component: any;
  classNames?: Record<string, string>;
};

interface ForwardPayload extends BasePayload {
  components?: Record<string, any>;
  ref: any;
};

interface PolymorphPayload extends BasePayload {
  components?: Record<string, any>;
  ref: any;
};

interface FactoryPayloads extends BasePayload, ForwardPayload, PolymorphPayload {}

type ComponentProp<T> = { component: T };
type NamedComponent = { displayName: string }
type NamedComponents<T> = T extends Record<string, any> ? T : Record<string, never>;

type FactoryComponent<T> = T extends Record<string, any> 
  ? Partial<NamedComponent> & NamedComponents<T> 
  : Partial<NamedComponent>;

type BaseFactory<Payload extends BasePayload> = Payload;
type ForwardFactory<Payload extends ForwardPayload> = Payload;
type PolymorphFactory<Payload extends PolymorphPayload> = Payload;

type PropsPayload<T> = T extends any ? T : {};
type FactoryRenderProps<P extends FactoryPayloads> = PropsPayload<P['props']> & ClassNames<P['classNames']>;
type FactoryReturnProps<P extends FactoryPayloads> = PropsPayload<P['props']> & Partial<ClassNames<Partial<P['classNames']>>>;

type FactoryFilter<T> = T extends Record<string, string> ? T : {};

enum FACTORY {
  RENDER = 'RENDER',
  RETURN = 'RETURN',
}

type FactoryClassNames<T, F extends ("RENDER" | "RETURN")> = F extends "RETURN" 
  ? T extends any ? Partial<{ classNames: Partial<T> }> : {}
  : T extends any ? { classNames: T } : {};

type BaseRenderProps<Payload extends BasePayload> = Filter<
  Payload['exclude'], 
  React.ComponentPropsWithoutRef<Payload['component']>
  & FactoryClassNames<Payload['classNames'], "RENDER">
>;

type BaseReturnProps<Payload extends BasePayload> = Filter<
  Payload['exclude'] | 'component',
  React.ComponentPropsWithoutRef<Payload['component']>
  & FactoryClassNames<Payload['classNames'], "RETURN">
>;

type BaseRenderType<P extends BasePayload> = Partial<NamedComponent> & {
  (props: BaseRenderProps<P>): React.ReactNode;
}

type BaseReturnType<P extends BasePayload> = Partial<NamedComponent> & {
  (props: BaseReturnProps<P>): React.ReactNode;
}

type ForwardRenderProps<P extends ForwardPayload> = Filter<
  P['exclude'], React.ComponentPropsWithRef<P['component']> & FactoryRenderProps<P> & ComponentProp<P['component']>
>;

type ForwardReturnProps<P extends ForwardPayload> = Filter<
  P['exclude'] | 'component', React.ComponentPropsWithRef<P['component']> & FactoryReturnProps<P>
>;

type ForwardRenderType<P extends ForwardPayload> = Partial<NamedComponent> & {
  (props: ForwardRenderProps<P>, ref: React.ForwardedRef<P['ref']>): React.ReactNode;
}

type ForwardReturnType<P extends ForwardPayload> = FactoryComponent<P['components']> & {
  (props: ForwardReturnProps<P>): React.ReactNode;
}

type PolymorphRef<T> = T extends React.ElementType
  ? React.ComponentPropsWithRef<T>['ref']
  : never;

type PolymorphProps<T, P = {}, U = unknown> = T extends React.ElementType 
    ? Filter<U, P & React.ComponentPropsWithoutRef<T> & Partial<{ component: T; ref: React.ComponentPropsWithRef<T>['ref'] }>>
    : Filter<U, P & Partial<{ component?: React.ElementType; }>>;
    
type PolymorphRenderProps<Payload extends PolymorphPayload> = PolymorphProps<
  Payload['component'], 
  Payload['props'] & FactoryClassNames<Payload['classNames'], "RENDER">,
  Payload['exclude']
>;

type PolymorphReturnProps<T, Payload extends PolymorphPayload> = PolymorphProps<
  T,
  Payload['props'] & FactoryClassNames<Payload['classNames'], "RETURN">,
  Payload['exclude']
>;

type PolymorphRenderType<P extends PolymorphPayload> = Partial<NamedComponent> & {
  (props: PolymorphRenderProps<P>, ref: React.ForwardedRef<P['ref']>): React.ReactNode;
}

type PolymorphReturnType<P extends PolymorphPayload> = FactoryComponent<P['components']> & {
  <T = P['component']>(props: PolymorphReturnProps<T, P>): React.ReactElement;
}

interface LayoutProps {
  children?: React.ReactNode;
}

interface IntrinsicRefs {
  Text: HTMLParagraphElement;
  Title: HTMLHeadingElement;
  Group: HTMLDivElement;
  Button: HTMLButtonElement;
  ButtonGroup: HTMLDivElement;
  UnstyledButton: HTMLButtonElement;
}

interface IntrinsicElements {
  Text: 'p';
  Title: 'h2';
  Group: 'div';
  Button: 'button';
  ButtonGroup: 'div';
  UnstyledButton: 'button';
}

interface IntrinsicClassNames {
  Text: Record<'root', string>,
  Title: Record<'root', string>,
  Group: Record<'root', string>,
  Button: Record<'root' | 'label' | 'layout' | 'content', string>,
  ButtonGroup: Record<'root', string>,
  UnstyledButton: Record<'root', string>,
}

interface TextProps {}

interface TitleProps {}

interface GroupProps {
  gap?: SizeExpanded;
  orientation?: Orientation;
}

interface UnstyledButtonProps {
  loading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

interface ButtonProps extends UnstyledButtonProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

type ButtonContext = null | {};

interface ButtonGroupProps extends GroupProps {}