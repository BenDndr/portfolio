import Project from './Project'
import '../style/Projects.css'

const Projects = ({ projects }) => {

    return (
        <div className="projects">
            <h2>Mes Projets</h2>
            <div className="grid1">
                {projects.map((project) => (
                    <Project key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Projects
