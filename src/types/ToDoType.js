import PropTypes from 'prop-types';

export default PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    editing: PropTypes.bool.isRequired
});