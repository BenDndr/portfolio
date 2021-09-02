import React from 'react'
import '../style/Skills.css'

const Skills = () => {
    return (
        <div className="black-div">
            Je travaille avec les technologies suivantes

            <h3>Languages:</h3>
           
            <div className="grid">
                <div><img src="https://e7.pngegg.com/pngimages/810/604/png-clipart-ruby-on-rails-programming-language-rubygems-web-application-ruby-angle-logo.png" alt="logo ruby" /> Ruby</div>
                <div><img src="https://www.blog-nouvelles-technologies.fr/wp-content/uploads/2016/04/html5-logo-1-512x500.png" alt="logo HTML5" /> HTML5</div>
                <div><img src="https://www.pinclipart.com/picdir/middle/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png" alt="logo CSS" /> CSS</div>
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="logo JavaScript" /> JavaScript</div>
                <div><img src="https://e7.pngegg.com/pngimages/689/806/png-clipart-database-management-system-computer-icons-relational-model-bases-de-datos-angle-data.png" alt="logo SQL" /> SQL</div>
            </div>  

            <h3>Frameworks:</h3>
            <div className="grid">
                <div><img src="https://www.imagile.fr/wp-content/uploads/2017/12/logo-ror-300x300.png" alt="logo rails" /> Rails</div>
                <div><img src="https://blog.emberjs.com/images/logos/e-icon.png" alt="logo emberjs" /> Emberjs</div>
                <div><img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png" alt="logo react" /> ReactJS</div> 
            </div>

            <h3>Outils:</h3>
            <div className="grid">
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="logo Github" /> Github</div>
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="logo Bootstrap" /> Bootstrap</div>
            </div>
        </div>
    )
}

export default Skills
