import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import '../Styles/CreateUserComp.css';

const schema = yup.object().shape({
  name: yup.string().matches(/^[a-zA-Z]+$/, "Only letters allowed").required('Required field'),
  lastName: yup.string().matches(/^[a-zA-Z]+$/, "Only letters allowed").required('Required field'),
  email: yup.string().required('Required field'),
  username: yup.string().required('Required field'),
  campus: yup.string().matches(/^[a-zA-Z]+$/, "Only letters allowed").required('Required field'),
  password: yup.string().required('Required field'),
  confirmPassword: yup.string().required('Required field'),
  phoneNumber: yup.string().matches(/^[0-9]+$/, "Only numbers allowed").required('Required field'),
  CV: yup.mixed().required('Required field')
});

const CreateUserComp = () => {

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values) => {
        console.log("Ya estas dentro")
        await clienteAxios.post(
          "/PostMember",
          values
        )
      }}
      initialValues={{
        name: '',
        lastName: '',
        email: '',
        username: '',
        city: '',
        campus: '',
        zip: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        CV: null,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors
      }) => (
        <div className='ContainerCreateUser'>
          <Form noValidate >
            <div className='titleForm'>
              Create New User:
            </div>
            <Row className="mb-3">
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
                <Form.Label>Last name</Form.Label>
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
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder='James'
                  maxLength="10"
                  value={values.username}
                  onChange={handleChange}
                  isValid={touched.username && !errors.username}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationFormikEmail2">
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
                md="4"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>Campus</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="LA"
                  name="campus"
                  value={values.campus}
                  onChange={handleChange}
                  isInvalid={!!errors.campus}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.campus}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
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
                  minLength="7"
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
            <Row className='mb-3'>
              <Form.Group
                md="2">
                <Form.Label>CV</Form.Label>
                <Form.Control
                  type="file"
                  required
                  accept='.word,.pdf'
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
