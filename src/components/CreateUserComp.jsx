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

const schema = yup.object().shape({
  name: yup.string().required('Required field'),
  LastName: yup.string().required('Required field'),
  SecondLastName: yup.string().required('Required field'),
  Email: yup.string().email('Needs email format').required('Required field'),
  currentLocationId: yup.string().required('Required field'),
  user: yup.string().required('Required field'),
  password: yup.string().required('Required field'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required field'),
  phoneNumber: yup.string().required('Required field'),
  CV: yup.string().required('Required field'),
});

function CreateUserComp() {
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
        LastName: '',
        SecondLastName: '',
        email: '',
        user: '',
        currentLocationId: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        CV: '',
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
                  name="LastName"
                  maxLength="20"
                  placeholder='Rhodes'
                  value={values.LastName}
                  onChange={handleChange}
                  isValid={touched.LastName && !errors.LastName}
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
                  name="SecondLastName"
                  maxLength="50"
                  value={values.SecondLastName}
                  onChange={handleChange}
                  isInvalid={!!errors.SecondLastName}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.SecondLastName}
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
            <Row className='mb-2'>
            <Form.Group
              className="position-relative mb-2"
              md="2">
              <Form.Label>CV</Form.Label>
              <Form.Control
                type="text"
                required
                name="CV"
                onChange={handleChange}
                isInvalid={!!errors.CV}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.CV}
              </Form.Control.Feedback>
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