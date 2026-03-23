import { Link } from "react-router-dom"

function Navigation () {
    return (
        <>
        <Link to="/">Home |</Link>
        <Link to="/About">About |</Link>
        <Link to="/Contacts">Contacts |</Link>
        <Link to="/Services">Services |</Link>
        <Link to="/book-request">Book Request |</Link>
        <Link to="/event-feedback">Event Feedback </Link>
        </>
    )
}
export default Navigation