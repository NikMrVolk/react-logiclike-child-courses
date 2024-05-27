import { useMemo } from 'react'
import { BASE_TAG } from '../utils/constants'

export const useCourses = (courses: Course[], query: string) => {
    const searchedCourses = useMemo(() => {
        if (query === BASE_TAG) return courses

        return courses.filter((el) => el.tags.includes(query))
    }, [courses, query])
    return searchedCourses
}
