import React,{useState, useEffect} from 'react';
import { Row, Col, Container, Button, FormControl, Spinner } from "react-bootstrap";

import TotalCard from "../components/TotalCard";
import NavbarComponent from "../components/NavbarComponent";
import PostCard from "../components/PostCard";
import InputGroupComp from "../components/InputGroupComp";
import {NavBarSettings} from "../dataSet/NavBarDataSet";

import { useDispatch, useSelector } from "react-redux";
import { getTotalFarmerAction } from "../actions/farmerActions";
import AlertComponent from '../components/AlertComponent';

function AdminDashboardScreen() {

  const NavBarData = NavBarSettings();
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const getFarmersTotal = useSelector((state) => state.getFarmersTotal);

  useEffect(() => {
    dispatch(getTotalFarmerAction());
  }, [])
  
  const handleSearch = () => {
    alert("Searching .. . ");
  }
  return (
    <div>
      <NavbarComponent data={NavBarData} />
      <Container>
        <Row className="mb-4">
          {getFarmersTotal.loading ? (
            <>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>{" "}
              Loading . . .
            </>
          ) : getFarmersTotal.success && getFarmersTotal.loading === false ? (
            <TotalCard
              color="success"
              icon={"fa fa-user"}
              md={4}
              title={"Total Farmers"}
              value={getFarmersTotal.success.total_farmers}
            />
          ) : getFarmersTotal.error && getFarmersTotal.loading === false ? (
            <AlertComponent
              id="errorFarmers"
              variant="danger"
              content={getFarmersTotal.error.message}
            />
          ) : null}

          <TotalCard
            color="primary"
            icon={"fa fa-users"}
            md={4}
            title={"Total Client"}
            value={1}
          />
          <TotalCard
            color="warning"
            icon={"fa fa-list"}
            md={4}
            title={"Total Transactions"}
            value={0}
          />
        </Row>
        <Row>
          <Col md={2}>
            <h4>Posts</h4>
          </Col>
          <Col md={6}></Col>
          <Col md={4} className="mb-2">
            <InputGroupComp
              dataSet={[
                {
                  comp: (
                    <FormControl
                      placeholder="Search Post"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  ),
                },
                {
                  comp: <Button onClick={() => handleSearch()}>Search</Button>,
                },
              ]}
            />
          </Col>
          <PostCard
            md={4}
            image={
              "https://media.istockphoto.com/photos/dairy-and-corn-farm-eastern-minnesota-picture-id482956100"
            }
            title={"Sample Title"}
            description={"Sample Description"}
            created_at={"07/08/2022"}
            body={
              <>
                <Button>View More</Button>
              </>
            }
          />
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboardScreen