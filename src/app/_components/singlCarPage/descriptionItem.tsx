import React from "react";
interface IDescriptionItem {
  title: string;
  value: string | null;
  sign?: string;
}
function DescriptionItem({ title, value, sign }: IDescriptionItem) {
  return (
    <div className="w-full h-8 flex justify-between  border-b border-b-gray-300">
      <span className="w-1/2 h-full flex justify-start items-center text-gray-500 text-lg">{title}</span>
      <span className="w-1/2 h-full flex justify-end items-center text-txtBaseColor text-xl font-medium ">
        {value + " "} {sign ? sign : ""}
      </span>
    </div>
  );
}

export default DescriptionItem;
