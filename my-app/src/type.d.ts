interface IArticle {
    id : number
    title : string
    body : string
}

type ArticleState = {
    articles : IArticle[]
}

type ArticleAction = {
    type: string
    article : IArticle
}

type ActicleActionSearch = {
    type : string
    title : Object
}

type DefaultRootState = {
    articles:IArticle
    question:any
}
type DispatchType = (args: ArticleAction) => ArticleAction
type DispatchTypeSearch = (args: ActicleActionSearch) => ActicleActionSearch