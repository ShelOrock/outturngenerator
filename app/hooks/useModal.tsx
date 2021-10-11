import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../components/Organisms/Modal';

import { modalActions } from '../redux/actions';

const useModal = (modal) => {

  const [ open, setOpen ] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = (): void => {
    setOpen(!open);
  }

  // const RenderModal = ({ children }) => open && (
  //   <Modal>{ children }</Modal>
  // )

  const handleOnChange = e => {
    const { name, value } = e.target;
    dispatch(modalActions.setModal({
      open: modal.open,
      onChange: modal.onChange,
      heading: modal.heading,
      primaryAction: modal.primaryAction,
      secondaryAction: modal.secondaryAction,
      state: {
        ...modal.state,
        [name]: value
      }
    }))
  };

  return {
    handleOnChange,
  };

};

export default useModal;
