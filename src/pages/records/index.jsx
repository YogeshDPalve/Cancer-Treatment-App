import { IconCirclePlus } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import RecordCard from "./components/record-card";

const Index = () => {
  return (
    <div className="flex flex-wrap gap-[26px]">
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-neutral-700 bg-[#13131a] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
        // onClick={handleOpenModal}
        onClick={() => {}}
      >
        <IconCirclePlus />
        Create Record
      </button>

      
      <div className="grid  w-full sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        <RecordCard
        
        />
      </div>
    </div>
  );
};

export default Index;
