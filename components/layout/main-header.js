import Link from "next/link"
import classes from "./main-header.module.css"
const Header = (props) => {
    return <header>
        <div>
            <Link href="/">NextEvents</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href="/events">Browse all Events</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default Header;