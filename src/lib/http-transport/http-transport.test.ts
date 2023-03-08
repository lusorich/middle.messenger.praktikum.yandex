/**
 * @jest-environment jsdom
 */

import HTTPTransport from './http-transport';
import { newMockXhr } from 'mock-xmlhttprequest';
import { HTTP_METHODS } from './http-transport.types';
import { BASE_URL } from 'src/app/app.constants';

const TEST_ENDPOINT = '/test';

describe('Тестируем http transport', () => {
  const getHttpTransportInstance = (endpoint: string) => {
    return new HTTPTransport(endpoint);
  };

  it('Вызов метода get также вызывает request', () => {
    const http = getHttpTransportInstance(TEST_ENDPOINT);
    const spy = jest.spyOn(http, 'request');
    const mockXhr = newMockXhr();

    global.XMLHttpRequest = mockXhr;

    try {
      http.get('/1');

      expect(spy).toBeCalled();
    } finally {
      // @ts-ignore
      delete global.XMLHttpRequest;
      spy.mockReset();
      spy.mockRestore();
    }
  });

  it('В метод get корректно передается url и параметр timeout', () => {
    const http = getHttpTransportInstance(TEST_ENDPOINT);
    const mockXhr = newMockXhr();
    const spy = jest.spyOn(http, 'get');

    const testParams = {
      timeout: 1000,
    };

    global.XMLHttpRequest = mockXhr;

    try {
      http.get('/1', testParams);

      expect(spy).toHaveBeenCalledWith('/1', testParams);
    } finally {
      // @ts-ignore
      delete global.XMLHttpRequest;
      spy.mockReset();
      spy.mockRestore();
    }
  });

  it('По-умолчанию из метода get в request передается endpoint, опции с методом GET и undefined в качестве timeout', () => {
    const http = getHttpTransportInstance(TEST_ENDPOINT);
    const mockXhr = newMockXhr();
    const spy = jest.spyOn(http, 'request');

    global.XMLHttpRequest = mockXhr;

    try {
      http.get('/1');

      expect(spy).toHaveBeenCalledWith(
        `${BASE_URL}${TEST_ENDPOINT}/1`,
        {
          method: HTTP_METHODS.GET,
        },
        undefined,
      );
    } finally {
      // @ts-ignore
      delete global.XMLHttpRequest;
      spy.mockReset();
      spy.mockRestore();
    }
  });

  it('Если передать пустой метод в опциях, вызовется reject с ошибкой "No method"', () => {
    const http = getHttpTransportInstance(TEST_ENDPOINT);
    const mockXhr = newMockXhr();

    global.XMLHttpRequest = mockXhr;

    const testParams = {
      method: undefined,
    };

    try {
      expect(http.get('/1', testParams)).rejects.toEqual({
        error: 'No method',
      });
    } finally {
      // @ts-ignore
      delete global.XMLHttpRequest;
    }
  });
});
