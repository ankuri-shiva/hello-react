import { APP_LOGO } from "../utils/constants"

const Header = () => {
    return(
      <div className="nav-container">
        <img src = {APP_LOGO}
        className="app-logo"
        alt = "app-logo"/> 
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    )
  }

  export default Header