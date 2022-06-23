import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { priceRub, titleCounter } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';
import { useState } from 'react';
import { Review } from '../Review/Review';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    const [isReviewOpen, setIsReviewOpen ] = useState<Boolean>(false)
    return (
        <>
        <Card className={styles.product}>
            <div className={styles.logo}>
                <Image  src={/^https?:\/\//i.test(product.image) ? product.image : process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}
                width={70}
                height={70} />
            </div>
            <div className={styles.title}>
                {product.title}
            </div>
            <div className={styles.price}>
                {priceRub(product.price)}
                {product.oldPrice && <Tag className={styles.oldPrice} color="green">{priceRub(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}>
                {priceRub(product.credit)}/<span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
                <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
                {product.categories.map(c => <Tag className={styles.category} color="ghost" key={c}>{c}</Tag>)}
            </div>
            <div className={styles.priceTitle}>
                цена
            </div>
            <div className={styles.creditTitle}>
                кредит
            </div>
            <div className={styles.rateTitle}>
                {product.reviewCount} {titleCounter(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>
                {product.description}
            </div>
            <div className={styles.feature}>
                {product.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                        <span>{c.name}</span>
                        <span className={styles.characteristicsDots}></span>
                        <span>{c.value}</span>
                    </div>
                ))}
            </div>
            <div className={styles.advBlock}>
                {product.advantages && <div className={styles.advantages}>
                    <div className={styles.advTitle}>Преимущества</div>
                    {product.advantages}
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div className={styles.advTitle}>Недостатки</div>
                    {product.disadvantages}
                </div>}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
                <Button appearance='primary'>Узнать подробнее</Button>
                <Button appearance='ghost' arrow={isReviewOpen? 'down' :'right'} className={styles.reviewButton}
                onClick={() => setIsReviewOpen(!isReviewOpen)}>Читать отзывы </Button>
            </div>
        </Card>
        <Card color="blue" className={cn(styles.reviews, {
            [styles.open]: isReviewOpen,
            [styles.closed]: !isReviewOpen
        })}>
            { product.reviews.length == 0 && "Здесь пока нет ни одного отзыва" }
           { product.reviews.length > 0 && product.reviews.map( r => <Review review={r} key={r._id}/>)}
        </Card>
        </>
    );
};
