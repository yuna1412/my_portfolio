import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import { projects } from "../../data/projects";

import "../../styles/pages/projects.scss";


export default function Projects() { 
    const navigate = useNavigate();


    return (
        <div className="projects">
            <section className="projectsSection">
                <h2 className="projectsSection__title">Projects</h2>
                <div className="projectsSectionWrapper">
                    {projects.map((project) => (
                      <Card
                        key={project.id}
                        id={project.id}
                        image={project.image}
                        title={project.title}
                        date={project.date}
                        detail={project.detail}
                        onClick={(id) => navigate(`/projects/${id}`)}
                      />
                    ))}
                </div>
            </section>
        </div>
    );
}
