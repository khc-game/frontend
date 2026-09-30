export default function useApiResolver(fetchAPI, fetchArgs, handlers) {
  const fetch = async () => {
    const result = await fetchAPI(...fetchArgs);
    const status = result.status;

    if (handlers[status]) {
      handlers[status](result);
    } else {
      handlers?.default(result);
    }
  };

  return fetch;
}
