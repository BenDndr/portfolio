import React from 'react'

const Skills = () => {
    return (
        <div id="skillid">
            <center><h2>Mes compétences</h2></center> 
            <div className="black-div">
                Je travaille avec les technologies et les outils suivants

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
                    <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="logo PostGreSQL" /> PostGreSQL</div>
                    <div><img src="data:image/png;base64,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" alt="logo Cloudinary" /> Cloudinary</div>
                    <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="logo Bootstrap" /> Bootstrap</div>
                    <div><img src="https://www.drupal.org/files/project-images/font_awesome_logo.png" alt="logo FontAwesome" /> Font Awesome</div>
                </div>
            </div>
        </div>
    )
}

export default Skills
