import Project from './Project'

const Projects = ({ projects }) => {

    return (
        
        <div className="projects" id="projectid">
            <center><h2>Mes projets</h2></center>
            <p>Voici un échantillon des différents projets sur lesquels j'ai travaillé durant ma formation ou à titre personnel.</p>
            <div className="grid1">
                {projects.map((project) => (
                    <Project key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Projects
