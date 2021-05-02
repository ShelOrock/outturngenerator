//Dependency Libraries
import * as React from "react";
const { useEffect, useReducer } = React;
//Dependency Functions
import { useTypedSelector, createButton } from "../../utils";

//Components
import ButtonManager from "../Button/ButtonManager";
//Styled Components
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledDiv: { PaddedDiv },
  StyledForm: { Checkbox },
  StyledFilter: {
    FilterContainer,
    FilterList,
    FilterListItem,
    FilterListItemLabel,
  },
} = StyledComponents;

//Redux Actions
import * as actions from "../../redux/actions";
const { filterActions: { setFilters } } = actions;

//Types
import {
  ButtonProps,
  InputOnChangeType,
  LocalReducerFunctionType
} from "../../types";

export default ({ filterItems }) => {
  const { filters } = useTypedSelector((state) => state);

  const initialState: string[] = [];
  const reducer: LocalReducerFunctionType<typeof initialState> = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case "ADD_FILTER":
        return [...state, action.value];
      case "REMOVE_FILTER":
        return state.filter(filter => filter !== action.value);
      case "UPDATE_FILTERS":
        return [...action.value];
      default:
        return [];
    }
  };

  const [localFilters, dispatchLocally] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatchLocally({ type: "UPDATE_FILTERS", value: filters })
  }, [filters]);

  const handleOnCheck: InputOnChangeType = ({ target: { name } }) => {
    if (localFilters.includes(name)) {
      dispatchLocally({ type: "REMOVE_FILTER", value: name })
    } else {
      dispatchLocally({ type: "ADD_FILTER", value: name })
    };
  };

  const setFiltersButtonProps: ButtonProps = {
    size: "default",
    variant: "primary",
    onClick: createButton(
      setFilters,
      "Apply Filters",
      localFilters
    )
  }

  const renderFilterListItems = (): JSX.Element[] => (
    filterItems.map((filter, idx) => (
      <FilterListItem key={idx} flavourProfile={ filter }>
        <PaddedDiv
          paddingTop='1rem'
          paddingBottom='1rem'
          paddingLeft='0.5rem'
          paddingRight='0.5rem'
        >
          <Checkbox
            type="checkbox"
            name={ filter }
            checked={ localFilters.includes(filter) }
            onChange={ handleOnCheck }
          />
          <FilterListItemLabel>{filter}</FilterListItemLabel>
        </PaddedDiv>
      </FilterListItem>
    ))
  )

  return (
    <FilterContainer>
      <FilterList>
        { renderFilterListItems() }
      </FilterList>
      <ButtonManager { ...setFiltersButtonProps }/>
    </FilterContainer>
  );
};
