import styles from './Layout.module.scss'

export const Layout = ({ children }: { children: React.ReactNode }) => (
    <main className={styles.layout}>{children}</main>
)
