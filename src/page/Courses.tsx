import { Link } from "react-router-dom";

const DUMMY_COURSES = [
    {
        id: 'c1',
        title: 'Some course'
    },
    {
        id: 'c2',
        title: 'Another course'
    }
]

const CoursesPage = () => {
    return (
        <>
            <h1>CoursesPage</h1>
            <ul>
                {DUMMY_COURSES.map(course => <li key={course.id}>
                    <Link to={course.id}>{course.title}</Link>
                </li>)}
            </ul>
        </>
    )
}

export default CoursesPage;