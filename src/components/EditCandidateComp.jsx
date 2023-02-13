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
  email: yup.string().email('Needs email format').required('Required field'),
  phoneNumber: yup.string().required('Required field'),
});

function EditCandidateComp() {

  const navigate = useNavigate();
  const { bootcamper, submitBootcamper, deleteBootcamper } = useTraining();
  const handleSubmit = async e => {
    e.preventDefault();
  }

  const deleteUser = () => {
    deleteBootcamper(bootcamper.bootcampCandidateId);
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        bootcampCandidateId: bootcamper.bootcampCandidateId,
        name: bootcamper.name,
        email: bootcamper.email,
        phoneNumber: bootcamper.phoneNumber,
        statusId: bootcamper.statusId,
        feedback: bootcamper.feedback,
      }}
      onSubmit={async (values) => {
        const hola = await submitBootcamper(values)
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
            <Row><div className='titleForm'>Edit Candidate</div></Row>
            <Row className="mb-2">
              <Form.Group
                as={Col}
                md="12"
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder='James Rhodes Smith'
                  maxLength="20"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group as={Col} md="12" controlId="validationFormikEmail2">
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
            </Row>
            <Row className='mb-2'>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Bootcamp</Form.Label>
                <Form.Select
                  name='bootcampId'
                  value={values.bootcampId}
                  onChange={handleChange}
                >
                  <option value="1">Durango</option>
                  <option value="6">Aguascalientes</option>
                  <option value="7">Ciudad de México</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik103"
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
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name='statusId'
                  value={values.statusId}
                  onChange={handleChange}
                >
                  <option value="1">OnCourse</option>
                  <option value="2">Finished</option>
                  <option value="3">Active</option>
                  <option value="4">Potential</option>
                  <option value="5">DroppedOut</option>
                  <option value="6">OnProcess</option>
                  <option value="7">Hired</option>
                </Form.Select>
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
              <Button type="submit">Edit Candidate</Button>
              <Button 
                onClick={() => deleteBootcamper(bootcamper)}
                text="Delete Bootcamper"
              >Delete Bootcamper</Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default EditCandidateComp;