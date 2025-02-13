export namespace Route {
  export interface ComponentProps {}

  export interface MetaFunction {
    (): Array<{ title: string } | { name: string; content: string }>;
  }
}
