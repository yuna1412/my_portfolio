import { useParams } from "react-router-dom";

import { logs } from "../../../data/logs";

import "../../../styles/pages/logDetail.scss";


export default function LogsDetail() {
  const { id } = useParams();

  const log = logs.find(
    (log) => log.id === Number(id)
  );

  if (!log) {
    return <p>Log not found</p>;
  }

  return (
    <div className="logDetail">
      <section className="logDetailSection">
        <h2 className="logDetailSection__title">
          {log.title}
        </h2>
        <div className="logDetailSectionWrapper">
          <img
            src={log.image}
            alt={log.title}
            className="logDetailSectionWrapper__image"
          />
          <p className="logDetailSectionWrapper__text">
            {log.detail}
          </p>
        </div>
      </section>
    </div>
  );
}
