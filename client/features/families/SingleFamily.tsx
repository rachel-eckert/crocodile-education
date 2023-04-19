import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useDispatch, useSelector } from "react-redux";
import { Family } from "../../interfaces";
import { fetchSingleFamily } from "./singleFamilySlice";
import { useParams } from "react-router-dom";

const SingleFamily = () => {
  const fam = useAppSelector((state) => state.family);

  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSingleFamily(id!));
  }, [dispatch]);
  console.log(fam.name);
  return (
    <div>
      <h1>{id}</h1>
      <h2>{fam.name}</h2>
    </div>
  );
};

export default SingleFamily;
