import * as actionTypes from "./actionTypes"

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "post 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
}

const myReducer = (state: ArticleState = initialState,
    action : any
): ArticleState => {
    switch(action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id : Math.random(),
                title : action.article.title,
                body : action.article.body
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle)
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles: updatedArticles
            }
        case actionTypes.EDIT_ARTICLE:
            const mergeArrayWithObject = (arr:Array<IArticle>, obj:any) => arr && arr.map((t,index)=> {
               return t.id === obj.id ? obj : t
            });
            
            const editActicle = mergeArrayWithObject(state.articles , action.article)
            
            return {
                ...state,
                articles : editActicle
            }
        case actionTypes.SEARCH_ACTICLE:
            const searchArticle = state.articles.filter(
                article => {
                    return article && article?.title?.toLowerCase().indexOf(action.title?.title?.toLowerCase()) !== -1
                }
            )
            return {
                ...state,
                articles : searchArticle
            }

        default:
            return state;
    }

}

export default myReducer