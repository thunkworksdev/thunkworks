type Filter<K, P = {}> = P extends any ? (K extends keyof P ? Omit<P, K> : P) : P;

type PropsWithRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>
type PropsWithoutRef<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>

type ClassValue = ClassValues | ClassName | string | null | undefined;
type ClassValues = ClassValue[];
type ClassName<K = string> = Record<string, string>;
type ClassNames<T> = T extends Record<string, string> ? { classNames: T } : never;

type NamedComponent = { displayName?: string }
type NamedComponents<T> = T extends Record<string, any> ? T : Record<string, never>;

type FactoryComponent<T> = T extends Record<string, any> 
  ? Partial<NamedComponent> & NamedComponents<T> 
  : Partial<NamedComponent>;

type FactoryPayload = {
  element: any;
  reference: any;
  elements?: Record<string, any>;
  excluded?: any;
  props?: Record<string, any>;
};

type FactoryClassNames<S = "RETURN", T> = S extends "RETURN" 
  ? Partial<ClassNames<Partial<T>>>
  : ClassNames<T>

type PolymorphicRef<T> = T extends React.ElementType
  ? React.ComponentPropsWithRef<T>['ref']
  : never;

type PolymorphicRefProps<T> = T extends React.ElementType
  ? Partial<{ component: T; ref: PolymorphicRef<T> }> & React.RefAttributes<T>
  : Partial<{ component: React.ElementType }>;

type PolymorphicProps<T, P = {}> = T extends React.ElementType
  ? P & React.ComponentPropsWithoutRef<T> & PolymorphicRefProps<T>
  : P & React.ComponentPropsWithRef<T> & PolymorphicRefProps<T>

// Insert ClassNames as `P & FactoryClassNames<Payload['classNames']>` here.
type PolymorphicPayloadProps<T, Payload extends FactoryPayload> = Filter<Payload['excluded'],
  PolymorphicProps<Payload['element'], Payload['props']>
>;

type ElementType = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

interface Element<T extends ElementType, P = {}> extends NamedComponent {
  <E = T>(props: PropsWithRef<E>, ref: React.ForwardedRef<T>): React.Node;
}

interface ReturnFunction<P = {}> {
  (props: P): React.ReactElement
}

interface PolymorphicRender<Payload extends FactoryPayload> {
  (props: PolymorphicProps<Payload['element'], Payload>, ref: React.ForwardedRef<Payload['reference']>): React.ReactNode;
}

interface PolymorphicReturn<Payload extends FactoryPayload> {
  <T = Payload['element']>(props: PolymorphicProps<T, Payload>): React.Element;
}



