import { SocialMediaList } from '@/Content'
import React from 'react';
import styles from "./SocialMedia.module.scss"

const SocialMedia = () => {
  return (
    <div className='fixed right-auto left-10 w-10 z-10 bottom-0'>
        <ul className={`${styles.SocialMedia} flex flex-col items-center gap-5 list-none m-0 p-0`}>
        {
            SocialMediaList.map((item,key) => (
                <li key={key}>
                    <a href={item.url} target="_blank" className="link hover:mb-2">
                        <i className={styles[item.icon]}></i>
                    </a>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default SocialMedia