import axios from 'axios'

export async function init({store, redirect, isClient}) {
    if(isClient) return
//https://newsapi.org/v2/everything?q=tesla&from=2022-02-27&sortBy=publishedAt&apiKey=65af6ee5929240aabf01a0d23269a3f2
    try {
    const res = await axios.get('http://127.0.0.1:8000/api/articles')
    store.commit('init', res.data)
    } catch (error) {
        redirect('/error')
    }
}