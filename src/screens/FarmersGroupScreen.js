import React, {useState, useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFarmAction, addFarmAction } from "../actions/farmActions";

import NavbarComponent from "../components/NavbarComponent";
import PostCard from "../components/PostCard";
import AlertComponent from "../components/AlertComponent";

import { NavBarSettings } from "../dataSet/NavBarDataSet";
import { Row, Col, Container, Button, Spinner, Form } from "react-bootstrap";
import Input from "../components/Input";
import { LinkContainer } from "react-router-bootstrap";

function FarmersGroupScreen() {

  const NavBarData = NavBarSettings();
  const [farm_name, setFarmName] = useState();
  const [farm_description, setFarmDescription] = useState();
  const [no_of_farmers, setNoOfFarmers] = useState();

  const dispatch = useDispatch();
  const addFarm = useSelector((state) => state.addFarm);
  const getFarms = useSelector((state) => state.getFarms);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getFarmAction());
  }, [count]);

  const addFarmHandler = (e) => {
    e.preventDefault();

    const farm_data = {
      farm_name: farm_name,
      farm_description: farm_description,
      no_of_farmers: no_of_farmers
    };
    dispatch(addFarmAction(farm_data)).then(() => setCount(count + 1))
  }

  return (
    <div>
      <NavbarComponent data={NavBarData} />
      <Container>
        <Row>
          <Col md={4}>
            {addFarm.loading ? (
              <>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>{" "}
                Loading . . .
              </>
            ) : addFarm.success && addFarm.loading === false ? (
              <>
              
                <AlertComponent
                  id="addFarmSuccess"
                  variant="success"
                  content={<b>{addFarm.success.message}</b>}
                />
              </>
            ) : addFarm.error ? (
              <AlertComponent
                id="addFarmError"
                variant="danger"
                content={<b>{addFarm.error.message}</b>}
              />
            ) : null}
            <Form
              onSubmit={(e) => {
                addFarmHandler(e);
              }}
            >
              <Input
                controlId="farm_name"
                type="text"
                label="Farm Name"
                value={farm_name}
                func={(e) => setFarmName(e.target.value)}
              />
              <Input
                controlId="description"
                type="text"
                label="Description"
                value={farm_description}
                func={(e) => setFarmDescription(e.target.value)}
              />
              <Input
                controlId="no_of_farmers"
                type="number"
                label="No. of Farmers"
                value={no_of_farmers}
                func={(e) => setNoOfFarmers(e.target.value)}
                formGroupClass="mb-2"
              />
              <Button type="submit">Add Farm</Button>
            </Form>
          </Col>
          <Col md={8}>
            <Row>
              {getFarms.loading ? (
                <>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>{" "}
                  Loading . . .
                </>
              ) : getFarms.success && getFarms.loading === false ? (
                getFarms.success.data.length === 0 ? (
                  <>No Farm found.</>
                ) : (
                  getFarms.success.data.map((i) => {
                    return (
                      <PostCard
                        md={6}
                        title={i.farm_name}
                        description={i.farm_description}
                        created_at={i.created_at}
                        body={
                          <>
                            <LinkContainer to={"/farm-group-content/" + i.id}>
                              <Button>Add More</Button>
                            </LinkContainer>
                          </>
                        }
                      />
                    );
                  })
                )
              ) : null}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FarmersGroupScreen;
