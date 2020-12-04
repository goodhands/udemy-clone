import axios from '../axios';

const Course = {
    getCourseByCategory(id){
        return axios.get(`discovery-units/bestseller/?fft=skills_hub_top_new_beginner&fl=lbl&label_id=${id}&member_of=skills_hub_top_new_beginner&sos=pl&source_page=logged_out_homepage`);
    }
}

export default Course;