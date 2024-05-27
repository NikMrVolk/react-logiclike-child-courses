import { Button, Dashboard } from '../../components/UI'

import styles from './view.module.scss'

interface SearchTagsProps {
    tags: string[]
    currentTag: string
    changeTag: (tag: string) => void
}

export const SearchTags = ({ tags, currentTag, changeTag }: SearchTagsProps) => {
    return (
        <Dashboard className={styles.wrapper}>
            {tags.map((el) => (
                <Button
                    key={el}
                    variant={currentTag === el ? 'green' : 'standard'}
                    onClick={() => changeTag(el)}
                >
                    {el}
                </Button>
            ))}
        </Dashboard>
    )
}
