import * as actionTypes from './actionTypes'

export function addArticle(article: IArticle) {
    const action: ArticleAction = {
        type : actionTypes.ADD_ARTICLE,
        article
    }
    return simulateHttpRequest(action)
}
export function removeArticle(article: IArticle) {
    const action: ArticleAction = {
      type: actionTypes.REMOVE_ARTICLE,
      article,
    }
    return simulateHttpRequest(action)
}

export function editArticle(article: IArticle){
    const action: ArticleAction = {
      type : actionTypes.EDIT_ARTICLE,
      article,
    }

  return simulateHttpRequest(action)
}
export function onSearchArticleAction(title: string){
  const action: ActicleActionSearch = {
    type : actionTypes.SEARCH_ACTICLE,
    title,
  }
  return simulateHttpRequest(action)
}
export function simulateHttpRequest(action:any) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
}