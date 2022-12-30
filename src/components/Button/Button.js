import styles from './Button.module.scss';

const Button = text => {
  return(
    <button className={styles.button}>{text.text}</button>
  )
}

export default Button;