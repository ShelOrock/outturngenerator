import { useState, useEffect } from 'react';

import { InputOnChangeType } from '../types';

interface UseFormReturnType<InputTypes> {
  formValues: InputTypes;
  formErrors: InputTypes;
  containsErrors: boolean;
  handleOnChange: InputOnChangeType
}

const useForm = (inputs, validation = null): UseFormReturnType<typeof inputs> => {

  const [ formValues, setFormValues ] = useState(inputs);
  const [ formErrors, setFormErrors ] = useState({});
  const [ containsErrors, setContainsErrors ] = useState(false);

  useEffect(() => {
    validation && setFormErrors(validation(formValues));
  }, [formValues]);
  useEffect(() => {
    checkErrors();
  }, [formErrors]);

  const handleOnChange: InputOnChangeType = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const checkErrors = (): void => {
    setContainsErrors(false);
    Object.values(formErrors).forEach(value => {
      if(!value) {
        setContainsErrors(false);
      } else {
        setContainsErrors(true);
      };
    });
  };

  return {
    formValues,
    formErrors,
    containsErrors,
    handleOnChange
  };
};

export default useForm;