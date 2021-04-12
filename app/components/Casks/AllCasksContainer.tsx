import * as React from "react";
const { useEffect, useState } = React;
import { useDispatch } from "react-redux";
import { useTypedSelector, createButton } from "../../utils";

import PageHeader from "../Header/PageHeader";
import FilterMenu from "../FilterMenu/FilterMenu";

import SelectManager from "../Select/SelectManager";
import ButtonManager from "../Button/ButtonManager";
import CaskListItem from "../OutturnCasks/CaskListItem";
import ActiveCaskContainer from "../OutturnCasks/ActiveCaskContainer";
import AssociatedOutturn from "./AssociatedOutturn";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledDiv: { Column, Row, PaddedDiv },
  StyledCask: { List },
} = StyledComponents;

import * as actions from "../../redux/actions";
const {
  activeOutturnActions: { resetActiveOutturn },
  activeCaskActions: { resetActiveCask },
  markCaskActions: { resetMarkedCasks },
  searchFilterActions: { removeFilter, resetFilters },
  modalActions: { setModal },
} = actions;

import * as thunks from "../../redux/thunks";
const {
  casksThunks: {
    getCasks,
    addNewCask,
    deleteManyCasks
  },
} = thunks;

export default () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("ascending");
  const [showMore, setShowMore] = useState(12);
  const [isOpen, setIsOpen] = useState(false);

  const {
    allCasks,
    activeCask,
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

  const createCaskModal = {
    modalHeader: `Creating a new cask`,
    stateShape: {
      name: '',
      caskNumber: '',
    },
    confirmButton: {
      type: 'CREATE',
      text: 'Create cask',
      arguments: [],
      onClickFunction: addNewCask,
    },
  };

  const deleteManyCasksModal = {
    modalHeader: 'Are you sure you want to delete these casks?',
    confirmButton: {
      type: 'DELETE',
      text: 'Delete Casks',
      arguments: [ markedCasks, activeCask.id ],
      onClickFunction: deleteManyCasks,
    }
  }

  const pageHeaderProps = {
    subNavigationProps: {
      link: "/",
      destination: "< Back",
    },
    toolbarProps: {
      pageTitle: "All Casks",
      addButtonProps: {
        variant: "primary",
        onClickProps: createButton(
          setModal,
          "+ Add a cask",
          createCaskModal
        ),
      },
      deleteButtonProps: {
        variant: "secondary",
        disabled: !markedCasks.length,
        onClickProps: createButton(
          setModal,
          "X Delete Marked Casks",
          deleteManyCasksModal
        ),
      },
    },
  };

  const sortCasksSelectProps = {
    selectValue: sort,
    label: "",
    onChangeFunction: (e) => setSort(e.target.value),
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
        value: "newest",
        name: "Newest",
      },
      {
        value: "oldest",
        name: "Oldest",
      },
    ],
  };

  const resetFilterButtonProps = {
    variant: "tertiary",
    disabled: !searchFilters.length,
    onClickFunctionProps: createButton(resetFilters, "X Clear Filters"),
  };

  const setIsOpenButtonProps = {
    size: "default",
    variant: "default",
    dispatchToStore: false,
    onClickFunctionProps: createButton(
      setIsOpen,
      isOpen ? "Collapse Filters" : "Show Filters",
      !isOpen
    ),
  };

  const showMoreButtonProps = {
    size: "default",
    variant: "secondary",
    disabled: !!isLoading,
    dispatchToStore: false,
    onClickFunctionProps: createButton(setShowMore, "Show More", showMore + 6),
  };

  const renderSearchFilters = () => (
    searchFilters.map((filter, idx) => (
      <ButtonManager
        key={idx}
        variant={filter.toString()}
        onClickFunctionProps={createButton(
          removeFilter,
          `X ${filter}`,
          filter
        )}
      />
    ))
  );

  const renderCaskListItems = () => (
    allCasks
      .slice(0, showMore)
      .map((cask) => (
      <CaskListItem
        key={ cask.id }
        cask={ cask }
        sortMethod={ sort } />
      ))
  );

  return (
    <div>
      <PageHeader {...pageHeaderProps} />
      <Row justifyContent="space-between">
        <PaddedDiv paddingLeft="1rem" paddingRight="1rem">
          <SelectManager {...sortCasksSelectProps} />
        </PaddedDiv>
        <Row>
          { !!searchFilters.length && renderSearchFilters() }
          { !!searchFilters.length && <ButtonManager {...resetFilterButtonProps} />}
          <ButtonManager {...setIsOpenButtonProps} />
          { isOpen && <FilterMenu />}
        </Row>
      </Row>
      <Row>
        <List>
          { !!allCasks.length && renderCaskListItems() }
          { showMore < allCasks.length && <ButtonManager {...showMoreButtonProps} />}
        </List>
        <Column>
          <ActiveCaskContainer />
          <AssociatedOutturn />
        </Column>
      </Row>
    </div>
  );
};
