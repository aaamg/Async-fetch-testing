import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'

const Home: NextPage = () => {
  
  const [stateData, setStateData] = useState({
    id: '',
    userId: '',
    title: '',
    body: ''
  });
  
  const fetcher = async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts/1'
    
    try {
      
      const response = await fetch(url)
      const result = await response.json();
      console.log(result)
      setStateData({
        id: result.id,
        userId: result.userId,
        title: result.title,
        body: result.body
      })
      console.log(stateData)
    } catch (error){
      
      console.log("Error fetching data: ", error);
      
    }
  }
  
  useEffect(() => { 
    fetcher()
  }, [])
  
  return (
    <div className={styles.container}>
      <p>{`Hey! ${stateData.userId}`}</p>
    </div>
  )
}

export default Home
