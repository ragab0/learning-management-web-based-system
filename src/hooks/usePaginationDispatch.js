import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function usePaginationDispatch(thunkAction) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageSize = searchParams.get("pageSize") || 10;
  const requestedPage = searchParams.get("page") || 1;

  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(thunkAction({ page: requestedPage, pageSize }));
    },
    [dispatch]
  );

  return function (newRequestedPage) {
    setSearchParams({ page: newRequestedPage, pageSize });
    dispatch(thunkAction({ page: newRequestedPage, pageSize }));
  };
}
