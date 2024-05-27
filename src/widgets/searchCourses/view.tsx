import { useEffect, useState } from 'react'

import { CourseList, SearchTags } from '../../modules'
import { getTagsFromCourseList } from './utils/helpers'
import { API_URL, BASE_TAG } from './utils/constants'
import { useCourses } from './hooks'

import styles from './view.module.scss'

export const SearchCourses = () => {
    const [courses, setCourses] = useState<Course[]>([])
    const [tag, setTag] = useState(BASE_TAG)
    const searchedCourses = useCourses(courses, tag)

    const handleChangeTag = (tag: string) => {
        setTag(tag)
    }

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setCourses(data))
    }, [])

    return (
        <div className={styles.wrapper}>
            <SearchTags
                tags={getTagsFromCourseList(courses)}
                currentTag={tag}
                changeTag={handleChangeTag}
            />
            <CourseList courseList={searchedCourses} />
        </div>
    )
}
