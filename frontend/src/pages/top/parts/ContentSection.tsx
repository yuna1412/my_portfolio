import { useNavigate } from "react-router-dom";

import Card from "../../../components/ui/Card";


type Item = {
  id: number;
  image: string;
  title: string;
  date: Date;
  detail: string;
};

type ContentSectionProps = {
  title: string;
  data: Item[];
  basePath: string;
};


export default function ContentSection({ title, data, basePath }: ContentSectionProps) {
  const navigate = useNavigate();

  return (
      <section className="contentSection">
          <h2 className="contentSection__title">{title}</h2>
          <div className="contentSectionWrapper">
            {data.slice(0, 4).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                date={item.date}
                detail={item.detail}
                onClick={() =>
                  navigate(`${basePath}/${item.id}`)
                }
              />
            ))}
          </div>
      </section>
  );
}
