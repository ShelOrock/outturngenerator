import { useState, useEffect } from "react";
import { arrayMove } from "@dnd-kit/sortable";

const useReorderList = (initialList = []) => {

  const [ listOrder, setListOrder ] = useState(initialList);
  const [ isListReordered, setIsListReordered ] = useState(false);

  useEffect(() => {
    console.log(initialList)
    setListOrder(initialList);
  }, [ JSON.stringify(initialList) ]);

  const handleOnDragEnd = ({ active, over }) => {
    if(!active || !over) {
      return;
    };

    if(active.id !== over.id) {
      setListOrder(prev => {
        const activeId = prev.findIndex(item => item.id === active.id);
        const overId = prev.findIndex(item => item.id === over.id);

        return arrayMove(prev, activeId, overId);
      });

      setIsListReordered(true);
    };
  };

  return {
    listOrder,
    setListOrder,
    isListReordered,
    setIsListReordered,
    handleOnDragEnd
  };
};

export default useReorderList;
