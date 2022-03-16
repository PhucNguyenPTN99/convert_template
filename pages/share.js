import axios from 'axios'

export async function init({store, redirect, isClient}) {
    if(isClient) return

    try {
    const res = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-02-16&sortBy=publishedAt&apiKey=65af6ee5929240aabf01a0d23269a3f2')
    store.commit('init', res.data)
    } catch (error) {
        redirect('/error')
    }
}