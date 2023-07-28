import { Link } from "react-router-dom"

export function Navigation() {

    return (
    <> 
    <section className="Nav-bar"> 
        <a className="logo" alt="builder image" />
        <ul className="Nav-list">
            <li>Home</li>
            <li> <Link to= 'ecom-temp'>  Projects  </Link> </li>
            <li>Contact</li>
        </ul>
    </section>
    </>
    )
  }

