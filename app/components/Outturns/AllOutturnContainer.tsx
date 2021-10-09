//Dependency Libraries
import * as React from "react";
const { useState, useEffect } = React;
import { useDispatch } from "react-redux";
//Dependency Functions
import { useTypedSelector } from "../../utils";

//Components
import PageHeader from "../Header/PageHeaderManager";
// import ButtonManager from "../Button/ButtonManager";
import SelectManager from '../Select/SelectManager';
import SearchManager from "../SearchManager/SearchManager";
import OutturnCard from "./OutturnCard";
//Styled Components
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledCard: { CardsContainer },
  StyledDiv: {
    PaddedDiv,
    Row,
    Column
  },
} = StyledComponents;

//Redux actions
import * as actions from "../../redux/actions";
const {
  activeCaskActions: { resetActiveCask },
  markOutturnActions: { resetMarkedOutturns },
  searchActions: { setSearch, resetSearch },
  modalActions: { resetModal },
} = actions;

//Redux thunks
import * as thunks from "../../redux/thunks";
const { outturnsThunks: { getOutturns } } = thunks;

//Types
import {
  ButtonProps,
  PageHeaderPropTypes,
  SelectPropTypes,
} from "../../types";

export default () => {

  const dispatch = useDispatch();

  const [showMore, setShowMore] = useState(6);
  const [sort, setSort] = useState("newest");
  const {
    allOutturns,
    markedOutturns,
    activeUser,
    search,
    isLoading,
  } = useTypedSelector((state) => state);

  useEffect(() => {
    dispatch(resetActiveCask());
    dispatch(resetMarkedOutturns());
    dispatch(resetSearch());
    dispatch(resetModal());
  }, []);
  useEffect(() => {
    dispatch(getOutturns(sort));
  }, [sort]);
  useEffect(() => {
    dispatch(setSearch(allOutturns))
  }, [allOutturns])

  const evaluateUserType = activeUser.userType == 'Admin' || activeUser.userType == 'Standard';

  // const createOutturnModalProps: Modal<CreateOutturnModalState> = {
  //   modalHeader: `Creating a new outturn`,
  //   modalState: {
  //     name: '',
  //     description: ''
  //   },
  //   confirmButton: {
  //     onClick: addOutturn,
  //     text: 'Create outturn',
  //     arguments: [ sort ],
  //   },
  // };

  // const deleteManyOutturnsModalProps: Modal = {
  //   modalHeader: 'Are you sure you want to delete these outturns?',
  //   confirmButton: {
  //     text: 'Delete outturns',
  //     arguments: [ markedOutturns, sort ],
  //     onClick: deleteManyOutturns,
  //   },
  // };

  const addButtonProps: ButtonProps = evaluateUserType
  && {
    // onClick: createButton(
    //   setModal,
    //   "+ New Project",
    //   createOutturnModalProps
    // ),
  }

  const deleteButtonProps: ButtonProps = evaluateUserType
  && {
    // variant: "tertiary",
    // disabled: !markedOutturns.length,
    // onClick: createButton(
    //   setModal,
    //   "X Delete Marked Outturns",
    //   deleteManyOutturnsModalProps
    // ),
  }

  const pageHeaderProps: PageHeaderPropTypes = {
    subNavigationProps: {
      link: "#",
      destination: "",
    },
    toolbarProps: {
      pageTitle: "All Projects",
      addButtonProps,
      deleteButtonProps,
    },
  };

  const sortOutturnSelectProps: SelectPropTypes = {
    selectValue: sort,
    label: '',
    onChange: (e) => setSort(e.target.value),
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

  const searchManagerProps = {
    placeholder: 'Search Outturns',
    searchSet: allOutturns,
    firstCriteria: 'name',
    secondCriteria: '',
  }

  const showMoreButtonProps: ButtonProps = {
    size: "default",
    variant: "secondary",
    disabled: !!isLoading,
    // dispatchToStore: false,
    // onClick: createButton(
    //   setShowMore,
    //   "Show more", 
    //   showMore + 6
    // ),
  };

  const renderOutturnCards = (): JSX.Element[] => (
    search
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
        <PaddedDiv
          paddingLeft='1rem'
          paddingRight='1rem'
        >
          <Row alignItems='center' justifyContent='space-between'>
            <SelectManager { ...sortOutturnSelectProps }/>
          </Row>
        </PaddedDiv>
        <PaddedDiv
          paddingLeft='1rem'
          paddingRight='1rem'
        >
          <SearchManager { ...searchManagerProps }/>
        </PaddedDiv>
      </Column>
      <Column alignItems="center">
        <CardsContainer>
          { !!allOutturns.length && renderOutturnCards() }
        </CardsContainer>
        {/* { showMore < allOutturns.length && <ButtonManager {...showMoreButtonProps} /> } */}
      </Column>
    </Column>
  );
};
