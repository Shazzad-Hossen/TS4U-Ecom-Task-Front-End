import React from 'react';
import Lottie from "lottie-react";
import loadingAnim from "../../assets/animations/loading.json";
import styles from './LoasingSpinner.module.scss'

const LoadingSpinner = () => {
    return (
        <div className={styles.container}>
            <Lottie className={styles.anim} animationData={loadingAnim} loop={true} />
            
        </div>
    );
};

export default LoadingSpinner;