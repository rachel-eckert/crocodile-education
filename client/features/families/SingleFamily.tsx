import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useDispatch, useSelector } from "react-redux";
import { Family } from "../../interfaces";
import { fetchSingleFamily } from "./singleFamilySlice";
import { useParams } from "react-router-dom";
const SingleFamily = () => {
  const fam = useAppSelector((state) => state.family);
  console.log("fam" + fam + "why");
  const { familyId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSingleFamily(familyId!));
  }, [dispatch]);
  console.log("hey" + familyId);
  return (
    <div>
      <h1>{familyId}</h1>
    </div>
  );
};

export default SingleFamily;
