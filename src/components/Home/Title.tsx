import styles from './Styles/Title.module.css'

interface TitleProps {
    title: string
}

export default function Title({ title }: TitleProps) {
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}
