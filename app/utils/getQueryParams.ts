export const getQueryParams = (search?: string) => {
  const params = new URLSearchParams();
  if (!search) return '';
  params.append('q', search);
  return params;
};
