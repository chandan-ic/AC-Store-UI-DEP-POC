import React, { useEffect } from "react";
import { useState } from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPageNo }) => {
  const pageNumbers = [];
  const [pageNo, setPageNo] = useState([...pageNumbers]);
  const [lastpage, setLastPage ] = useState(Math.ceil(totalCards / cardsPerPage));

useEffect(()=>{
  setLastPage(Math.ceil(totalCards / cardsPerPage));
  for (let i = 1; i <= lastpage; i++) {
    pageNumbers.push(i);
  }
  const pageNum = [...pageNumbers]
  setPageNo(pageNum);
},[totalCards,cardsPerPage])
  

  return (
    <div className="flex flex-row">

      {pageNo.length?<ul className=" flex flex-row items-end justify-center">
        <div className=" flex flex-row">
          {pageNo.map((number) => (
            <span key={number}  className={`flex flex-row items-center
             ${number <=  2 || number >= lastpage -1 || number === currentPageNo ||  number === currentPageNo +1 || number === currentPageNo -1 ?' ':'hidden '}
            ${number >  3  ?'next-dots':' '}
            ${number < lastpage -2 ?'prev-dots':' '}     
            `}>
              <li
                className={`${
                  number === currentPageNo
                    ? "bg-yellow-400 m-2 pt-0.5"
                    : "m-2 border-2 border-yellow-400"
                }
                w-7 h-7 text-center align-middle text-blue-800 rounded-full`}
              >
                <a onClick={() => paginate(number)} href="#">
                  {number}
                </a>
              </li>
            </span>
          ))}
        </div>
        
      </ul>:null
    }</div>
  );
};

export default Pagination;
