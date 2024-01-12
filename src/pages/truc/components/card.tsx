import React from 'react';

import Icon from '@/core-ui/icon';

interface ICard {
  imageSrc?: string;
  title: string;
  description: string;
  time: string;
}

function Card({imageSrc, title, time, description}: ICard) {
  return (
    <div className="flex items-start justify-center gap-2 rounded-xl bg-neutral-50 p-6 shadow">
      <div className="flex items-start justify-start gap-2.5 p-1">
        <div className="relative h-6 w-6">
          <input type="checkbox" className="rounded-full " />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-1">
        <div className="flex flex-col items-start justify-start gap-3">
          {imageSrc && <img className="h-36 w-72 rounded-lg" src={imageSrc} />}
          <div className="inline-flex items-center justify-start gap-3 self-stretch">
            <div className="flex items-center justify-start gap-1">
              <div className="text-gray-950  text-xl font-bold leading-normal">{title}</div>
              <div className="inline-flex flex-col items-start justify-center gap-1">
                <div className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-red-600 px-3 py-1">
                  <div className=" text-sm font-semibold leading-tight text-neutral-50">tag</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="text-gray-950 w-72  text-sm font-normal leading-tight">{description}</div>
            <div className="inline-flex items-center justify-center gap-2 rounded-lg py-1 pr-1">
              <div className=" text-sm font-normal leading-tight text-gray-500">{time}</div>
              <div className="relative h-6 w-6">
                <Icon name="" className="ico-calendar" size={24}></Icon>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-end justify-between self-stretch">
          <div className="flex items-center justify-center">
            <div className="mb-6">
              <div className="relative flex">
                <div className="absolute  h-[32px] w-[32px] shrink-0 rounded-full bg-blue-400"></div>
                <div className="absolute left-[16px]  h-[32px] w-[32px] shrink-0 rounded-full bg-neutral-600"></div>
                <div className="absolute left-[32px]  h-[32px] w-[32px] shrink-0 rounded-full bg-slate-700"></div>
                <div className="absolute left-[48px]  h-[32px] w-[32px] shrink-0 rounded-full bg-orange-200"></div>
                <div className=" absolute left-[64px] h-[32px] w-[32px] shrink-0 rounded-full bg-orange-600"></div>
                <div className=" absolute left-[80px] flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white">
                  <p className="absolute">+4</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg py-1 pr-1">
            <div className=" text-sm font-normal leading-tight text-gray-500">Comment</div>
            <div className="relative h-6 w-6">
              <Icon name="" className="ico-messages" size={24}></Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
