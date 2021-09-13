//Dependency Libraries
import * as React from "react";
const { useEffect, useState } = React;
import { useDispatch } from "react-redux";
//Dependency Functions
import { useTypedSelector, createButton } from "../../utils";

//Components
import PageHeaderManager from "../Header/PageHeaderManager";
import AllCasksSearchFilterSort from './AllCasksSearchFilterSort';
import ActiveCaskContainer from "../OutturnCasks/ActiveCaskContainer";
import AssociatedOutturn from "./AssociatedOutturn";

//StyledComponents
import * as StyledComponents from "../styledcomponents";
const {StyledDiv: { Column, Row } } = StyledComponents;

//Redux actions
import * as actions from "../../redux/actions";
const {
  activeOutturnActions: { resetActiveOutturn },
  activeCaskActions: { resetActiveCask },
  markCaskActions: { resetMarkedCasks },
  filterActions: { resetFilters },
  searchActions: { setSearch, resetSearch },
  modalActions: { setModal },
} = actions;

//Redux thunks
import * as thunks from "../../redux/thunks";
const {
  allCasksThunks: {
    getCasks,
    addNewCask,
    deleteManyCasks
  },
} = thunks;

//Types
import {
  Modal,
  PageHeaderPropTypes,
  ButtonProps,
  CreateCaskModalState,
} from "../../types";
import AllCasksList from "./AllCasksList";

export default () => {

  const dispatch = useDispatch();

  const [ sort, setSort ] = useState("ascending");
  const {
    activeOutturn,
    allCasks,
    activeCask,
    activeUser,
    markedCasks,
    filters,
  } = useTypedSelector((state) => state);

  useEffect(() => {
    dispatch(resetActiveCask());
    dispatch(resetActiveOutturn());
    dispatch(resetMarkedCasks());
    dispatch(resetFilters());
    dispatch(resetSearch());
  }, []);
  useEffect(() => {
    dispatch(getCasks(sort, filters));
  }, [sort, filters]);
  useEffect(() => {
    dispatch(setSearch(allCasks))
  }, [allCasks])

  const evaluateUserType = activeUser.userType =='Admin' || activeUser.userType == 'Standard';

  const createCaskModal: Modal<CreateCaskModalState> = {
    modalHeader: `Creating a new cask`,
    modalState: {
      name: '',
      caskNumber: '',
    },
    confirmButton: {
      text: 'Create cask',
      arguments: [
        activeOutturn.id,
        [],
        sort,
        filters
      ],
      onClick: addNewCask,
    },
  };

  const deleteManyCasksModal: Modal = {
    modalHeader: 'Are you sure you want to delete these casks?',
    confirmButton: {
      text: 'Delete Casks',
      arguments: [
        markedCasks,
        activeCask.id,
        null
      ],
      onClick: deleteManyCasks,
    }
  }

  const addButtonProps: ButtonProps = evaluateUserType
  && {
      variant: "primary",
      onClick: createButton(
        setModal,
        "+ Add a cask",
        createCaskModal
      )
  }

  const deleteButtonProps: ButtonProps = evaluateUserType
  && {
      variant: "secondary",
      disabled: !markedCasks.length,
      onClick: createButton(
        setModal,
        "X Delete Marked Casks",
        deleteManyCasksModal
      )
  };

  const pageHeaderProps: PageHeaderPropTypes = {
    subNavigationProps: {
      link: "/",
      destination: "< Back",
    },
    toolbarProps: {
      pageTitle: "All Casks",
      addButtonProps,
      deleteButtonProps,
    },
  };

  interface SortPropTypes {
    sort: string;
    setSort: React.Dispatch<React.SetStateAction<string>>;
  }

  const sortProps: SortPropTypes = {
    sort,
    setSort,
  }

  return (
    <Column>
      <PageHeaderManager { ...pageHeaderProps } />
      <AllCasksSearchFilterSort { ...sortProps } />
      <Row width='100%'>
        <Column alignItems='center'>
          <AllCasksList { ...sortProps } />
        </Column>
        <Column width='100%'>
          <ActiveCaskContainer />
          <AssociatedOutturn />
        </Column>
      </Row>
    </Column>
  );
};
