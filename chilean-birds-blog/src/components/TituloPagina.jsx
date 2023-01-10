import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext, useMemo } from "react";
import { ContentContext } from "./App";
import getBirds from "../api/productsApi.js";
import BirdsCard from "./BirdsCard";

const TituloPagina = () => {
  const { setContent } = useContext(
    ContentContext,
    (prev, next) => prev.content !== next.content
  );
  const { isLoading, data, isError, error, isSuccess, isPreviousData } =
    useQuery({
      queryKey: ["projects"],
      queryFn: () => getBirds(0),
      keepPreviousData: true,
    });

  const handleCards = async () => {
    setContent(
      await data?.birds?.map((b) => {
        return (
          <BirdsCard
            key={b._id}
            img={b.main}
            spanish={b.spanish}
            latin={b.latin}
            full={b.full}
            thumbnail={b.thumbnail}
            data={{ ...data }}
          />
        );
      })
    );
  };
  const handleRender = useMemo(() => handleCards(), [data]);

  const displayData = async () => {
    if (isLoading) <div className="text-5xl"> Loading</div>;
    else if (isSuccess) {
      handleRender;
    } else if (isError) <div className="text-5xl"> Error: {error.message}</div>;
  };
  window.addEventListener("load", displayData());

  return (
    <h1
      onClick={(e) => displayData(e)}
      className="text-green-50 py-2 ml-10 text-3xl cursor-pointer"
    >
      Chilean Birds
    </h1>
  );
};

export default TituloPagina;
