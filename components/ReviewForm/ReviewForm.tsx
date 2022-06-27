import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from "./close.svg"

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  
    return (
        <>
          <div className={cn(styles.reviewForm, className, )} {...props}>
        <Input placeholder='Имя' />
        <Input className={styles.title} placeholder="Заголовок отзыва"/>
        <div>
            <span>Оценка:</span>
            <Rating rating={0} />
        </div>
        <Textarea className={styles.description} placeholder="Текст отзыва"/>
        <div className={styles.submit}>
            <Button appearance='primary'>Отправить</Button>
        <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию</span>
        </div>
    </div>
    <div className={styles.success}>
        <div>Ваш отзыв отправлен.</div>
        <CloseIcon className={styles.close}/>
    </div>
        </>
  
 );
};
