import { Link } from "react-router-dom"


const MainNavigationBar = () => {
  return (
<header>
    <nav>
        <ul>
            <li>
                <Link to="/" > Home</Link>
            </li>
        </ul>
    </nav>
</header>
  )
}

export default MainNavigationBar