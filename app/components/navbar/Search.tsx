'use client';

import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="w-full cursor-pointer rounded-full border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold">Anywhere</div>
        <div className="hidden flex-1 items-center border-x-[1px] px-6 text-sm font-semibold sm:block">
          Any Week
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm font-semibold text-gray-600">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 text-white rounded-full bg-rose-500">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
