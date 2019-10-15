import { combineReducers } from "redux";
const initialArticle = {
  username: "",
  title: "",
  content: "",
  likes: 0
};

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ARTICLE":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  articleReducer: articleReducer
});

export default rootReducer;
