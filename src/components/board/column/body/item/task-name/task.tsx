import Image from "next/image";
import React, { FC } from "react";

import mail from "@/assets/images/mail.svg"

interface CardProps {
  title: string;
  text: string;
  time: string;
  commentText: string;
  showTag?: boolean;
  tag?: string;
}

const Card: FC<CardProps> = ({
  title,
  text,
  time,
  commentText,
  showTag = false,
  tag,
}) => {
  return (
    <div className="w-[406px] p-6 bg-neutral-50 rounded-xl shadow justify-center items-start gap-1 inline-flex">
      <div className="p-1 justify-start items-start gap-2.5 flex">
        <div className="justify-start items-center gap-[5px] flex">
          <div className="text-gray-950 text-xl font-bold leading-normal">
            {title}
          </div>
          {showTag && (
            <div className="px-3 py-1 bg-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-neutral-50 text-sm font-semibold leading-tight">
                {tag}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-1 flex">
        <div className="w-[299px] text-gray-950 text-sm font-normal leading-tight">
          {text}
        </div>
        <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-gray-500 text-sm font-normal leading-tight">
            {time}
          </div>
          <div className="w-6 h-6 relative" />
        </div>
      </div>
      <div className="self-stretch justify-between items-end inline-flex">
        <div className="justify-center items-center flex">
          <div className="flex items-center justify-between self-stretch">
            <div className="mb-6">
              <div className="relative flex">
                <div className="absolute z-10 h-[32px] w-[32px] shrink-0 rounded-full bg-white"></div>
                <div className="absolute left-[16px] z-20 h-[32px] w-[32px] shrink-0 rounded-full bg-neutral-600"></div>
                <div className="absolute left-[32px] z-30 h-[32px] w-[32px] shrink-0 rounded-full bg-slate-700"></div>
                <div className="absolute left-[48px] z-40 h-[32px] w-[32px] shrink-0 rounded-full bg-orange-200"></div>
                <div className="absolute left-[64px] z-50 h-[32px] w-[32px] shrink-0 rounded-full bg-orange-600"></div>
                <div className="absolute left-[80px] z-[60] flex h-[32px] w-[32px] shrink-0 items-center rounded-full bg-gray-300">
                  <p className="absolute bg-center">+4</p>
                </div>
              </div>

              <div className="text-sm text-gray-500 left-9">
                {commentText}
                <button className="comment">
                  <Image src={mail} alt="comment" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
