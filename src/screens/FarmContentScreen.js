import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getFarmDetailAction } from "../actions/farmActions";
import { getFarmerByFarmAction } from "../actions/farmerActions";

import NavbarComponent from "../components/NavbarComponent";
import PostCard from "../components/PostCard";
import TableComponent from "../components/table/TableComponent";

import { NavBarSettings } from "../dataSet/NavBarDataSet";
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AlertComponent from '../components/AlertComponent';

function FarmContentScreen() {
    const NavBarData = NavBarSettings();

    let params = useParams();
    const farm_id = params.farm_id;
    const dispatch = useDispatch();
    const getFarm = useSelector((state) => state.getFarm);
    const getFarmersByFarm = useSelector((state) => state.getFarmersByFarm);
    const farmersColumn = React.useMemo(() => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => <p data-letters={row.original.name.charAt(0)}></p>,
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Email",
            accessor: "email",
            filter: "fuzzyText",
          },
          {
            Header: "Contact",
            accessor: "contact",
            filter: "fuzzyText",
          },
          {
            Header: "Birthdate",
            accessor: "birthdate",
            filter: "fuzzyText",
          },
          {
            Header: "Gender",
            accessor: "gender",
            filter: "fuzzyText",
          },
        ],
      },
    ]);

    useEffect(() => {
        dispatch(getFarmDetailAction(farm_id));
        dispatch(getFarmerByFarmAction(farm_id));
    }, [])

  return (
    <div>
      {console.log(getFarmersByFarm)}
      <NavbarComponent data={NavBarData} />
      <Container className="mb-5">
        <p>
          <LinkContainer to="/farmers-group">
            <a>Farmers Group</a>
          </LinkContainer>
          /Content
        </p>

        {getFarm.loading ? (
          <>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>{" "}
            Loading . . .
          </>
        ) : getFarm.success && getFarm.loading === false ? (
          <PostCard
            md={6}
            title={getFarm.success.data.farm_name}
            description={getFarm.success.data.farm_description}
            created_at={getFarm.success.data.created_at}
            body={null}
          />
        ) : (
          <></>
        )}

        <h4>Posts</h4>
        <h4>Transactions</h4>
        <h4>Farmers</h4>
        {getFarmersByFarm.loading ? (
          <>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>{" "}
            Loading . . .
          </>
        ) : getFarmersByFarm.success && getFarmersByFarm.loading === false ? (
          <>
            <TableComponent
              data={getFarmersByFarm.success.data || []}
              columns={farmersColumn}
            />
          </>
        ) : getFarmersByFarm.error && getFarmersByFarm.loading === false ? (
          <AlertComponent
            id="errorFarmers"
            variant="danger"
            content={getFarmersByFarm.error.message}
          />
        ) : null}
      </Container>
    </div>
  );
}

export default FarmContentScreen