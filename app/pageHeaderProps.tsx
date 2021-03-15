export const AllCaskContainerPageHeaderProps = props => ({
  subNavigationProps: {
    link: '#',
    destination: ''
  },
  toolbarProps: {
    pageTitle: 'All Casks',
    addButtonProps: {
      variant: 'primary',
      onClickProps: props.createModalButton('+ Add a cask', props.createCaskModal(null, props.sort, props.searchFilters)) 
    },
    deleteButtonProps: {
      variant: 'secondary',
      disabled: !props.markedCasks.length,
      onClickProps: props.createModalButton('X Delete Marked Casks', props.deleteManyCasksModal(props.markedCasks, props.activeCask, null, props.sort))
    }
  }
})