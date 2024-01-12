/* eslint-disable @next/next/no-img-element */
import {Card} from '@mui/material';
import React, {FC, memo} from 'react';

interface IKanbanTaskNameProps {
  name: string;
}

const KanbanTaskName: FC<IKanbanTaskNameProps> = ({name}) => {
  return (
    <div className=" bg-blue-50">
      <div className="flex gap-2">
        <p className="font-semibold text-yellow-500">{name}</p>
        <p className=" bg-red-600 font-bold text-white                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ">
          tag
        </p>
      </div>

      <p className=" text-sm font-semibold">
        Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre{' '}
      </p>
      <div className="flex gap-2">
        <button>
          <p className=" text-sm text-black">17h30</p>
        </button>
        <img src="public/icons/input/calendar.svg" alt="" width={24} height={24} />
      </div>
      <Card />
    </div>
  );
};
export default memo(KanbanTaskName);
