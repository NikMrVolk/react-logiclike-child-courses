import styles from './CourseCard.module.scss'

interface CourseCardProps {
    course: Course
}

export const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <li className={styles.card}>
            <div className={styles.card__img} style={{ backgroundColor: course.bgColor }}>
                <img src={course.image} alt="course" />
            </div>
            <h3 className={styles.card__title}>{course.name}</h3>
        </li>
    )
}
