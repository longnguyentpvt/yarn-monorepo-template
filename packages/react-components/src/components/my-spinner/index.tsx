import styles from './styles.module.css'

export function Spinner(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props
  return <button className={`${styles.spinner} ${className ? className : ''} `} {...restProps} />
}