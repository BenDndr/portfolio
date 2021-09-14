
const Project = ({project}) => {
    const imgUrl = project.imgurl
    var divStyle = {
        backgroundImage: 'url(' + imgUrl + ')'
    }

    return (
        <a href={project.url} className="project-link">
        <div className="project-box">
            <div className="img-project" style={divStyle}></div>
            <h3>{project.name}</h3>
            <div className="project-desc">
                <p>{project.description}</p>
            </div>
        </div>
        </a>
    )
}

export default Project
