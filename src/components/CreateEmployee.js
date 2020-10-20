import React, { useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const CreateEmployee = () => {
  const [formFields, setFormFields] = useState({});

  const history = useHistory();

  const changeFieldHandler = async (e) => {
    if (e.target.name === 'photo') {
      const photo = e.target.files[0];

      setFormFields({
        ...formFields,
        photo,
      });
      return;
    }
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const clickSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', formFields.photo);
    formData.append('name', formFields.name);
    formData.append('zipcode', formFields.zipcode);
    formData.append('address', formFields.address);
    formData.append('location', formFields.location);
    formData.append('email', formFields.email);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/employees`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (response.data.success) {
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row className='m-4'>
        <Col>
          <Form onSubmit={clickSubmitHandler}>
            <Form.Group>
              <Form.Label htmlFor='name'>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                id='name'
                value={formFields['name'] || ''}
                placeholder='Enter your name'
                onChange={(e) => changeFieldHandler(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                id='email'
                value={formFields['email'] || ''}
                placeholder='Enter email'
                onChange={(e) => changeFieldHandler(e)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='zipcode'> Zip code</Form.Label>
              <Form.Control
                type='text'
                name='zipcode'
                id='zipcode'
                value={formFields['zipcode'] || ''}
                placeholder='Zip code'
                onChange={(e) => changeFieldHandler(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='address'>Address</Form.Label>
              <Form.Control
                type='text'
                name='address'
                id='address'
                value={formFields['address'] || ''}
                placeholder='Address'
                onChange={(e) => changeFieldHandler(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='location'>Location</Form.Label>
              <Form.Control
                type='text'
                name='location'
                id='location'
                value={formFields['location'] || ''}
                placeholder='location'
                onChange={(e) => changeFieldHandler(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                id='photo'
                name='photo'
                label='upload photo'
                onChange={(e) => changeFieldHandler(e)}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateEmployee;
