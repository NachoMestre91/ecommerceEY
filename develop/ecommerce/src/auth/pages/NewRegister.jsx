import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
import { Container, Row, Col } from "reactstrap";
import "../../assets/css/login.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

export const NewRegister = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const isChekingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const initialValues = { displayName: "", email: "", password: "" };
  const { email, displayName, password, handleForm, handleReset, form } =
    useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset();
    dispatch(startCreatingUserWithEmailPassword(form));
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <form onSubmit={handleSubmit} className="form mb-5">
              <div className="form__group">
                <input
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={handleForm}
                  placeholder="Ingrese nombre..."
                  className="input-login"
                />
              </div>
              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleForm}
                  placeholder="Ingrese email..."
                  className="input-login"
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleForm}
                  placeholder="Ingrese password..."
                  className="input-login"
                />
              </div>
              <input
                type="submit"
                value="crear usuario"
                className="addTOCart__btn"
                // disabled={isChekingAuthentication}
              />
            </form>
            <Link to="/auth/login">Ir a Login</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


