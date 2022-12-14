import { Search } from '../search/Search';
import './header.scss';
import twitter from '../../resources/icons/twitter.png'
import facebook from '../../resources/icons/facebook.png'


export const Header = (props) => {


    return (
        <>
            <div className='header-wrapper'>
                <div className='header-title'>
                    <span>Weather app</span>
                </div>
                <div className='header-end'>
                    <img className='icon' src={twitter} alt="twitter" />
                    <img className='icon' src={facebook} alt="facebook" />
                    <button className='support'> support </button>
                </div>
            </div>
            <div className='search-wrapper'>
                <Search/>
            </div>
        </>
    )

}