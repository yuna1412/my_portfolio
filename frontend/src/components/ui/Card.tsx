import "../../styles/components/ui/card.scss";

type CardProps = {
  title: string;
  date: Date;
  detail: string;
};

export default function Card({ title, date, detail }: CardProps) { 
    return (
        <div className="card">
            <img src="/images/sample01.jpg" alt="Sample Image" className="card__image" />
            <div className="cardTextWrapper">
                <h3 className="cardTextWrapper__title">{title}</h3>
                <span className="cardTextWrapper__dateText">{date.toLocaleDateString()}</span>
                <p className="cardTextWrapper__text">{detail}</p>
            </div>
        </div>
    );
}
