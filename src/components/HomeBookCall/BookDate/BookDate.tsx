import React from "react";
import TidyCal from "@/components/TidyCal";
import Box from "@mui/material/Box";

export const BookDate = () => {
  return (
    <Box>
      <div className="flex flex-col items-center justify-start flex-grow w-full px-[8%] mt-[92px]">
        <h3 className="font-medium text-2xl text-[#A5A5A5] md:text-dark leading-[29px] mb-5">
          Book a session
        </h3>
        <div className="w-full">
          <TidyCal />
        </div>
      </div>
    </Box>
  );
};
