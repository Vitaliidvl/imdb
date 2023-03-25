import Link from 'next/link';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdInfo } from 'react-icons/md';
import DarkModeSwitch from './DarkModeSwitch';
import MenuItem from './MenuItem';

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={MdInfo} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl  sm:inline hidden">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
