import styles from './page.module.css'
import Button from './button'
import Buttonoff from './buttonoff'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Button />
        <Buttonoff />
      </div>
    </>
  )
}