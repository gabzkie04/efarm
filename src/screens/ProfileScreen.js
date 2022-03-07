import React, {useEffect} from 'react'
import NavbarComponent from "../components/NavbarComponent";
import { NavBarSettings } from "../dataSet/NavBarDataSet";
import UserCard from "../components/UserCard";
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../actions/userActions";
import { Spinner } from 'react-bootstrap';

function ProfileScreen() {
  const NavBarData = NavBarSettings();

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  useEffect(() => {
    dispatch(profile())
  }, [])
  
  return (
    <>
      <NavbarComponent data={NavBarData} />
      <Container>
        {userProfile.loading ? (
          <>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            Loading . . .
          </>
        ) : userProfile.success && userProfile.loading === false ? (
          <UserCard
            md={6}
            name={userProfile.success.data.name}
            role={userProfile.success.data.role}
            contact={userProfile.success.data.contact}
            email={userProfile.success.data.email}
            birthdate={userProfile.success.data.birthdate}
          />
        ) : (
          <>User Profile Not Found!</>
        )}
      </Container>
    </>
  );
}

export default ProfileScreen