import clsx from "clsx"

import styles from './Dashboard.module.scss'

interface DashboardProps {
    Component?: keyof JSX.IntrinsicElements
    className?: string
    children: React.ReactNode
}

export const Dashboard = ({ children, Component = 'section', className = '' }: DashboardProps) => (
    <Component className={clsx(styles.wrapper, className)}>{children}</Component>
)
