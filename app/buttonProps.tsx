import * as actions from './redux/actions';
const { modalActions: { setModal } } = actions;

export const createButton = (onClickFunction, text, ...args) => ({
  text,
  arguments: [ ...args ],
  onClickFunction
});

export const createModalButton = (text, ...args) => ({
  text,
  arguments: [ ...args ],
  onClickFunction: setModal
})