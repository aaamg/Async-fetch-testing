import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'

const Home: NextPage = () => {
  
  const [stateData, setStateData] = useState();
  
  const fetcher = async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts/'
    
    try {
      
      const response = await fetch(url)
      const result = await response.json();
      console.log(result)
      setStateData(result)
      //console.log(stateData)
    } catch (error){
      
      console.log("Error fetching data!: ", error);
      
    }
  }
  
  useEffect(() => { 
    fetcher()
  }, [])
  
  return (
    <div className={styles.container}>
      <p>{`Hey!`}</p>
      <ul>
      {stateData.map((post) => {
          <li>{`${post.title}`}</li>
          <li>{`post ${post.id}`}</li>
      })}
      </ul>
    </div>
  )
}

export default Home
