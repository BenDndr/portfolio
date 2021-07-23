import PropTypes from 'prop-types';

const Counter = ({ count, click }) => {

    return (
        <div>    
            <p>{count}</p>
            <button onClick={() => click(count)} className="btn btn-danger">+1</button>
        </div>
    );
}

Counter.defaultProps = {
    count: 0,
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    click: PropTypes.func.isRequired,
}

export default Counter
