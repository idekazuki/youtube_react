// useReducerで使用するactionsの名前を定義
// バックエンドのAPIにアクセスを開始した時の状態
export const START_FETCH = 'START_FETCH'
// APIのアクセスに成功した時
export const FETCH_SUCCESS = 'FETCH_SUCCSS'
// 失敗した時
export const ERROR_CATCHED = 'ERROR_CATCHED'
// ログインフォームのテキストに変更があるたびに呼び出される
export const INPUT_EDIT = 'INPUT_EDIT'
// アカウントがあるかどうかで、レジスターかログインで分ける
export const TOGGLE_MODE = 'TOGLE_MODE'