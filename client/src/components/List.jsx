import React from "react";
import "boxicons";

import { default as api } from "../store/apiSlice";
import Backup from "./extra/Backup";

const List = () => {
  const { data, isFetching, isLoading, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();

  const handlerClick = (e) => {
    if(!e.target.dataset.id) return 0
    deleteTransaction(e.target.dataset.id)
  };

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {data?.map((v, i) => (
        <Transacton
          category={v}
          key={i}
          isFetching={isFetching}
          isLoading={isLoading}
          isError={isError}
          handler={handlerClick}
        />
      ))}
    </div>
  );
};

function Transacton({ category, isError, isFetching, isLoading, handler }) {
  if (!category) {
    return (
      <Backup isError={isError} isFetching={isFetching} isLoading={isLoading} />
    );
  }
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3" onClick={handler}>
        <box-icon
          data-id={category._id}
          name="trash"
          size="25px"
          color={category.color ?? "#e5e5e5"}
        ></box-icon>
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
}

export default List;
