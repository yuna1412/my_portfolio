import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import { logs } from "../../data/logs";

import "../../styles/pages/log.scss";


export default function Log() {
    const navigate = useNavigate();

    return (
        <div className="log">
            <section className="logSection">
                <h2 className="logSection__title">Log</h2>
                <div className="logSectionWrapper">
                    {logs.map((log) => (
                      <Card
                        key={log.id}
                        id={log.id}
                        image={log.image}
                        title={log.title}
                        date={log.date}
                        detail={log.detail}
                        onClick={(id) => navigate(`/log/${id}`)}
                      />
                    ))}
                </div>
            </section>
        </div>
    );
}

