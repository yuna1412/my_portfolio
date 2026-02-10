import Card from "../../../components/ui/Card";

type ContentSectionProps = {
  title: string;
};

export default function ContentSection({ title }: ContentSectionProps) {
    return (
        <section className="contentSection">
            <h2 className="contentSection__title">{title}</h2>
            <div className="contentSectionWrapper">
                <Card title="Card" date={new Date(2023, 5, 15)} detail="This is the first card." />
                <Card title="Card2" date={new Date(2023, 5, 16)} detail="This is the second card." />
                <Card title="Card3" date={new Date(2023, 5, 17)} detail="This is the third card." />
                <Card title="Card4" date={new Date(2023, 5, 18)} detail="This is the fourth card." />
            </div>
        </section>
    );
}
