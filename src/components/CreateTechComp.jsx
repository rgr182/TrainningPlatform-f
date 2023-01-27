import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import useTraining from '../hooks/useTraining';
import '../Styles/CreateUserComp.css';

const schema = yup.object().shape({
    name: yup.string().required('Required field'),
});

export const CreateTechComp = () => {
    const { submitTech } = useTraining();
    const handleSubmit = async e => {
        e.preventDefault();
    }

    return (
        <Formik
            validationSchema={schema}
            initialValues={{ 
                name: '',
            }}
            onSubmit={async (values) => {
                const hola = await submitTech(values)
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
                <div className='ContainerCreateTech'>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row><div className='titleForm'>Create TechStack</div></Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="10"
                                controlId="validationFormik101"
                                className="position-relative"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder='JavaScript'
                                    maxLength="20"
                                    value={values.name}
                                    onChange={handleChange}
                                    isValid={touched.name && !errors.name}
                                />
                                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <div className='btn-area'>
                            <Button type="submit">Create TechStack</Button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
}

export default CreateTechComp;
