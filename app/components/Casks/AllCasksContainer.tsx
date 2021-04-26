//Dependency Libraries
import * as React from "react";
const { useEffect, useState } = React;
import { useDispatch } from "react-redux";
//Dependency Functions
import {
  useTypedSelector,
  createButton,
  flavourProfiles
} from "../../utils";

//Components
import PageHeaderManager from "../Header/PageHeaderManager";
import FilterMenuManager from "../FilterMenu/FilterMenuManager";
import SelectManager from "../Select/SelectManager";
import ButtonManager from "../Button/ButtonManager";
import CaskListItem from "../OutturnCasks/CaskListItem";
import ActiveCaskContainer from "../OutturnCasks/ActiveCaskContainer";
import AssociatedOutturn from "./AssociatedOutturn";

//StyledComponents
import * as StyledComponents from "../styledcomponents";
const {
  StyledDiv: { Column, Row, PaddedDiv },
  StyledCask: { List },
} = StyledComponents;

//Redux actions
import * as actions from "../../redux/actions";
const {
  activeOutturnActions: { resetActiveOutturn },
  activeCaskActions: { resetActiveCask },
  markCaskActions: { resetMarkedCasks },
  searchFilterActions: { removeFilter, resetFilters },
  modalActions: { setModal },
} = actions;

//Redux thunks
import * as thunks from "../../redux/thunks";
const {
  casksThunks: {
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
  SelectPropTypes,
  CreateCaskModalState
} from "../../types";

export default () => {

  const dispatch = useDispatch();

  const [ sort, setSort ] = useState("ascending");
  const [ showMore, setShowMore ] = useState(12);
  const [ isOpen, setIsOpen ] = useState(false);
  const {
    allCasks,
    activeCask,
    activeUser,
    markedCasks,
    isLoading,
    searchFilters,
  } = useTypedSelector((state) => state);

  useEffect(() => {
    dispatch(resetActiveCask());
    dispatch(resetMarkedCasks());
    dispatch(resetFilters());
    dispatch(resetActiveOutturn());
  }, []);
  useEffect(() => {
    dispatch(getCasks(sort, searchFilters));
  }, [sort, searchFilters]);

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
        activeCask.id,
        [],
        sort,
        searchFilters
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

  const sortCasksSelectProps: SelectPropTypes = {
    selectValue: sort,
    label: "",
    onChange: (e) => setSort(e.target.value),
    width: "auto",
    options: [
      {
        value: "ascending",
        name: "Ascending",
      },
      {
        value: "descending",
        name: "Descending",
      },
      {
        value: 'A-Z',
        name: 'A-Z'
      },
      {
        value: 'Z-A',
        name: 'Z-A'
      },
      {
        value: "newest",
        name: "Newest",
      },
      {
        value: "oldest",
        name: "Oldest",
      },
    ],
  };

  const resetFilterButtonProps: ButtonProps = {
    variant: "tertiary",
    disabled: !searchFilters.length,
    onClick: createButton(
      resetFilters,
      "X Clear Filters"
    ),
  };

  const setIsOpenButtonProps: ButtonProps = {
    size: "default",
    variant: "default",
    dispatchToStore: false,
    onClick: createButton(
      setIsOpen,
      isOpen ? "Collapse Filters" : "Show Filters",
      !isOpen
    ),
  };

  const showMoreButtonProps: ButtonProps = {
    size: "default",
    variant: "secondary",
    disabled: !!isLoading,
    dispatchToStore: false,
    onClick: createButton(
      setShowMore,
      "Show More",
      showMore + 6
    ),
  };

  const renderSearchFilters = (): JSX.Element[] => (
    searchFilters.map((filter: string, idx: number) => (
      <ButtonManager
        key={ idx }
        variant={ flavourProfiles.includes(filter) ? filter : 'default' }
        onClick={ createButton(
          removeFilter,
          `X ${ filter }`,
          filter
        ) }
      />
    ))
  );

  const renderCaskListItems = (): JSX.Element[] => (
    allCasks
      .slice(0, showMore)
      .map((cask) => (
        <CaskListItem
          key={ cask.id }
          cask={ cask }
          sortMethod={ sort }
        />
      ))
  );

  return (
    <Column>
      <PageHeaderManager {...pageHeaderProps} />
      <Row justifyContent="space-between">
        <PaddedDiv
          paddingLeft="1rem"
          paddingRight="1rem"
        >
          <SelectManager {...sortCasksSelectProps} />
        </PaddedDiv>
        <Row alignItems='center'>
          { !!searchFilters.length && renderSearchFilters() }
          { !!searchFilters.length && <ButtonManager { ...resetFilterButtonProps } />}
          <ButtonManager { ...setIsOpenButtonProps } />
        </Row>
        { isOpen && <FilterMenuManager filters={ flavourProfiles }/>}
      </Row>
      <Row>
        <List>
          { !!allCasks.length && renderCaskListItems() }
          { showMore < allCasks.length && <ButtonManager { ...showMoreButtonProps } />}
        </List>
        <Column>
          <ActiveCaskContainer />
          <AssociatedOutturn />
        </Column>
      </Row>
    </Column>
  );
};
