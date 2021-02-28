import * as ACTION_TYPES from '../actions/ActionType';

const initialState = {
  counter: 0,
  total: 0,
  dashboard: [],
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_COUNTER:
      console.log('oii');
      return state;

    case ACTION_TYPES.COUNTER_PLUS:
      console.log('ADD_COUNTER');
      return {
        ...state,
        dashboard: state.dashboard.map((content) =>
          content.id === action.index
            ? {...content, counter: content.counter + 1}
            : content,
        ),
      };
    case ACTION_TYPES.COUNTER_MINUS:
      console.log('MINUS_COUNTER');
      return {
        ...state,
        dashboard: state.dashboard.map((content) =>
          content.id === action.index
            ? {...content, counter: content.counter - 1}
            : content,
        ),
      };
    case ACTION_TYPES.ADD_LIST:
      console.log('dashboard');

      const dashboard = [...state.dashboard];

      const isduplicate = dashboard.filter((data) => {
        return data.id === action.payload.id;
      });
      if (isduplicate.length <= 0) {
        dashboard.push(action.payload);
      } else {
        isduplicate[0].counter++;
      }

      const data = {...state, dashboard};
      console.log(data);
      return data;

    case ACTION_TYPES.DELETE_LIST_INDEX:
      console.log('delete list index');
      //   state.dashboard=state.dashboard.filter(item=> item.counter != action.index)
      return {
        ...state,
        dashboard: state.dashboard.filter((item) => item.id != action.index),
        counter:
          state.dashboard.length > 1
            ? state.dashboard.reduce((prev, cur) => {
                return prev + cur.counter;
              }, 0)
            : state.dashboard.length <= 0
            ? 0
            : state.dashboard[0].counter,
      };

    case ACTION_TYPES.DELETE_LIST_ALL:
      console.log('delet list all');

    case ACTION_TYPES.SUM_COUNTER:
      console.log('jumalah item keseluruhan');
      const c = state.dashboard.map((i) => i.counter);
      console.log(c);
      return {
        ...state,
        counter:
          state.dashboard.length > 1
            ? state.dashboard.reduce((prev, cur) => {
                return prev + cur.counter;
              }, 0)
            : state.dashboard.length <= 0
            ? 0
            : state.dashboard[0].counter,

        total:
          state.dashboard.length > 1
            ? state.dashboard.reduce((prev, cur) => {
                return prev + cur.counter * cur.price;
              }, 0)
            : state.dashboard.length == 0
            ? 0
            : state.dashboard[0].counter * state.dashboard[0].price,
      };

    default:
      return state;
  }
  return;
};
