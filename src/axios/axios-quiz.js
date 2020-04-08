import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-5d7d5.firebaseio.com/'
})