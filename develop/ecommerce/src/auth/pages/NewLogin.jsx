import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
import { Container, Row, Col } from "reactstrap";
import "../../assets/css/login.css";
import { useDispatch, useSelector } from "react-redux";
// import { useMemo } from "react";
import { startLoginWithEmailPassword } from "../../store/auth/thunks";

export const NewLogin = () => {
  // const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const initialValues = { password: "", email: "" };
  const { email, password, handleForm, handleReset, form } =
    useForm(initialValues);
  // const isAuth = useMemo(() => status === "checking", [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset();
    dispatch(startLoginWithEmailPassword(form));
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <form onSubmit={handleSubmit} className="form mb-5">
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
                value="login"
                className="addTOCart__btn"
                // disabled={isAuth}
              />
            </form>
            <Link to="/auth/register">Crear cuenta</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

