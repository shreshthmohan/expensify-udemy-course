import {Link} from 'react-router-dom';

const NotFound = () => {
    return (<div>
        Page does not exist. 404. <Link to="/">Go Home</Link>
    </div>
    );
};

export default NotFound;
