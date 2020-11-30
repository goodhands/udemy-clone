import axios from '../axios';

const CategoryProvider = {
    all(){
        return axios.get('/course-categories');
    },

    findChildren(parentId){
        return axios.get(`/course-categories/${parentId}/subcategories`);
    }
}

export default CategoryProvider;