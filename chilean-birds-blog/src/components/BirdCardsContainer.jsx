import React from "react";
import BirdsCard from "./BirdsCard";
import Pagination from "./Pagination.jsx";
import BirdModal from "./BirdModal.jsx";

import getBirds from "../api/productsApi.js";
import { useQuery } from "@tanstack/react-query";
import { useState, useContext, useMemo, useEffect } from "react";
import { ContentContext } from "./App";

const BirdCardsContainer = () => {
  const { content, setContent, idModal, contentModal, setContentModal } =
    useContext(ContentContext, (prev, next) => prev.content !== next.content);
  //isLoading e isError solo evaluan si paso o no, por lo tanto devuelven un boolean, error nos envia todo el error

  //queryKey conecta los datos de la peticion dentro de un objeto que designamos para almacenar en caché
  const [page, setPage] = useState(0);
  const { isLoading, data, isError, error, isSuccess, isPreviousData } =
    useQuery({
      queryKey: ["projects", page],
      queryFn: () => getBirds(page),
      keepPreviousData: true,
    });
  let birdModal = null;

  const handleModalData = async () => {
    let aux = await { ...data.birds[idModal] };
    console.log(contentModal);

    setContentModal(
      await (
        <BirdModal
          main={aux.img}
          full={aux.full}
          thumbnail={aux.thumbnail}
          spanish={aux.spanish}
          data={aux.data}
        />
      )
    );
  };

  const handleCards = async () => {
    setContent(
      await data?.birds?.map((b, index) => {
        return (
          <BirdsCard
            key={b._id}
            img={b.main}
            spanish={b.spanish}
            latin={b.latin}
            full={b.full}
            thumbnail={b.thumbnail}
            id={index}
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
      handleModalData;
    } else if (isError) <div className="text-5xl"> Error: {error.message}</div>;
  };

  window.addEventListener("load", displayData());

  return (
    <>
      <div className="md:max-2xl:ml-[11vw]">
        <h1 className="ml-5 my-3 text-teal-900 dark:text-slate-50">
          All of them
        </h1>
        <div className="grid grid-cols-2 md:max-3xl:grid-cols-4 place-items-center">
          {content}
        </div>
      </div>
      <Pagination
        pg={page}
        setPage={setPage}
        data={data}
        isPreviusData={isPreviousData}
      />
    </>
  );
};

export default BirdCardsContainer;
