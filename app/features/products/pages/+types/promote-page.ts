import type { Route as BaseRoute } from "~/types/routes";

export namespace Route {
  export type LoaderArgs = BaseRoute.LoaderArgs;
  export type ActionArgs = BaseRoute.ActionArgs;
  export type ComponentProps = BaseRoute.ComponentProps;
  export type MetaFunction = BaseRoute.MetaFunction;
}
