import { useState } from "react";
import {
  Interview,
  Applied,
  PhoneScreen,
  Offer,
  Disqualified,
} from "./CandidatesComponents";

export const Candidates = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleSelectedId = (id) => {
    setSelectedId(id);
  };

  const List = [
    { id: 1, name: "Applied", notif: 2 },
    { id: 2, name: "Phone Screening", notif: 4 },
    { id: 3, name: "Interview", notif: 6 },
    { id: 4, name: "Offer", notif: 0 },
    { id: 5, name: "Disqualified", notif: 0 },
  ];

  return (
    <div className="p-10 flex flex-col gap-2">
      <h1 className="font-semibold">Candidates</h1>

      <div className="flex text-xs font-semibold text-gray-400 flex-wrap justify-center md:justify-start">
        {List.map((list) => (
          <div
            key={list.id}
            onClick={() => {
              handleSelectedId(list.id);
            }}
            className={`hover:bg-gray-100 border-b-2 items-center cursor-pointer flex gap-3 p-2 items-c-block ${
              list.id === selectedId
                ? "border-b-2 border-[#6f47ea] text-[#6f47ea]"
                : ""
            } `}
          >
            {list.name}

            {list.notif === 0 ? null : (
              <div
                className={`text-black font-normal ${
                  selectedId === list.id
                    ? "bg-[#6f47ea]/30 text-[#6f47ea]"
                    : "bg-slate-100"
                } py-1 px-2 rounded-full`}
              >
                {list.notif === 0 ? "" : list.notif}
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        {selectedId === 1 ? (
          <Applied />
        ) : selectedId === 2 ? (
          <PhoneScreen />
        ) : selectedId === 3 ? (
          <Interview />
        ) : selectedId === 4 ? (
          <Offer />
        ) : (
          <Disqualified />
        )}
      </div>
    </div>
  );
};
