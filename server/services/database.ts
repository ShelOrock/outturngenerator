const getRecord = async (model, searchCondition = {}) => {
  try {
    return await model.findOne({ where: searchCondition });

  } catch(e) {
    throw new Error(`Error getting record ${ model }: ${ e.message }`);
  };
};

const getAllRecords = async (model, {
  scope = "defaultScope",
  searchCondition = {},
} = {}) => {
  try {
    return await model
      .scope(scope)
      .findAll({ where: searchCondition });

  } catch(e) {
    throw new Error(`Error getting all ${ model } records: ${ e.message }`);
  };
};

const createRecord = async (model, payload) => {
  try {
    return await model.create(payload);

  } catch(e) {
    throw new Error(`Error creating new record ${ model }: ${ e.message }`);
  };
};

const updateRecord = async (model, payload, { searchCondition = {} } = {}) => {
  try {
    await model.update(payload, { where: searchCondition });

  } catch(e) {
    throw new Error(`Error updating record ${ model }: ${ e.message }`);
  };
};

const deleteRecord = async (model, { searchCondition = {} } = {}) => {
  try {
    await model.destroy({ where: searchCondition });

  } catch(e) {
    throw new Error(`Error deleting record ${ model }: ${ e.message }`);
  };
};

export {
  getRecord,
  getAllRecords,
  createRecord,
  updateRecord,
  deleteRecord
};
