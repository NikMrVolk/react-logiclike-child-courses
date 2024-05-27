import React from 'react'
import clsx from 'clsx'

import styles from './Button.module.scss'

type ButtonVariant = 'green'
interface ButtonProps extends React.ComponentProps<'button'> {
    loading?: boolean
    variant?: ButtonVariant
    children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'green', className, loading, ...props }, ref) => (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                { [styles.loading]: loading },
                className
            )}
            type="button"
            {...props}
            ref={ref}
        >
            <span>{children}</span>
            {loading && <span />}
        </button>
    )
)
