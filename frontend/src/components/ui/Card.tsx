import "../../styles/components/ui/card.scss";

type CardProps = {
  id: number;
  image: string;
  title: string;
  date: Date;
  detail: string;
  onClick?: (id: number) => void;
};

export default function Card({
  id,
  image,
  title,
  date,
  detail,
  onClick,
}: CardProps) {
  return (
    <div className="card" onClick={() => onClick?.(id)}>
      <img src={image} className="card__image"
      />
      <div className="cardTextWrapper">
        <h3 className="cardTextWrapper__title">{title}</h3>
        <span className="cardTextWrapper__dateText">
          {date.toLocaleDateString()}
        </span>
        <p className="cardTextWrapper__text">{detail}</p>
      </div>
    </div>
  );
}
