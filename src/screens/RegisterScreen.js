import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import AlertComponent from "../components/AlertComponent";
import Input from "../components/Input";
import SelectComponent from "../components/SelectComponent";
import ValidationComponent from "../components/ValidationComponent";
import { Spinner, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { getFarmAction } from "../actions/farmActions";
import logo from "../logo.png";

function RegisterScreen() {

    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const getFarms = useSelector((state) => state.getFarms);
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [birthdate, setBirthdate] = useState();
    const [gender, setGender] = useState();
    const [role, setRole] = useState();
    const [farm, setFarm] = useState();
    const [password, setPassword] = useState();
    const [password_confirmation, setPasswordConfirmation] = useState();
    const [submitCount, setSubmitCount] = useState(0);
    const [roleFarmerCount, setRoleFarmerCount] = useState(0);
  
  useEffect(() => {

    console.log(farm);
    
    if(submitCount > 0)
    {
        let user = {
          name: name,
          email: email,
          contact: contact,
          birthdate: birthdate,
          gender: gender,
          farm:farm,
          password: password,
          role: role,
          password_confirmation: password_confirmation,
        };

        dispatch(register(user));
        handleResetFields();
    }
  }, [submitCount]);

  useEffect(() => {

  }, [roleFarmerCount]);
  

  const handleResetFields = () => {
    setName("");
    setEmail("");
    setContact("");
    setBirthdate("");
    setGender("");
    setPassword("");
    setRole("");
    setPasswordConfirmation("");
  }

  const handleRole = (e) => {
    const role_data  =e.target.value;

    setRole(role_data);
    if(role_data === "farmer"){
      dispatch(getFarmAction()).then(()=> {
        setRoleFarmerCount(roleFarmerCount + 1);
      })
    }
  }

  const handleRegisterSubmit = (e)=> {
    e.preventDefault();
    setSubmitCount(submitCount+1);
  }

  return (
    <Row>
      <Col md={4}></Col>
      <Col md={4} className="mb-4">
        <center>
          <img src={logo} width={"50%"} />
        </center>
        {userRegister.error && userRegister.loading === false ? (
          <AlertComponent
            id="registerError"
            variant="info"
            content={
              <div>
                <p>
                  <b>{userRegister.error.message}</b>
                </p>{" "}
                <ValidationComponent
                  // Validate Every Fields . . .
                  dataSet={[
                    {
                      valid: userRegister.error.errors.name ? false : true,
                      value: userRegister.error.errors.name
                        ? userRegister.error.errors.name[0]
                        : "Valid Name",
                    },
                    {
                      valid: userRegister.error.errors.email ? false : true,
                      value: userRegister.error.errors.email
                        ? userRegister.error.errors.email[0]
                        : "Valid Email",
                    },
                    {
                      valid: userRegister.error.errors.contact ? false : true,
                      value: userRegister.error.errors.contact
                        ? userRegister.error.errors.contact[0]
                        : "Valid Contact",
                    },
                    {
                      valid: userRegister.error.errors.gender ? false : true,
                      value: userRegister.error.errors.gender
                        ? userRegister.error.errors.gender[0]
                        : "Valid Gender",
                    },
                    {
                      valid: userRegister.error.errors.birthdate ? false : true,
                      value: userRegister.error.errors.birthdate
                        ? userRegister.error.errors.birthdate[0]
                        : "Valid Birthdate",
                    },
                    {
                      valid: userRegister.error.errors.role ? false : true,
                      value: userRegister.error.errors.role
                        ? userRegister.error.errors.role[0]
                        : "Valid Role",
                    },
                    {
                      valid: userRegister.error.errors.password ? false : true,
                      value: userRegister.error.errors.password
                        ? userRegister.error.errors.password[0]
                        : "Valid Password",
                    },
                    {
                      valid: userRegister.error.errors.password_confirmation
                        ? false
                        : userRegister.error.errors.password
                        ? false
                        : true,
                      value: userRegister.error.errors.password_confirmation
                        ? userRegister.error.errors.password_confirmation[0]
                        : userRegister.error.errors.password
                        ? "Password is required to validate this field"
                        : "Valid Password Confirmation",
                    },
                  ]}
                />
              </div>
            }
          />
        ) : userRegister.success && userRegister.loading === false ? (
          <AlertComponent
            id="registerSuccess"
            variant="success"
            content={userRegister.success.message}
          />
        ) : userRegister.loading === true ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : null}
        <Card>
          <Card.Header className="bg-success text-center text-white">
            <h4>E - Farm</h4>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => handleRegisterSubmit(e)}>
              <Input
                controlId="name"
                type="text"
                label="Name"
                value={name}
                func={(e) => setName(e.target.value)}
              />
              <Input
                controlId="email"
                type="email"
                label="Email"
                value={email}
                func={(e) => setEmail(e.target.value)}
              />
              <Input
                controlId="contact"
                type="text"
                label="Contact"
                value={contact}
                func={(e) => setContact(e.target.value)}
              />
              <SelectComponent
                controlId="gender"
                label="Select Gender"
                value={gender}
                func={(e) => setGender(e.target.value)}
                data={[
                  { value: "male", option: "Male" },
                  { value: "female", option: "Female" },
                ]}
              />
              <Input
                controlId="birthdate"
                type="date"
                label="Birthdate"
                value={birthdate}
                func={(e) => setBirthdate(e.target.value)}
              />
              <SelectComponent
                controlId="role"
                label="Select Role"
                value={role}
                func={(e) => handleRole(e)}
                data={[
                  { value: "admin", option: "Admin" },
                  { value: "farmer", option: "Farmer" },
                  { value: "client", option: "Client" },
                ]}
              />
              {role === "farmer" ? (
                getFarms.loading ? (
                  <>
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>{" "}
                    Loading . . .
                  </>
                ) : getFarms.success && getFarms.loading === false ? (
                  <SelectComponent
                    controlId="farm"
                    label="Select Farm"
                    value={farm}
                    func={(e) => setFarm(e.target.value)}
                    data={getFarms.success.data.map((i) => {
                      return {
                        value: i.id,
                        option: i.farm_name,
                      };
                    })}
                  />
                ) : getFarms.error && getFarms.loading === false ? (
                  <AlertComponent
                    id="loginSuccess"
                    variant="success"
                    content={getFarms.error.message}
                  />
                ) : null
              ) : null}
              <Input
                controlId="password"
                type="password"
                label="Password"
                value={password}
                func={(e) => setPassword(e.target.value)}
              />
              <Input
                formGroupClass="mb-2"
                controlId="password_confirmation"
                type="password"
                label="Password Confirmation"
                value={password_confirmation}
                func={(e) => setPasswordConfirmation(e.target.value)}
              />
              <Button variant="success" type="submit">
                Register
              </Button>{" "}
              Click Here to{" "}
              <LinkContainer to="/login">
                <a>Login</a>
              </LinkContainer>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}

export default RegisterScreen;
