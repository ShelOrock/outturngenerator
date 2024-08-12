const useSerializeData = (items = [], itemKey = "") => {

  const serializedData = items.map((item, index) => ({
    id: index,
    [itemKey]: item
  }));

  return {
    serializedData
  };
};

export default useSerializeData;
