import { Button, Dashboard } from '../../components/UI'

interface SearchTagsProps {
    tags: string[]
    currentTag: string
}

export const SearchTags = ({ tags, currentTag }: SearchTagsProps) => {
    return (
        <Dashboard>
            {tags.map((el) => (
                <Button key={el} variant={currentTag === el ? 'green' : 'standard'}>
                    {el}
                </Button>
            ))}
        </Dashboard>
    )
}
