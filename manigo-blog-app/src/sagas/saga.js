import { takeEvery, put } from "redux-saga/effects";

function* fetchArticleAsync(data) {
  yield put({ type: "FETCH_ARTICLES_ASYNC", payload: data });
}

export function* watchFetchArticles(data) {
  yield takeEvery("FETCH_ARTICLES", fetchArticleAsync(data));
}
