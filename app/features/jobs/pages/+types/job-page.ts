export namespace Route {
  export interface ComponentProps {
    params: {
      jobId: string;
    };
  }

  export interface MetaArgs {
    params: {
      jobId: string;
    };
  }

  export interface MetaFunction {
    (): Array<{ title: string } | { name: string; content: string }>;
  }
}
