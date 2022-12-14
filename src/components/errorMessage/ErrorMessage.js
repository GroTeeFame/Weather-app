import error_img from './error.gif';
import error_yellow_img from './error-yellow.gif';


const ErrorMessage = () => {

    return (
        <>
            <img style={{ display: 'block', width: '64px', height: '64px', objectFit: 'contain', margin: '0 auto'}} src={error_img} alt="Error" />
            {/* <img style={{ display: 'block', width: '64px', height: '64px', objectFit: 'contain', margin: '0 auto'}} src={error_yellow_img} alt="Error" /> */}
        </>
    )
}

export default ErrorMessage;