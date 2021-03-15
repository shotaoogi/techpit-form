import { ValidationState } from '../../domain/entity/validation';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import validationActions from './actions';
import { stat } from 'fs';

const init: ValidationState = {
  isstartValidation: false,
  message: {
    name: '',
    description: '',
    birthday: '',
    gender: '',
    address: {
      postalcode: '',
      prefecture: '',
      city: '',
      restAddress: ''
    },
    college: {
      faculty: ''
    },
    careers: []
  }
};

const validationReducer = reducerWithInitialState(init)
  .case(validationActions.setIsStartvalidation, (state, payload) => ({
    ...state,
    isstartValidation: payload
  }))
  .case(validationActions.setValidation, (state, payload) => ({
    ...state,
    message: payload
  }));

  export default validationReducer;
