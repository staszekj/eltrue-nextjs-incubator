export const getQueryParams = (search?: string) => {
  const params = new URLSearchParams(search);
  if (!search) return '';
  params.append('q', search);
  return params;
};
