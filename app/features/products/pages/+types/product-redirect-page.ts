export namespace Route {
  export interface LoaderArgs {
    params: {
      productId: string;
    };
  }

  export interface LoaderData {
    productId: string;
  }

  export interface ComponentProps {
    loaderData: LoaderData;
  }

  export interface MetaArgs {
    params: {
      productId: string;
    };
  }
}
