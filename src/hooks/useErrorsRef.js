import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
//-----------------------|| ELEMENT REFERENCE HOOKS  ||-----------------------//

const useErrorsRef = () => {
  const { message } = useSelector((state) => state.message);
  const serverErrors = useRef({});
  serverErrors.current = message;
  useEffect(
    () => () => {
      serverErrors.current = false;
    },
    [],
  );
  return serverErrors;
};

export default useErrorsRef;
