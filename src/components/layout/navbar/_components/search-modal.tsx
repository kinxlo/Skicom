import { CircleX, Search } from "lucide-react"; // Importing the X icon
import React, { useState } from "react";

import { DialogDemo } from "~/components/common/Dialog";
import { DialogContent } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";

export const SearchDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Search Dialog"
        className="border-1 rounded-full border border-neutral-dark-2 p-2"
      >
        <Search size={20} />
      </button>

      <DialogDemo open={isOpen} onOpenChanged={handleOpenChange}>
        <DialogContent className="top-[4rem] sm:max-w-[1240px] xl:top-[10rem] xl:rounded-[49px]">
          <div className="flex items-center border-b border-gray-300">
            <div className="flex h-[79px] w-[79px] items-center justify-center">
              <Search size={28} />
            </div>
            <Input
              className="h-[79px] border-none text-[17px] outline-none focus:outline-none"
              placeholder="Search Plan"
            />
            {/* Close Icon */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Search Dialog"
              className="ml-auto flex h-[79px] w-[79px] items-center justify-center"
            >
              <CircleX size={28} />
            </button>
          </div>
        </DialogContent>
      </DialogDemo>
    </>
  );
};
