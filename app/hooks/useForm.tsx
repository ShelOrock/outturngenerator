import { useState, useEffect } from 'react';

import { InputOnChangeType } from '../types';

interface UseFormReturnType<InputTypes> {
  formValues: InputTypes;
  setFormValues: any;
  formErrors: InputTypes;
  containsErrors: boolean;
  handleOnChange: InputOnChangeType
};

const useForm = (inputs, validations = {}): UseFormReturnType<typeof inputs> => {

  const [ formValues, setFormValues ] = useState(inputs);
  const [ formErrors, setFormErrors ] = useState({});
  const [ containsErrors, setContainsErrors ] = useState(false);

  const handleOnChange: InputOnChangeType = e => {
    const { name, value } = e.target;

    checkValidations(validations, name, value);

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const checkValidations = (validations, name: string, value) => {
    if(!validations[name]) {
      return;
    };

    const containsErrors = validations[name].some(validation => {
      if(validation.isRequired) {
        if(!value) {
          setFormErrors({
            ...formErrors,
            [name]: validation.message
          });

          return true;
        };
      };

      if(validation.matchPattern) {
        if(!validation.matchPattern.test(value)) {
          setFormErrors({
            ...formErrors,
            [name]: validation.message
          });

          return true;
        };
      };

      if(validation.minimum) {
        if(value < validation.minimum) {
          setFormErrors({
            ...formErrors,
            [name]: validation.message
          });

          return true;
        };
      };

      if(validation.maximum) {
        if(value > validation.maximum) {
          setFormErrors({
            ...formErrors,
            [name]: validation.message
          });
          
          return true;
        };
      };

      return false;
  });

  if(!containsErrors) {
    const {
      [name]: nameToRemove,
      ...remainingFormErrors
    } = formErrors as any;
  
    setFormErrors({
      ...remainingFormErrors,
    });
  };
};

  useEffect(() => {
    checkErrors();
  }, [formErrors]);

  const checkErrors = (): void => {
    setContainsErrors(false);

    Object.keys(validations).forEach(validationName => {
      const currentValidations = validations[validationName];

      const requiredFieldsEmpty = currentValidations.some(validation => {
        if(validation.isRequired && formValues[validationName] === "") {
          
          return true;
        };
      });

      if(requiredFieldsEmpty) {
        setContainsErrors(true);
        return;
      };
    });

    Object.keys(formErrors).forEach(key => {
      if(!formErrors[key]) {
        setContainsErrors(false);
      } else {
        setContainsErrors(true);
      };
    });
  };

  return {
    formValues,
    setFormValues,
    formErrors,
    containsErrors,
    handleOnChange
  };
};

export default useForm;