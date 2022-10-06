import { Link } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useForm } from "../../hooks/useForm";
import "../../assets/css/login.css";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { startLoginWithEmailPassword } from "../../store/auth/thunks";

const NewLogin = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const initialValues = { password: "", email: "" };
  const { email, password, handleForm, handleReset, form } =
    useForm(initialValues);
  const isAuth = useMemo(() => status === "checking", [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset();
    console.log(form);
    dispatch(startLoginWithEmailPassword(form));
  };

  return (
    <Helmet title="Loguearse">
      <CommonSection title="Mi cuenta" />
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
                  disabled={isAuth}
                />
              </form>
              <Link to="/register">Crear cuenta</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default NewLogin;
