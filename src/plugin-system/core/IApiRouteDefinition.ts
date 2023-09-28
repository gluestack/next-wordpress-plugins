export interface IApiRouteDefinition {
  route: string;
  handler: (req: any, res: any) => {};
}
