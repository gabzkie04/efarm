import React, {useEffect} from 'react'

import { useDispatch, useSelector } from "react-redux";
import {
  getFarmerAction,
  getFarmerDetailAction,
} from "../actions/farmerActions";

import { Container, Spinner } from 'react-bootstrap';
import NavbarComponent from "../components/NavbarComponent";
import { NavBarSettings } from "../dataSet/NavBarDataSet";
import TableComponent from "../components/table/TableComponent";

import '../App.css';
import AlertComponent from '../components/AlertComponent';
function FarmersScreen() {

    const dispatch = useDispatch();
    const getFarmer = useSelector((state) => state.getFarmer);
    const getFarmers = useSelector((state) => state.getFarmers);

    const NavBarData = NavBarSettings();
    const columns = React.useMemo(() => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => (
            <p data-letters={row.original.name.charAt(0)}></p>
        ),
      },
      {
        Header: "Farmers",
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
          {
            Header: "Farm",
            accessor: "farm_name",
            filter: "fuzzyText",
          },
        ],
      },
    ]);

    useEffect(() => {
        dispatch(getFarmerAction());
    }, [])
    
    
  return (
    <div>
      {console.log(getFarmers.success)}
      <NavbarComponent data={NavBarData} />
      <Container>
        {getFarmers.loading ? (
          <>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>{" "}
            Loading . . .
          </>
        ) : getFarmers.success && getFarmers.loading === false ? (
          <TableComponent data={getFarmers.success.data || []} columns={columns} />
        ) : getFarmers.error && getFarmers.loading === false ? (
          <AlertComponent
            id="errorFarmers"
            variant="danger"
            content={getFarmers.error.message}
          />
        ) : null}
      </Container>
    </div>
  );
}
export default FarmersScreen