const useSelect = (defaultOptionName, optionsData, optionName, optionValue) => {

  const defaultOption = {
    id: -1,
    name: defaultOptionName,
    value: "",
    disabled: true
  };

  const allOptions = optionsData.map(option => ({
    id: option.id,
    name: option[optionName],
    value: option[optionValue]
  }));

  const options = [
    defaultOption,
    ...allOptions
  ];

  return {
    options
  };
};

export default useSelect;
