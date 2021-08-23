import '../style/Projects.css'

const Project = ({project}) => {
    return (
        <div className="project-box">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </div>
    )
}

export default Project
