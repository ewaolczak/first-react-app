import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchInput }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchInput)
  );
export const getAllColumns = (state) => state.columns;
export const getAllLists = state => state.lists;
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

//action selectors
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
// export const addList = (payload) => ({type: 'ADD_LIST', payload})
export const searchInput = (payload) => ({ type: 'SEARCH_INPUT', payload });

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }]
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }]
      };
    // case 'ADD_LIST':
    //   return{
    //     ...state,
    //     lists: [...state.lists, {...action.payload, id: shortid()}]
    //   }
    case 'SEARCH_INPUT':
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
