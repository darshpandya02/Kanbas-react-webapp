import { Link } from "react-router-dom";
import Nav from "../../Nav";
function HelloWorld() {
  return (
    <div>
      <Nav />
      {/* <Link to="/Hello">Hello World</Link>
      <br />
      <Link to="/Labs">Labs</Link>
      <br />
      <Link to="/Kanbas">Kanbas</Link>
      <br /> */}
      <h2>Hello World!</h2>
    </div>
  );
}

export default HelloWorld;
