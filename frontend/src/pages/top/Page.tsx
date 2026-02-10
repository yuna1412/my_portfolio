import ContentSection from "./parts/ContentSection";
import "../../styles/pages/top.scss";

export default function Top() { 
    return (
        <section>
            <div className="top">
                <ContentSection title="Projects" />
                <ContentSection title="Log" />
            </div>
        </section>
    );
}
