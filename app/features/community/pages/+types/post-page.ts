export namespace Route {
  export interface ComponentProps {
    params: {
      postId: string;
    };
  }

  export interface MetaArgs {
    params: {
      postId: string;
    };
  }

  export interface MetaFunction {
    (): Array<{ title: string } | { name: string; content: string }>;
  }
}
