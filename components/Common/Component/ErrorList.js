import { errorActions } from "components/Common/store/error/error-slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ErrorList = () => {
  const { isError, errorList } = useSelector((state) => state.error);

  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(errorActions.resetErrors());
  }, []);

  useEffect(() => {
    setErrors([...errorList]);
  }, [isError]);

  return (
    <div className="text-red-600 text-left">
      <ul className={errors?.length > 1 ? "list-disc  ml-5" : ""}>
        {errors && errors.map((error, i) => <li key={i}>{error?.message}</li>)}
      </ul>
    </div>
  );
};
