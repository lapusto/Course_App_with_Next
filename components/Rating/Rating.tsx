import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import StarIcon from "./ratingstar.svg";
import cn from "classnames";
import { KeyboardEvent, useEffect, useState } from "react";

export const Rating = ({
  isEditable = false,
  rating,
  setRaiting,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) : void =>  {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
          <span className={cn(styles.rating, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() : void => changeDisplay(i + 1)}
          onMouseLeave={() : void => changeDisplay(rating)}
          onClick={() : void => onRatingClickHandler(i + 1)}>
 <StarIcon
          
          tabIndex={isEditable? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>): unknown => (isEditable && handleSpace(i + 1, e))}
        />
          </span>
       
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) : void => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onRatingClickHandler = (i: number) : void => {
    if (!isEditable || !setRaiting) {
        return;
      }
      setRaiting(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) : void => {
    if(e.code !== 'Space' || !setRaiting) {
        return;
    }
    setRaiting(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
