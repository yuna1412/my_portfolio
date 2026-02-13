import "../../../styles/pages/projectsDetail.scss";

export default function ProjectsDetail() { 
    return (
        <div className="projectsDetail">
            <section className="projectsDetailSection">
                <h2 className="projectsDetailSection__title">タイトル</h2>
                <div className="projectsDetailSectionWrapper">
                    <img src="/images/sample03.jpg" alt="Sample Project Image" className="projectsDetailSectionWrapper__image" />
                    <p className="projectsDetailSectionWrapper__text">プロジェクトの詳細説明がここに表示されます。</p>
                </div>
            </section>
        </div>
    );
}
