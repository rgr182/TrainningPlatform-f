import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import '../Styles/CreateUserComp.css';
import '../Styles/StylesSidebar.css';
import useTraining from '../hooks/useTraining';

const schema = yup.object().shape({
  name: yup.string().matches(/^[a-zA-Z]+$/, "Only letters allowed").required('Required field'),
  FirstName: yup.string().matches(/^[a-zA-Z]+$/, "Only letters allowed").required('Required field'),
  secondName: yup.string().matches(/^[a-zA-Z]+$/, "Only letters allowed").required('Required field'),
  email: yup.string().required('Required field'),
  username: yup.string().required('Required field'),
  currentLocation: yup.string().required('Required field'),
  password: yup.string().required('Required field'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required field'),
  phoneNumber: yup.string().matches(/^[0-9]+$/, "Only numbers allowed").required('Required field'),
  CV: yup.mixed().required('Required field')
});

const EditUserComp = () => {

    const {submitMember,deleteMember,member} = useTraining();
    const handleSubmit = async e => {
      e.preventDefault();
  }


  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        MemberId:'0',
        name: '',
        FirstName: '',
        email: '',
        username: '',
        currentLocation: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        CV: null,
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
            <div className='titleForm'>
              Edit/Delete User:
            </div>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder='James Robert'
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
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  name="FirstName"
                  maxLength="20"
                  placeholder='Rhodes'
                  value={values.FirstName}
                  onChange={handleChange}
                  isValid={touched.FirstName && !errors.FirstName}
                />

                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Second S.</Form.Label>
                <Form.Control
                  type="text"
                  name="secondName"
                  maxLength="20"
                  placeholder='Smith'
                  value={values.secondName}
                  onChange={handleChange}
                  isValid={touched.secondName && !errors.secondName}
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
                <Form.Select defaultValue="Durango">
                  <option value="1">Durango</option>
                  <option value="6">Aguascalientes</option>
                  <option value="7">Ciudad de México</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
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
                  placeholder='James123'
                  maxLength="10"
                  value={values.username}
                  onChange={handleChange}
                  isValid={touched.username && !errors.username}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
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
                  minLength="7"
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
              <Button type="submit">Edit New User</Button>
              <Button type="submit">Delete User</Button>
            </div>
          </Form>

        </div>
      )}
    </Formik>
  );
}

export default EditUserComp;