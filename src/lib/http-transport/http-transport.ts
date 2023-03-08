import { BASE_URL } from 'src/app/app.constants';
import { HTTP_METHODS } from './http-transport.types';

interface REQUEST_OPTIONS {
  method?: HTTP_METHODS;
  headers?: Record<string, string>;
  data?: XMLHttpRequestBodyInit;
  isClearHeaders?: boolean;
}

interface METHOD_OPTIONS extends REQUEST_OPTIONS {
  timeout?: number;
}

function queryStringify(data: REQUEST_OPTIONS['data']) {
  if (!data || Object.keys(data).length === 0) return '';
  const res = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(data)) {
    res.push(`${key}=${value}`);
  }

  return `?${res.join('&')}`;
}

export default class HTTPTransport {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${BASE_URL}${endpoint}`;
  }

  get = (url: string, options?: METHOD_OPTIONS) =>
    this.request(
      this.endpoint + url,
      {
        ...options,
        method: HTTP_METHODS.GET,
      },
      options?.timeout,
    );

  put = (url: string, options?: METHOD_OPTIONS) =>
    this.request(
      this.endpoint + url,
      {
        ...options,
        method: HTTP_METHODS.PUT,
      },
      options?.timeout,
    );

  post = (url: string, options?: METHOD_OPTIONS) =>
    this.request(
      this.endpoint + url,
      {
        ...options,
        method: HTTP_METHODS.POST,
      },
      options?.timeout,
    );

  delete = (url: string, options: METHOD_OPTIONS) =>
    this.request(
      this.endpoint + url,
      {
        ...options,
        method: HTTP_METHODS.DELETE,
      },
      options.timeout,
    );

  request = (url: string, options: REQUEST_OPTIONS, timeout = 5000) => {
    const { method, data, headers = {}, isClearHeaders = false } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(
        method,
        method === HTTP_METHODS.GET && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      !isClearHeaders &&
        xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.withCredentials = true;

      if (method === HTTP_METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
