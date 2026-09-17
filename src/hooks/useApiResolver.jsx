export default function useApiResolver(fetchAPI, handlers) {
  const fetch = async () => {
    const result = await fetchAPI();
    const status = result.status;

    if (handlers[status]) {
      handlers[status](result);
    } else {
      handlers?.default(result);
    }
  };

  return fetch;
}
