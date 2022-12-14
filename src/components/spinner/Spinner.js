import spinner_img from './spinner.gif';

import './spinner.scss';

const Spinner = () => {

    return (
        <div className='spinner-wrapper'>
            <img style={{ display: 'block', width: '64px', height: '64px', objectFit: 'contain', margin: '0 auto'}} src={spinner_img} alt="Spinner" />
        </div>
    )
}

export default Spinner;