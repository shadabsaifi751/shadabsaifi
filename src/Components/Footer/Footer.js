import React from 'react'
import styles from "./Footer.module.scss"
import { SocialMediaList } from '@/Content'

const Footer = () => {
  return (
    <div className='pb-10'>
        <ul className={`${styles.SocialMedia} mb-5 flex flex-wrap justify-center items-center gap-5 list-none m-0 p-0`}>
        {
            SocialMediaList.map((item,key) => (
                <li key={key}>
                    <a href={item.url}  target="_blank" className="link hover:mb-2">
                        <i className={styles[item.icon]}></i>
                    </a>
                </li>
            ))
        }
        </ul>
        <p className="text-center">Build by Mohd Shadab Saifi</p>
    </div>
  )
}

export default Footer