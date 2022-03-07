import React, {useState, useEffect} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { getFarmAction } from "../actions/farmActions";

import Input from '../components/Input';
import NavbarComponent from "../components/NavbarComponent";
import PostCard from '../components/PostCard';
import SelectComponent from '../components/SelectComponent';
import { NavBarSettings } from "../dataSet/NavBarDataSet";
function TransactionsScreen() {
    const NavBarData = NavBarSettings();

    const dispatch = useDispatch();
    const getFarms = useSelector((state) => state.getFarms);

    const [farm, setFarm] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [status, setStatus] = useState();
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
     dispatch(getFarmAction());
    }, [])
    

    const handleSubmitForm = (e)=> {
      e.preventDefault();
        alert("apyts");
        console.log(image)
    }

    const handleToggle = () => {
      if(toggle === true) {
        setToggle(false)
      }else{
        setToggle(true);
      }
    }

  return (
    <div>
      <NavbarComponent data={NavBarData} />
      <Button size={"sm"} onClick={() => handleToggle()}>
        <i className="fa fa-edit"></i>
      </Button>
      <Container>
        <Row>
          {toggle ? (
            <Col md={4}>
              <h4>Post Details </h4>
              <Form
                onSubmit={(e) => {
                  handleSubmitForm(e);
                }}
              >
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
                <Input
                  controlId="title"
                  type="text"
                  label="Title"
                  value={title}
                  func={(e) => setTitle(e.target.value)}
                />
                <Input
                  controlId="description"
                  type="text"
                  label="Description"
                  value={description}
                  func={(e) => setDescription(e.target.value)}
                />
                <Input
                  formGroupClass="mb-2"
                  controlId="image"
                  type="file"
                  label="Image"
                  func={(e) => setImage(e.target.files[0])}
                />
                <Button type="submit">Add Post</Button>
              </Form>
            </Col>
          ) : null}

          <Col md={toggle ? 8 : 12}>
            <Row>
              <PostCard
                md={toggle ? 6 : 4}
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
              <PostCard
                md={toggle ? 6 : 4}
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
              <PostCard
                md={toggle ? 6 : 4}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TransactionsScreen