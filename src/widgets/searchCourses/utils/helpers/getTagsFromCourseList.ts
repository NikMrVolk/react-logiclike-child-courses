import { BASE_TAG } from '../constants'

export const getTagsFromCourseList = (courseList: Course[]) => {
    const tags: string[] = [BASE_TAG]
    courseList.forEach((el) => {
        el.tags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    })
    return tags
}
