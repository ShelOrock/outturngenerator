import { useState } from 'react';

import { InputOnChangeType } from '../types';

const useCheckbox = (list) => {

  const [ marked, setMarked ] = useState([]);

  const handleMarkCask: InputOnChangeType = e => {
    if(marked.includes(e.target.name)) {
      setMarked(marked.filter(item => item !== e.target.name))
    } else {
      setMarked([...marked, e.target.name]);
    }
  };

  const handleMarkAllCasks: InputOnChangeType = () => {
    if(marked.length === list.length) {
      setMarked([]);
    } else {
      setMarked([...list.map(item => item.id)])
    }
  };

  return {
    marked,
    handleMarkCask,
    handleMarkAllCasks
  };
};

export default useCheckbox;