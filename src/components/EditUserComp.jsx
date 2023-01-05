import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import '../Styles/CreateUserComp.css';
import '../Styles/StylesSidebar.css';

const schema = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Z]+$/, "Only letters allowed").required('Required field'),
    lastName: yup.string().matches(/^[a-zA-Z]+$/, "Only letters allowed").required('Required field'),
    email: yup.string().required('Required field'),
    address: yup.string().required('Required field'),
    city: yup.string().matches(/^[a-zA-Z]+$/, "Only letters allowed").required('Required field'),
    campus: yup.string().matches(/^[a-zA-Z]+$/, "Only letters allowed").required('Required field'),
    zip: yup.string().required('Required field'),
    password: yup.string().required('Required field'),
    confirmPassword: yup.string().required('Required field'),
    phoneNumber: yup.string().matches(/^[0-9]+$/, "Only numbers allowed").required('Required field'),
    CV: yup.mixed().required('Required field')
});

const estados = [
    "Durango",
    "Tijuana",
    "Aguascalientes"
]

function EditUserComp() {
    return (
        <Formik
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
            
            setTimeout(() => {
                console.log("Ya estas dentro");
                alert(JSON.stringify(values, null, 2));
                
                setSubmitting(false);
                
            }, 0);
            
        }}
        initialValues={{
            name: '',
            lastName: '',
            email: '',
            address: '',
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
                errors,
                isSubmitting,
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
                            <Form.Group as={Col} md="4" controlId="validationFormikEmail2">
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
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationFormik103"
                                className="position-relative"
                            >
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="P. Sherman, 42 Wallaby Way, Sydney."
                                    name="address"
                                    maxLength="50"
                                    value={values.address}
                                    onChange={handleChange}
                                    isInvalid={!!errors.address}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.address}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="3"
                                controlId="validationFormik104"
                                className="position-relative"
                            >
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="LA"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    isInvalid={!!errors.city}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.city}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="3"
                                controlId="validationFormik104"
                                className="position-relative"
                            >
                                <Form.Label>Campus</Form.Label>
                                <select>
                                    {
                                        estados.map(estado=> {return <option>{estado}</option>})
                                    }
                                </select>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.campus}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group
                                as={Col}
                                md="3"
                                controlId="validationFormik105"
                                className="position-relative"
                            >
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="12312"
                                    name="zip"
                                    maxLength="5"
                                    value={values.zip}
                                    onChange={handleChange}
                                    isInvalid={!!errors.zip}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.zip}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="3"
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
                                md="3"
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
                                md="3"
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
                            <Button type="submit" disabled={isSubmitting}>Edit User</Button>
                            <Button type=''>Delete User</Button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
}

export default EditUserComp;