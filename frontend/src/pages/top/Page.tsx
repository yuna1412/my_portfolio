import { projects } from "../../data/projects";
import { logs } from "../../data/logs";

import ContentSection from "./parts/ContentSection";

import "../../styles/pages/top.scss";

export default function Top() { 
    return (
        <div className="top">
            <ContentSection
                title="Projects"
                data={projects}
                basePath="/projects"
              />

              <ContentSection
                title="Log"
                data={logs}
                basePath="/log"
              />
        </div>
    );
}
