import * as React from "react";
const { useState, useEffect } = React;
import { useDispatch } from "react-redux";
import { useTypedSelector, createButton } from "../../utils";

import PageHeader from "../Header/PageHeader";
import ButtonManager from "../Button/ButtonManager";
import SelectManager from '../Select/SelectManager';
import OutturnCard from "./OutturnCard";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledCard: { CardsContainer },
  StyledDiv: { PaddedDiv, Column },
} = StyledComponents;

import * as actions from "../../redux/actions";
const {
  activeCaskActions: { resetActiveCask },
  markOutturnActions: { resetMarkedOutturns },
  modalActions: { setModal },
} = actions;

import * as thunks from "../../redux/thunks";
const {
  outturnsThunks: {
    getOutturns,
    addOutturn,
    deleteManyOutturns
  },
} = thunks;

export default () => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(6);
  const [sort, setSort] = useState("newest");

  const {
    allOutturns,
    activeOutturn,
    markedOutturns,
    isLoading,
  } = useTypedSelector((state) => state);

  useEffect(() => {
    dispatch(resetActiveCask());
    dispatch(setModal({}));
    dispatch(resetMarkedOutturns());
  }, []);

  useEffect(() => {
    dispatch(getOutturns(sort));
  }, [sort]);

  const createOutturnModalProps = {
    modalHeader: `Creating a new outturn`,
    stateShape: {
      name: '',
      description: ''
    },
    confirmButton: {
      type: 'CREATE',
      text: 'Create outturn',
      arguments: [ sort ],
      onClickFunction: addOutturn,
    },
  };

  const deleteManyOutturnsModalProps = {
    modalHeader: 'Are you sure you want to delete these outturns?',
    confirmButton: {
      type: 'DELETE',
      text: 'Delete outturns',
      arguments: [ markedOutturns, sort ],
      onClickFunction: deleteManyOutturns,
    },
  };

  const pageHeaderProps = {
    subNavigationProps: {
      link: "#",
      destination: "",
    },
    toolbarProps: {
      pageTitle: "All Projects",
      addButtonProps: {
        onClickProps: createButton(
          setModal,
          "+ New Project",
          createOutturnModalProps
        ),
      },
      deleteButtonProps: {
        variant: "tertiary",
        disabled: !markedOutturns.length,
        onClickProps: createButton(
          setModal,
          "X Delete Marked Outturns",
          deleteManyOutturnsModalProps
        ),
      },
    },
  };

  const sortOutturnSelectProps = {
    selectValue: sort,
    label: '',
    onChangeFunction: (e) => setSort(e.target.value),
    width: '150px',
    options: [
      {
        value: 'newest',
        name: 'Newest'
      },
      {
        value: 'oldest',
        name: 'Oldest'
      }
    ]
  }

  const showMoreButtonProps = {
    size: "default",
    variant: "secondary",
    disabled: !!isLoading,
    dispatchToStore: false,
    onClickFunctionProps: createButton(setShowMore, "Show more", showMore + 6),
  };

  const renderOutturnCards = () => (
    allOutturns
      .slice(0, showMore)
      .map((outturn) => (
        <OutturnCard
          key={outturn.id}
          outturn={outturn}
          sortMethod={sort}
        />
      ))
  );

  return (
    <Column>
      <Column>
        <PageHeader {...pageHeaderProps} />
        <PaddedDiv paddingLeft='1rem' paddingRight='1rem'>
          <SelectManager { ...sortOutturnSelectProps }/>
        </PaddedDiv>
      </Column>
      <Column alignItems="center">
        <CardsContainer>
          { !!allOutturns.length && renderOutturnCards() }
        </CardsContainer>
        { showMore < allOutturns.length && <ButtonManager {...showMoreButtonProps} /> }
      </Column>
    </Column>
  );
};
