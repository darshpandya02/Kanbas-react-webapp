import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to={`/project/home`}>Home</Link>
        </li>
        <li className="list-group-item">
          <Link to={`/project/search`}>Search</Link>
        </li>
        <li className="list-group-item">
          <Link to={`/project/signin`}>Signin</Link>
        </li>
        <li className="list-group-item">
          <Link to={`/project/signup`}>SignUp</Link>
        </li>
        <li className="list-group-item">
          <Link to={`/project/account`}>Account</Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
