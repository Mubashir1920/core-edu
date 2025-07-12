
import CourseCard from "./CourseCard"
import FAQComponent from "./CourseFaq"
import FilterCourse from "./FilterCourse"
import TestimonialsSection from "./Testimonials"

import CourseImg1 from '@/public/assets/AI-Course.png'
import CourseImg2 from '@/public/assets/AI-Course2.png'



export default function Courses() {


    return (
        <div className="container mx-auto p-4 bg-white">
            <FilterCourse />
            {/* Dynamically Display Card When Fetched From the Backend */}
            <CourseCard Img={CourseImg1} />
            <CourseCard Img={CourseImg2} />
            <FAQComponent />
            <TestimonialsSection />

        </div>
    )
}
