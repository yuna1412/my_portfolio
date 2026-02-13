import Card from "../../components/ui/Card";
import "../../styles/pages/log.scss";

const cards = [
  { title: "タイトル", date: new Date(), detail: "This is the first card.This is the first card.This is the first card.This is the first card." },
  { title: "タイトル", date: new Date(), detail: "This is the second card.This is the second card.This is the second card.This is the second card." },
  { title: "タイトル", date: new Date(), detail: "This is the third card.This is the third card.This is the third card.This is the third card.This is the third card." },
  { title: "タイトル", date: new Date(), detail: "This is the fourth card.This is the fourth card.This is the fourth card.This is the fourth card.This is the fourth card." },
  { title: "タイトル", date: new Date(), detail: "This is the fifth card." },
];

export default function Log() { 
    return (
        <div className="log">
            <section className="logSection">
                <h2 className="logSection__title">Log</h2>
                <div className="logSectionWrapper">
                    {cards.map((card, index) => (
                        <Card
                          key={index}
                          title={card.title}
                          date={card.date}
                          detail={card.detail}
                        />
                      ))}
                </div>
            </section>
        </div>
    );
}

