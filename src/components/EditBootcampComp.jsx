import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker"
import Row from 'react-bootstrap/Row';
import "react-datepicker/dist/react-datepicker.css";
import * as yup from 'yup';
import { Formik } from 'formik';
import useTraining from '../hooks/useTraining';
import { useNavigate } from "react-router-dom";
import '../Styles/CreateUserComp.css';

const schema = yup.object().shape({
    name: yup.string().required('Required field'),
});

export const EditBootcampComp = () => {

        const navigate = useNavigate();
        const { submitBootcamp } = useTraining();
        const handleSubmit = async e => {
            e.preventDefault();
        }

        return (
            <Formik
                validationSchema={schema}
                initialValues={{
                    name: '',
                    currentLocationId: '',
                    statusId: '',
                }}
                onSubmit={async (values) => {
                    const hola = await submitBootcamp(values)
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <div className='ContainerCreateUser'>
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row><div className='titleForm'>Edit Bootcamp</div></Row>
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
                                        placeholder='BootChampions2023'
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
                                    <Form.Label>Start Date</Form.Label>
                                    <DatePicker
                                        selected={values.startDate}
                                        dateFormat="MMMM d, yyyy"
                                        className="form-control"
                                        name="startDate"
                                        placeholderText='November 7, 2022'
                                        onChange={date => setFieldValue('startDate', date)}
                                        isInvalid={!!errors.startDate}
                                    />
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="4"
                                    controlId="validationFormik103"
                                    className="position-relative"
                                >
                                    <Form.Label>End Date</Form.Label>
                                    <DatePicker
                                        selected={values.endDate}
                                        dateFormat="MMMM d, yyyy"
                                        className="form-control"
                                        name="endDate"
                                        placeholderText='February 13, 2023'
                                        onChange={date => setFieldValue('endDate', date)}
                                        isInvalid={!!errors.endDate}
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-2">
                                <Form.Group
                                    as={Col}
                                    md="6"
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
                                <Form.Group
                                    as={Col}
                                    md="6"
                                    controlId="validationFormik109"
                                    className="position-relative"
                                >
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select
                                        name='statusId'
                                        value={values.statusId}
                                        onChange={handleChange}
                                    >
                                        <option value="1">Active</option>
                                        <option value="2">Inactive</option>
                                        <option value="3">Fired</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <div className='btn-area'>
                                <Button type="submit">Edit Bootcamp</Button>
                                <Button type="submit">Delete Bootcamp</Button>
                            </div>
                        </Form>

                    </div>
                )}
            </Formik>
        )
    }
