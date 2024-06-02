import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParam = (param: string) => {
    return searchParams.get(param);
  };

  const setQueryParam = (param: string, value: string) => {
    searchParams.set(param, value);
    setSearchParams(searchParams);
  };

  return {
    getQueryParam,
    setQueryParam,
  };
};

export default useQueryParams;
