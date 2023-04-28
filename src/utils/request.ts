import { API_URL } from './constans'

export function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(API_URL + url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse)
}
