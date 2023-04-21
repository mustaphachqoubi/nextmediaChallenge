import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
export const Pagination = ({
  currentPage,
  candidatePerPage,
  totalCandidates,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCandidates / candidatePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-between items-center text-xs px-4 text-gray-400 ">
      <div
        onClick={previousPage}
        className="hidden md:flex gap-2 items-center font-bold cursor-pointer"
      >
        <GrLinkPrevious />
        Previous
      </div>
      <div className={`flex items-center w-full justify-center`}>
        {pageNumbers.map((number) => (
          <div
            onClick={() => paginate(number)}
            key={number}
            className={`cursor-pointer p-4 ${
              currentPage === number &&
              "text-[#6f47ea] border-t-2 border-[#6f47ea]"
            }`}
          >
            {number}
          </div>
        ))}
      </div>

      <div
        onClick={nextPage}
        className="hidden md:flex gap-2 items-center font-bold cursor-pointer"
      >
        Next
        <GrLinkNext />
      </div>
    </div>
  );
};
