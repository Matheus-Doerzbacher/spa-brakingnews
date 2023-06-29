import axios from 'axios'

const baseURL= "https://api-breakingnews-play.onrender.com"
// const baseURL= "http:localhost:3000"

export function getAllNews() {
    const response = axios.get(`${baseURL}/news`)
    return response
}