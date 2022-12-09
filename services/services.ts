import  Axios  from "axios";

const instance = Axios.create({
    baseURL:  process.env.NEXT_PUBLIC_API_URL,
    timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
});

export default instance