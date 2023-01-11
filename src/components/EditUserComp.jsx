import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import useTraining from '../hooks/useTraining';

import '../Styles/CreateUserComp.css';

const schema = yup.object().shape({
  name: yup.string().required('Required field'),
  firstName: yup.string().required('Required field'),
  secondName: yup.string().required('Required field'),
  email: yup.string().email('Needs email format').required('Required field'),
  currentLocationId: yup.string().required('Required field'),
  user: yup.string().required('Required field'),
  password: yup.string().required('Required field'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required field'),
  phoneNumber: yup.string().required('Required field'),
  CV: yup.mixed().required('Required field'),
});

function EditUserComp() {
  const navigate = useNavigate();
  const { getMembers,member,submitMember } = useTraining();
  const handleSubmit = async e => {
    e.preventDefault();
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        membersId: member.membersId,
        name: member.name,
        firstName: member.firstName,
        secondName: member.secondName,
        email: member.email,
        user: member.user,
        currentLocationId: member.currentLocationId,
        password: member.password,
        confirmPassword: member.password,
        phoneNumber: member.phoneNumber,
        CV: member.CV,
      }}
      onSubmit={async (values) => {
        const hola = await submitMember(values)
        getMembers();
        naiga
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <div className='ContainerCreateUser'>
          <Form noValidate onSubmit={handleSubmit}>
            <Row><div className='titleForm'>Edit/Delete User</div></Row>
            <Row className="mb-2">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder='James'
                  maxLength="20"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  maxLength="20"
                  placeholder='Rhodes'
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />

                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Second Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Smith"
                  name="secondName"
                  maxLength="50"
                  value={values.secondName}
                  onChange={handleChange}
                  isInvalid={!!errors.secondName}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.secondName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group as={Col} md="6" controlId="validationFormikEmail2">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="WARMACHINEROX@starkindustries.corp"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    maxLength="30"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Rhodeee123"
                  name="user"
                  value={values.user}
                  onChange={handleChange}
                  isInvalid={!!errors.user}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.user}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>Campus</Form.Label>
                <Form.Select
                  name='currentLocationId'
                  onChange={handleChange}
                >
                  <option value="1">Durango</option>
                  <option value="6">Aguascalientes</option>
                  <option value="7">Ciudad de México</option>
                </Form.Select>
              </Form.Group>
              </Row>
              <Row className='mb-2'>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik106"
                className="position-relative"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="mypass123"
                  name="password"
                  maxLength="7"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik107"
                className="position-relative"
              >
                <Form.Label>Confirm</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="mypass123"
                  name="confirmPassword"
                  maxLength="7"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik108"
                className="position-relative"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1234567890"
                  name="phoneNumber"
                  maxLength="10"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.phoneNumber}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='mb-2'>
            <Form.Group
              className="position-relative mb-2"
              md="2">
              <Form.Label>CV</Form.Label>
              <Form.Control
                type="file"
                required
                accept='.word,.pdf'
                name="CV"
                onChange={handleChange}
                isInvalid={!!errors.CV}
                placeholder={values.CV}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.CV}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <div className='btn-area'>
              <Button type="submit">Edit User</Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default EditUserComp;