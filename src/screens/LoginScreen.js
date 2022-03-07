
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import AlertComponent from "../components/AlertComponent";
import Input from "../components/Input";
import { Spinner, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { LinkContainer } from "react-router-bootstrap";

function LoginScreen() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [submitCount, setSubmitCount] = useState(0);

    useEffect(() => {
      if(submitCount > 0){
          dispatch(login(email, password));
      }
    }, [submitCount]);

    useEffect(() => {
      try{
          sendLocationToDashBoard(userLogin.success.data.userInfo.role);
      }catch(e){
        navigate("/login");
      }
    }, [userLogin]);
    

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setSubmitCount(submitCount + 1);
    }

    const sendLocationToDashBoard = (role) => {
        setSubmitCount(0);
        switch (role) {
          case "admin":
            return navigate("/admin-dashboard");
          case "farmer":
            return navigate("/farmer-dashboard");
          case "client":
            return navigate("/client-dashboard");
          default:
            return null;
        }
    };

  return (
    <Row>
      <Col md={4}></Col>
      <Col md={4} className="mt-4">
        <center>
          <img src={logo} width={"50%"} />
        </center>
        {userLogin.error && userLogin.loading === false ? (
          <AlertComponent
            id="loginError"
            variant="danger"
            content={<b>{userLogin.error.message}</b>}
          />
        ) : userLogin.success && userLogin.loading === false ? (
            <AlertComponent
              id="loginSuccess"
              variant="success"
              content={userLogin.success.message}
            />
        ) : userLogin.loading === true ? (
          <>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> Loading . . . 
          </>
        ) : null}
        <Card>
          <Card.Header className="bg-success text-center text-white">
            <h4>Login E - Farm</h4>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => handleLoginSubmit(e)}>
              <Input
                controlId="email"
                type="email"
                label="Email"
                value={email}
                func={(e) => setEmail(e.target.value)}
              />
              <Input
                formGroupClass="mb-2"
                controlId="password"
                type="password"
                label="Password"
                value={password}
                func={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" variant="success">
                Login
              </Button> Click Here to <LinkContainer to='/register'><a>Signup</a></LinkContainer>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}

export default LoginScreen