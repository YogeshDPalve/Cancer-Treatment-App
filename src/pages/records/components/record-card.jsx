import React from "react";

const RecordCard = ({ record, onNavigate }) => {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-800 bg-[#13131a] shadow-sm">
      <div className="flex justify-between gap-x-3 p-4 md:p-5">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-blue-200">
          <IconFolder size={70} className="text-gray-500" />
        </div>
          </div>
          <a onClick={() => onNavigate(record.recordName)}
          className=" inline-flex cursor-pointer items-center justify-between rounder-b-xl border-t   px-4 py-3 text-sm text-gray-600 md:px-5 border-neutral-400 hover:bg-neutral-800">
              {record.recordName}
          </a>
    </div>
  );
};

export default RecordCard;
