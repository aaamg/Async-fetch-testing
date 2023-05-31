import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'

const Home: NextPage = () => {
  
  const [stateData, setStateData] = useState();
  
  useEffect(() => { 
  
  const fetcher = async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts/'
    
    try {
      
      const response = await fetch(url)
      const result = await response.json();
      console.log(result)
      setStateData(result)
      console.log("sd: ", stateData)
    } catch (error){
      
      console.log("Error fetching data: ", error);
      
    }
  }
  
    fetcher()    
  }, []) 
  
  
  
  return (
    <div className={styles.container}>
      <p>Hey</p>
      <ul>
        {stateData?.map((post) => {
          return(
           <p>{post.id}</p> 
          )
        })</p>}
      </ul>
    </div>
  )
}

export default Home
