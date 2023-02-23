import HTTPTransport from 'src/lib/http-transport/https-transport';

export abstract class BaseAPI {
  protected http: HTTPTransport;

  constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  create() {}

  abstract request(data?: Record<string, unknown>): any;

  update() {}

  delete() {}
}
