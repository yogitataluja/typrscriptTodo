
// import { Link } from 'react-router-dom'

import { Link, useSearchParams } from "react-router-dom"

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const status=searchParams.get('todo');

  return (
    <nav>
    <Link to="/" className={`${!status && "active"}`}>
ALL
    </Link>
    <Link to={`/?todo=active`} className={`${status==="active" && "active"}`}>
ACTIVE
    </Link>
    <Link to={`/?todo=completed`} className={`${status==="completed" && "active"}`}>
    COMPLETED
    </Link>

    </nav>

  )
}

export default Navbar