import React from 'react'

export const CreateTechComp = () => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={async (values) => {
                console.log("Ya estas dentro")
                await clienteAxios.post(
                    "/PutMember",
                    values
                )
            }}
            initialValues={{
                name: '',
                lastName: '',
                email: '',
                username: '',
                campus: '',
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
                            <div className='btn-area'>
                                <Button type="submit">Create New Tech</Button>
                            </div>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
