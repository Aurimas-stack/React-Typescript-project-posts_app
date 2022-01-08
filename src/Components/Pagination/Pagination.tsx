import { useState, useEffect } from "react";

import { getPaginationGroupArray } from "../utils/utils";

import { PostProvider } from "../types/types";

import { PostProps } from "../Post/Post";

import "./Pagination.css";

interface Props {
  pageLimit: number;
  dataLimit: number;
  data: PostProvider[];
  RenderComponent: React.FunctionComponent<PostProps>;
  handlePostSelect: (post:number) => void;
}

export const Pagination: React.FC<Props> = ({
  data,
  dataLimit,
  pageLimit,
  RenderComponent,
  handlePostSelect
}) => {
  let totalPageCount: number = Math.ceil(data.length / dataLimit);
  const [pages] = useState<number>(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    if (currentPage === totalPageCount) return;

    setCurrentPage((page) => page + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage === 1) return;

    setCurrentPage((page) => page - 1);
  };

  const handleArrowPress = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePreviousPage();
    }

    if (e.key === "ArrowRight") {
      handleNextPage();
    }
  };

  const handleChangePage = (e: React.BaseSyntheticEvent) => {
    const page: number = Number(e.target.textContent);
    setCurrentPage(page);
  };

  const getPaginatedData = (): PostProvider[] => {
    const startIndex: number = currentPage * dataLimit - dataLimit;
    const endIndex: number = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = (): number[] => {
    const paginationNumberArray = getPaginationGroupArray(currentPage, pageLimit);
    let index: number;

    if (paginationNumberArray.includes(totalPageCount)) {
      index = paginationNumberArray.indexOf(totalPageCount);
      paginationNumberArray.length = index + 1;
      return paginationNumberArray;
    }

    return paginationNumberArray;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleArrowPress);
    return function cleanup() {
      window.removeEventListener("keydown", handleArrowPress);
    };
  }, [handleArrowPress]);

  return (
      <div>
          <div>
      {/* show the posts, 10 posts at a time */}
      <div className="dataContainer">
        {getPaginatedData().map((data, index) => (
          <RenderComponent
            key={index}
            data={data}
            onPostSelect={handlePostSelect}
          />
        ))}
      </div>
      <div className="pagination">
        {/* previous button */}
        <button className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePreviousPage}>prev</button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            id={index.toString()}
            onClick={handleChangePage}
            className={`paginationItem ${
              currentPage === item ? "active" : "inactive"
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button className={`next ${currentPage === totalPageCount ? "disabled" : ""}`}
          onClick={handleNextPage}>next
          </button>
      </div>
    </div>
      </div>
  );
};
