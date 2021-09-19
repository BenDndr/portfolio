import PropTypes from "prop-types";

const Youtubevid = ({embedId}) => {
    return (
        <div id="vidid">
            <center><h2>Vidéo de présentation de Dare to Go au Wagon Bordeaux</h2></center>
            <p className="t13rem">
                Au cours de ma formation au <a href="https://www.lewagon.com/fr/bordeaux"><strong>Wagon Bordeaux</strong></a>, 
                J'ai travaillé sur un projet de groupe que j'ai eu la chance
                présenter à la fin de la formation, vous trouverez ci-dessous
                vidéo de la présentation de mon projet, Dare to Go (5min30), et des autres projets de
                de la promotion.
            </p>
            <div className="video-responsive" >
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
)}

Youtubevid.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default Youtubevid
