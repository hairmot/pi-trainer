import Pibrary from '../Pibrary/';

var defaultState = {
  pi: '', valid:"Reset", digits:'',nextDigit: 3
}

export default function reducer(state = defaultState,action) {
  switch (action.type) {
    case "CHECK":
        var valid = Pibrary.isPi(action.value);
        let digits = Pibrary.howManyDigits(action.value);
        return {...state, pi:action.value, valid: valid, digits:digits, nextDigit: Pibrary.getNextDigit(action.value)};
    case "RESTART":
        return defaultState;
    default: return state;
  }
}


