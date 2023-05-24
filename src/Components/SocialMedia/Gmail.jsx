import React from 'react';
import styles from "./SocialMedia.module.scss"
import { EmailId } from '@/Content';

const Gmail = () => {
    return (
        <div className={`${styles.gmail} fixed right-10 left-AUTO w-10 z-10 bottom-0`}>
            <div className="flex flex-col items-center mb-5">
                <a href="mailto:shadabsaifi749@gmail.com" className={` font-poppins text-sm tracking-widest link ${styles.write_mode}`}>{EmailId}</a>
            </div>
        </div>
    )
}

export default Gmail