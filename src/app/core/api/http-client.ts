import { _HttpClient } from '@delon/theme';
import { _HttpHeaders, HttpObserve } from '@delon/theme/src/services/http/http.client';

let client: _HttpClient | null = null;

/**
 * Set the HttpClient instance
 * @param _httpClient The HttpClient instance
 */
export function setHttpClient(_httpClient: _HttpClient): void {
  client = _httpClient;
}

/**
 * Get the HttpClient instance
 */
export function httpClient(): _HttpClient {
  if (client === null) {
    throw new Error('HTTP CLIENT IS NULL');
  }

  return client;
}

/**
 * The extra request options
 */
export interface IRequestOptions {
  headers?: _HttpHeaders;
  observe?: HttpObserve;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  reportProgress?: boolean;
  withCredentials?: boolean;
}
