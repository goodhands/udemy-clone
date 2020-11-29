import axios from '../axios';

const CategoriesService = {
    all(){
        return axios.get('/course-categories')
    }
}

export default CategoriesService;