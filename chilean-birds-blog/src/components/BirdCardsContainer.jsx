import React from "react";
import BirdsCard from "./BirdsCard";
import getBirds from "../api/productsApi.js";
import { useQuery } from "@tanstack/react-query";

const BirdCardsContainer = () => {
  //isLoading e isError solo evaluan si paso o no, por lo tanto devuelven un boolean, error nos envia todo el error
  //queryKey conecta los datos de la peticion dentro de un objeto que designamos para almacenar en caché
  const { isLoading, data, isError, error, isSuccess } = useQuery({
    queryKey: ["projects"],
    queryFn: getBirds,
  });

  let content = [];
  if (isLoading) return <div className="text-5xl"> Loading</div>;
  else if (isSuccess) {
     data.forEach((b) => {
      content.push(
        <BirdsCard
          key={b._id+1}
          img={b.main}
          spanish={b.spanish}
          latin={b.latin}
        />
      );
    });
  } else if (isError)
    return <div className="text-5xl"> Error: {error.message}</div>;

  return (
    <div className="md:max-2xl:ml-[11vw]">
      <h1 className="ml-5 my-3 text-teal-900 dark:text-slate-50">
        All of them
      </h1>
      <div className="grid grid-cols-2 md:max-2xl:grid-cols-4 place-items-center">
        {content}
      </div>
    </div>
  );
};

export default BirdCardsContainer;
