import PropTypes from 'prop-types';

const Counter = ({ count, click1, click2, click3 }) => {

    return (
        <div className="counter"> 
            <center><h2>{count}</h2></center>   
            <center>
            <button 
                onClick={() => click1(count)} 
                className="btn btn-danger">
                    +1
            </button>
            <button 
                onClick={() => click3(count)} 
                className="btn btn-success">
                    Reset
            </button>
            <button 
                onClick={() => click2(count)} 
                className="btn btn-warning">
                    -1
            </button>
            </center>
        </div>
    );
}

Counter.defaultProps = {
    count: 1,
}

Counter.propTypes = {
    count: PropTypes.number,
    click1: PropTypes.func.isRequired,
    click2: PropTypes.func.isRequired,
    click3: PropTypes.func.isRequired,
}

export default Counter
