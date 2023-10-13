export interface IMiddlewareDefinition {
  handler: (request: any, response: any) => any;
}
