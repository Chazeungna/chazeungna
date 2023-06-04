import React from 'react';
import KakaoMap from '../../components/KakaoMap';
import styles from './styles.module.scss';
function Main() {
    return (
        <div>
            <div className={styles.container}>
               <div className={styles.title}>
                CHAZEUNGNA
                </div>
                <div  className={styles.content}>
                서울시 주차 정보를 확인해요!
                </div>
                <div className={styles.imageContainer}>
                    <img src='/assets/icons/search.png' className={styles.image}/>
                    <input className={styles.search} placeholder='장소를 입력하세요.'/>
                </div>
                <div className={styles.mapContainer}>
                    <KakaoMap width={"90vw"} height={"73vh"}/>
                </div>
            </div>

        </div>);
}
export default Main
;