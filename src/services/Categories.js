import axios from '../axios';

const CategoryProvider = {

    async catChildren(){
        const categories = [];

        axios.get('/course-categories')
            .then(({ data }) => {
               data.results.map(result => {
                    this.findChildren(result.id).then(children => { 
                        categories.push(Object.assign({}, result, {children: children}));
                    })
               }) 
            }, console.error);
        
        return categories;
    },

    findLabels(parent){
        return axios.get(`/course-subcategories/${parent}/labels/`);
    },

    async findChildren(parentId){
        return axios.get(`/course-categories/${parentId}/subcategories`)
        .then(({data}) => {
            return data.results;
        })
    }
}

export default CategoryProvider;