import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isLogin } from "../store/slices/authSlice";

export default function useLoginCheck() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(isLogin());
    },
    [dispatch]
  );
}
