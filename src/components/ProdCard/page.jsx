import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import styles from './ProdCard.module.scss'




const ProdCard = ({data}) => {
    const {thumbnail, name, price}=data;
   
    return (
        <div>
           <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="Thumbnail" src={thumbnail} className={styles.image} />}
  >
    <Meta title={name} description={`$${price}`} />
    
  

  </Card>
            
        </div>
    );
};

export default ProdCard;