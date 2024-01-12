import { Button } from '@mui/material';
import React, { FC } from 'react';

import Icon from '@/core-ui/icon';
import useBoards from '@/states/board/use-boards';
import useModals from '@/states/modals/use-modals';

interface IColumnProps {
  children: React.ReactNode;
  title: string;
  symbol: string;
  className: string;
}

const Column: FC<IColumnProps> = ({ children, title, symbol, className }) => {
  const { boardData } = useBoards();
  const { setIsOpenModal, setSelectedTodolist, setSelectedColumnId } = useModals();

  const onAddTask = () => {
    setSelectedTodolist(boardData);
    setIsOpenModal('createTask');
    setSelectedColumnId(Number(Column));
  };

  return (
    <div className="inline-flex h-96 flex-col items-start justify-start gap-3 rounded-xl bg-gray-50 px-5 py-6 shadow">
      <div className={`${className} inline-flex items-start justify-start gap-1 self-stretch border-b-2  py-3`}>
        <div className="flex items-start justify-start gap-1">
          <div className="text-gray-950 text-xl font-bold leading-normal">{title}</div>
          <div className="text-sm font-normal leading-tight text-gray-500">{symbol}</div>
        </div>
      </div>
      {children}
      <div className="inline-flex w-40 items-center justify-center gap-2 rounded-lg px-3 py-4" onClick={onAddTask}>
        <div className="relative h-6 w-6">
          <Icon name="ico-plus" className="ico-plus" size={24}></Icon>
        </div>
        <Button className=" text-sm font-sans text-black" onClick={onAddTask}>Add task</Button>
      </div>
    </div>
  );
}

export default Column;
