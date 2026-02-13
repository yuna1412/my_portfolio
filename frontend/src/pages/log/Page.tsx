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

// import { useNavigate } from "react-router-dom";

// import Card from "../../components/ui/Card";
// import { projects } from "../../data/projects";

// import "../../styles/pages/projects.scss";


// export default function Projects() { 
//     const navigate = useNavigate();


//     return (
//         <div className="projects">
//             <section className="projectsSection">
//                 <h2 className="projectsSection__title">Projects</h2>
//                 <div className="projectsSectionWrapper">
//                     {projects.map((project) => (
//                       <Card
//                         key={project.id}
//                         id={project.id}
//                         image={project.image}
//                         title={project.title}
//                         date={project.date}
//                         detail={project.detail}
//                         onClick={(id) => navigate(`/projects/${id}`)}
//                       />
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// }
