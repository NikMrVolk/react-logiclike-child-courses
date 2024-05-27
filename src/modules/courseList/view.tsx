import { CourseCard } from './components'

import styles from './view.module.scss'

export const CourseList = ({ courseList }: { courseList: Course[] }) => (
    <ul className={styles.wrapper}>
        {courseList.map((el) => (
            <CourseCard key={el.id} course={el} />
        ))}
    </ul>
)
