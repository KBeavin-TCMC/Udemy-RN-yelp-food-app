import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer cau9d0oQdZgiVbebxNTDehlo7NVv51_ssuf746CK0WQlpxsokr6QuKv4JdQe7H689LLOvFZDAk63BM143yTVmzT0WlVG-CvTcKKR8EIESK50LsTa8136JmJb6FcYYHYx'
    }
});
// https://api.yelp.com/v3/businesses/search'
// 'https://api.yelp.com/v3/businesses/{id}