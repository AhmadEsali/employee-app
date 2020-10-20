import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const response = await axios.get(
        'http://localhost:5000/api/v1/employees'
      );
      setEmployees(response.data.data);
    };

    getEmployees();
  }, []);

  const clickDeleteEmployeeHandler = async (employeeId) => {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/employees/${employeeId}`
    );
    if (response.data.success) {
      setEmployees(employees.filter((employee) => employeeId !== employee.id));
    }
  };

  return (
    <Container>
      <Row className='m-4'>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>address</th>
                <th>zipcode</th>
                <th>email</th>
                <th>photo</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {employees &&
                employees.map((employee) => {
                  const {
                    address = '',
                    name = '',
                    email = '',
                    id = '',
                    zipcode = '',
                    photo,
                  } = employee;
                  return (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>{address}</td>
                      <td>{zipcode}</td>
                      <td>{email}</td>
                      <td>
                        <img src={photo} />
                      </td>
                      <td>
                        <Button as={Link} to='/edit' variant='primary'>
                          <i className='fas fa-edit'></i>
                        </Button>
                        <Button
                          variant='danger'
                          className='ml-1'
                          onClick={() => clickDeleteEmployeeHandler(id)}
                        >
                          <i className='fa fa-trash' aria-hidden='true'></i>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Employees;
