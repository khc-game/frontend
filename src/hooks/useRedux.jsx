// libs
import { useDispatch, useSelector } from "react-redux";

export default function useRedux(sliceName) {
  const sliceData = useSelector((s) => s[sliceName]);

  const dispatch = useDispatch();

  return [sliceData, dispatch];
}
