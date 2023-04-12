'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer hover:bg-neutral-100 md:block">
          Airbnb your home
        </div>
        <div className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
