import { toast } from "react-toastify";
import myAxios from "./myAxios";

export function basicThinker(method, path) {
  // data is either query stirng || object contains id of an items;
  return async (data, { rejectWithValue }) => {
    try {
      const res = await myAxios[method](
        data && data.id ? `${path}/${data.id}` : data ? `${path}?${data}` : path
      );
      return res.data || {};
    } catch (axiosError) {
      return rejectWithValue(axiosError.response.data);
    }
  };
}

export function toastedThinker(method, path, actionName = "Processing") {
  actionName = actionName[0].toLocaleUpperCase() + actionName.slice(1);
  return async (data, { rejectWithValue }) => {
    try {
      const res = await toast.promise(myAxios[method](path, data), {
        pending: `${actionName}...`,
        success: `${actionName} done! 🎉`,
        error: {
          render(props) {
            console.log("DDD", props);
            return props.data.response.data?.result || "An error occur!";
          },
        },
      });
      return res.data;
    } catch (error) {
      console.log("##################", error);
      return rejectWithValue(error.response.data);
    }
  };
}
