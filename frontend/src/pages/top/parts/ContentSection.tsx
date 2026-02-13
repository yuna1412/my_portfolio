import Card from "../../../components/ui/Card";

type ContentSectionProps = {
  title: string;
};

const cards = [
  { title: "タイトル", date: new Date(), detail: "This is the first card.This is the first card.This is the first card.This is the first card." },
  { title: "タイトル", date: new Date(), detail: "This is the second card.This is the second card.This is the second card.This is the second card." },
  { title: "タイトル", date: new Date(), detail: "This is the third card.This is the third card.This is the third card.This is the third card.This is the third card." },
  { title: "タイトル", date: new Date(), detail: "This is the fourth card.This is the fourth card.This is the fourth card.This is the fourth card.This is the fourth card." },
  { title: "タイトル", date: new Date(), detail: "This is the fifth card." },
];

export default function ContentSection({ title }: ContentSectionProps) {
    return (
        <section className="contentSection">
            <h2 className="contentSection__title">{title}</h2>
            <div className="contentSectionWrapper">
                {cards.slice(0, 4).map((card, index) => (
                    <Card
                      key={index}
                      title={card.title}
                      date={card.date}
                      detail={card.detail}
                    />
                  ))}
            </div>
        </section>
    );
}
