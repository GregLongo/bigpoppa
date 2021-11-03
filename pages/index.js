import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Popups from '../components/Popups.js'
import Classroom from '../components/Classroom.js'

export default function Home() {

  return (
    <div className={styles.container}>
    <Classroom classId={'218'}/>
    </div>
  )
}
