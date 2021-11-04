import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Classroom from '../components/Classroom.js'
import ClassSelect from '../components/ClassSelect.js'

export default function Home() {

  return (
    <div className={styles.container}>
    <ClassSelect />
    <Classroom classId={'218'}/>
    </div>
  )
}
