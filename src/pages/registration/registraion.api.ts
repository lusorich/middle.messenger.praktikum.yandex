import { BaseAPI } from 'src/utils/base-api';
import HTTPTransport from 'src/lib/http-transport/https-transport';
import { HTTP_METHODS } from 'src/lib/http-transport/https-transport.types';

const registrationAPIInstance = new HTTPTransport();
const REGISTRATION_API_PATH = 'https://ya-praktikum.tech/api/v2/auth/signup';

export class RegistrationAPI extends BaseAPI {
  request(data: Record<string, unknown>) {
    return registrationAPIInstance.post(REGISTRATION_API_PATH, {
      method: HTTP_METHODS.POST,
      data: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
