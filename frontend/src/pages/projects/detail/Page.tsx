import { useParams } from "react-router-dom";

import { projects } from "../../../data/projects";

import "../../../styles/pages/projectsDetail.scss";


export default function ProjectsDetail() {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="projectsDetail">
      <section className="projectsDetailSection">
        <h2 className="projectsDetailSection__title">
          {project.title}
        </h2>
        <div className="projectsDetailSectionWrapper">
          <img
            src={project.image}
            alt={project.title}
            className="projectsDetailSectionWrapper__image"
          />
          <p className="projectsDetailSectionWrapper__text">
            {project.detail}
          </p>
        </div>
      </section>
    </div>
  );
}
