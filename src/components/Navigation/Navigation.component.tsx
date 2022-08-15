import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { paths } from "constants";

export const Navigation = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>React-Playground</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <>
              {paths.map(({ path, name }) => (
                <Link to={path}>{name}</Link>
              ))}
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
