import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import useTraining from '../hooks/useTraining';
import { useNavigate } from "react-router-dom";
import '../Styles/CreateUserComp.css';
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

const schema = yup.object().shape({
  name: yup.string().required('Required field'),
  lastName: yup.string().required('Required field'),
  secondLastName: yup.string().required('Required field'),
  email: yup.string().email('Needs email format').required('Required field'),
  currentLocationId: yup.string().required('Required field'),
  user: yup.string().required('Required field'),
  password: yup.string().required('Required field'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required field'),
  phoneNumber: yup.string().required('Required field'),
  cv: yup.string().required('Required field'),
});

function CreateUserComp() {
  // state = {
  //   technologies: []
  // }
  // componentDidMount() {
  //   axios
  //     .get("https://localhost:7140/GetTechnologiesByName")
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ technologies: response.data })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const navigate = useNavigate();
  const { submitMember } = useTraining();
  const handleSubmit = async e => {
    e.preventDefault();
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: '',
        lastName: '',
        secondLastName: '',
        email: '',
        currentLocationId: '',
        user: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        statusId: '',
        cv: '',
        isAdmin: false,
        isMentor: false,
        feedback: '',
      }}
      onSubmit={async (values) => {
        const hola = await submitMember(values)
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
            <Row><div className='titleForm'>Create User</div></Row>
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
                  name="lastName"
                  maxLength="20"
                  placeholder='Rhodes'
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Second name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Smith"
                  name="secondLastName"
                  maxLength="50"
                  value={values.secondLastName}
                  onChange={handleChange}
                  isInvalid={!!errors.secondLastName}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.secondLastName}
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
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Campus</Form.Label>
                <Form.Select
                  name='currentLocationId'
                  value={values.currentLocationId}
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
                  type="password"
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
                  type="password"
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
            <Row>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik109"
                className="position-relative me-5"
              >
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name='statusId'
                  value={values.statusId}
                  onChange={handleChange}
                >
                  <option value="1">Billing</option>
                  <option value="2">Active</option>
                  <option value="3">Mind</option>
                  <option value="4">OnHold</option>
                  <option value="5">Inactive</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik110"
                className="inline-checkbox ms-5"
              >
                <Form.Label></Form.Label>
                <Form.Check
                  type="checkbox"
                  name="isAdmin"
                  value={values.isAdmin}
                  label="Admin"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik111"
                className="inline-checkbox ms-5"
              >
                <Form.Label></Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Mentor"
                  name='isAdmin'
                  value={values.isAdmin}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='mb-2'>
              <Form.Group
                className="position-relative mb-2"
                md="2">
                <Form.Label>CV</Form.Label>
                <Form.Control
                  type="url"
                  required
                  name="cv"
                  onChange={handleChange}
                  isInvalid={!!errors.cv}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.cv}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="feedback"
                  placeholder="(Optional) Made a feedback to the user."
                  value={values.feedback}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <div className='btn-area'>
              <Button type="submit">Create New User</Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default CreateUserComp;