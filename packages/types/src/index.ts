import React from 'react';

export declare namespace THUNKWORKS {
  export type Extend<A = {}, B = {}> = B & Omit<A, keyof B>;

  export type Filter<K, P = {}> = P extends any ? (K extends keyof P ? Omit<P, K> : P) : P;

  export type NonUndefined<T> = { [K in keyof T]: T[K] extends undefined ? never : K }[keyof T];

  export type FilterUndefined<T> = Pick<T, NonUndefined<T>>;

  export type Axis = 'x' | 'y';

  export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  export type Side = 'top' | 'bottom' | 'left' | 'right';

  export type Length = 'height' | 'width';

  export type Position = Side | `${Side}-${Placement}`;

  export type Placement = 'start' | 'center' | 'end';

  export type Orientation = 'horizontal' | 'vertical';

  export type Sides<T = number> = { [K in Side]: T };

  export type Coords<T = number> = { [K in Axis]: T };

  export type Dimension<T = number> = { [K in Length]: T };

  export type BaseRect = Coords & Dimension;

  export type ClientRect = BaseRect & Sides;

  export type ElementProps = Partial<{ [K in keyof React.JSX.IntrinsicElements]: boolean }>;

  export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  export type TitleElementProps = Partial<{ [K in TitleElement]: boolean }>;

  export type ViableRef<T> = React.Ref<T> | undefined;

  export type ScrollOptions = { behavior?: ScrollBehavior };

  export type ScrollPosition = { [K in Axis]: number };

  export type ScrollToOptions = ScrollToPosition & ScrollOptions;

  export type ScrollToPosition = { left?: number; top?: number };

  export type CodeLanguage = 'bash' | 'html' | 'ts' | 'tsx' | 'js' | 'jsx' | 'json' | 'css' | 'scss';

  export type CodeLanguageProps = Partial<{ [K in CodeLanguage]: boolean }>

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

  export type ContentLeftProps = Partial<{ leftContent: React.ReactNode }>;

  export type ContentRightProps = Partial<{ rightContent: React.ReactNode }>;

  export type ContentProps = ContentLeftProps & ContentRightProps;

  export type NameField = 'middle' | 'first' | 'last';

  export type Name = { [K in NameField]: string };

  export type City = { name: string; code: string };

  export type State = { name: string; code: string };
  
  export type Location = { city: City; state: State };
  
  export type ID = { id: string };

  export type CSS = React.CSSProperties;

  export type Item = { value: string | number; label?: string; disabled?: boolean };

  export type ItemParsed = { value: string; label: string; disabled?: boolean  };

  export type ItemGroup = { group: string; items: (string | Item | ItemGroup)[]; };

  export type ItemGroupParsed = { group: string; items: (ItemParsed | ItemGroupParsed)[] };

  export type LinkItem = ID & { value: string | number; label?: string; }

  export type LinkItemParsed = ID & { value: string; label?: string; }

  export type LinkGroup = { group: ID & { label?: string }; items: (string | LinkItem)[] };

  export type LinkGroupParsed = { group: ID & { label?: string }; items: LinkItemParsed[] };

  export type InlineMediaQuery = { style: CSS; query: string };

  export type InlineStyle = { media?: InlineMediaQuery[]; styles?: CSS; selector: string };

  export function noop(): void;
 
  export function keys<T extends Record<string, any>>(obj: T): (keyof T)[];

  export function isNode(value: unknown): value is Node;

  export function isElement(value: unknown): value is Element;

  export function isHTMLElement(value: unknown): value is HTMLElement;

  export function isReactElement(value: any): value is React.ReactElement;

  export function isEmptyObject(obj: object): boolean;

  export function getWindow(node: any): typeof window;

  export function getComputedStyle(element: Element): CSSStyleDeclaration

  export function camelToKebabCase(str: string): string;
  
  export function capitalizeString(str: string): string;
 
  export function findComponent(props: ElementProps, fallback: keyof React.JSX.IntrinsicElements): React.ElementType;

  export function parseCssToString(css: React.CSSProperties): string;

  export function parseStylesToString(input: StyleInput): string;

  export function createEventCallback<T extends HTMLElement, E extends React.SyntheticEvent<T, Event>>(
    handler: (event: E) => void,
    callback: (event: E) => void,
    options?: Partial<{ preventDefault: boolean; stopPropagation: boolean }>
  ): (event: E) => void

  export type UseClassMiddlewareProps = { 
    prefixer?: ClassPrefixer; 
    prefix?: string;
  };

  export type UseClassMiddlewareReturn = {
    merge<K extends string>(current: Record<K, string>, payload?: Partial<Record<K, string>>, prefixer?: ClassPrefixer): Record<K, string>;
  };

  export function useClassMiddleware(props: UseClassMiddlewareProps): UseClassMiddlewareReturn;

  export type UseClassNamesProps<K extends string> = {
    classNames?: Partial<Record<K, string>>;
    defaultProps: { classNames: Record<K, string> }
  };

  export type UseClassNamesReturn<K extends string> = {
    css: Record<K, string>
  };

  export function useClassNames<K extends string>(props: UseClassNamesProps<K>): UseClassNamesReturn<K>;

  export type Payload = {
    reference: any;
    component: any;
    components?: Record<string, any> | undefined;
    properties?: Record<string, any> | undefined;
    classNames?: any | undefined;
    variant?: any | undefined;
  };
  
  export type StyleProps<P extends Payload> = Partial<{
    classNames: Partial<Record<P['classNames'], string>>
    variant: P['variant'];
  }>;

  export type Variants = {
    Button: 'default';
    ButtonGroup: 'default';
    Checkbox: 'default';
    CheckboxGroup: 'default';
    Group: 'default';
    Input: 'default';
    Label: 'default';
    Radio: 'default';
    RadioGroup: 'default';
    Switch: 'default';
    SwitchGroup: 'default';
    Text: 'default';
    Title: 'default';
    UnstyledButton: 'default';
  }

  export type ClassNames = {
    Button: 'root' | 'label' | 'layout' | 'content';
    ButtonGroup: 'root';
    Checkbox: 'input' | 'indicator';
    CheckboxGroup: 'root';
    Group: 'root';
    Input: 'root' | 'label' | 'message' | 'content';
    Label: 'root';
    Radio: 'input' | 'indicator';
    RadioGroup: 'root';
    Switch:  'input' | 'indicator';
    SwitchGroup: 'root';
    Text: 'root';
    Title: 'root';
    UnstyledButton: 'root';
  }

  export type ColorLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  export type ColorShade = `${ColorLevel}00` | `${ColorLevel}50`;

  export type Count_03 = 1 | 2 | 3;
  export type Count_06 = Count_03 | 4 | 5 | 6;
  export type Count_09 = Count_06 | 7 | 8 | 9;
  export type Count_12 = Count_09 | 10 | 11 | 12;
  
  export type Theme = {
    tokens: {
      spacing: Record<Count_12, any>;
      fontSize: Record<Count_12, any>;
    };
    colors: {
      neutral: Record<ColorShade, string>;
      red: Record<ColorShade, string>;
      orange: Record<ColorShade, string>;
      yellow: Record<ColorShade, string>;
      green: Record<ColorShade, string>;
      teal: Record<ColorShade, string>;
      mint: Record<ColorShade, string>;
      cyan: Record<ColorShade, string>;
      blue: Record<ColorShade, string>;
      indigo: Record<ColorShade, string>;
      purple: Record<ColorShade, string>;
      pink: Record<ColorShade, string>;
      brown: Record<ColorShade, string>;
    }
  }

  export type StyleMediaQuery = {
    query: string;
    styles: React.CSSProperties;
  };

  export type StyleInput = {
    selector: string;
    styles?: React.CSSProperties;
    media?: StyleMediaQuery[];
    container?: StyleMediaQuery[];
  };

  export type DefaultProps<K extends keyof ClassNames> = {
    classNames: Record<ClassNames[K], string>
    variant: Variants[K];
  } 

  export type AsProp<E> = Partial<{ as: E }>

  export type ComponentProps<E, P = {}> = E extends React.ElementType
    ? P & React.ComponentPropsWithoutRef<E>
    : P;

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