import * as React from "react";
const { useEffect, useReducer } = React;
import { useTypedSelector, createButton, flavourProfiles } from "../../utils";

import ButtonManager from "../Button/ButtonManager";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledForm: { Checkbox },
  StyledFilter: {
    FilterContainer,
    FilterList,
    FilterListItem,
    FilterListItemLabel,
  },
} = StyledComponents;

import * as actions from "../../redux/actions";
const {
  searchFilterActions: { setFilters },
} = actions;

import { InputOnChangeType, LocalReducerFunctionType } from "../../types";

export default () => {
  const { searchFilters } = useTypedSelector((state) => state);

  const initialState = [];
  const reducer: LocalReducerFunctionType<typeof initialState> = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case "ADD_FILTER":
        return [...state, action.value];
      case "REMOVE_FILTER":
        return state.filter((_filter) => _filter !== action.value);
      case "UPDATE_FILTERS":
        return [...action.value];
      default:
        return [];
    }
  };

  const [localFilters, dispatchLocally] = useReducer(reducer, initialState);

  useEffect(
    () => dispatchLocally({ type: "UPDATE_FILTERS", value: searchFilters }),
    [searchFilters]
  );

  const handleOnCheck: InputOnChangeType = ({ target: { name } }) => {
    if (localFilters.includes(name)) dispatchLocally({ type: "REMOVE_FILTER", value: name });
    else dispatchLocally({ type: "ADD_FILTER", value: name });
  };

  const setFiltersButtonProps = {
    size: "default",
    variant: "primary",
    onClickFunctionProps: createButton(setFilters, "Apply Filters", localFilters)
  }

  const renderFilterListItems = () => (
    flavourProfiles.map((flavour, idx) => (
      <FilterListItem key={idx} flavourProfile={flavour}>
        <Checkbox
          type="checkbox"
          name={flavour}
          checked={localFilters.includes(flavour)}
          onChange={handleOnCheck}
        />
        <FilterListItemLabel>{flavour}</FilterListItemLabel>
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
