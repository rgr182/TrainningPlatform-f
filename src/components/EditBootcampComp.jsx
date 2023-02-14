import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker"
import Row from 'react-bootstrap/Row';
import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import useTraining from "../hooks/useTraining";
import "../Styles/TableMembers.css";
import Box from "@mui/material/Box";
import * as yup from 'yup';
import Modal from "@mui/material/Modal";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from 'formik';
import '../Styles/CreateUserComp.css';

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true,
});

const schema = yup.object().shape({
    name: yup.string().required('Required field'),
});

export const EditBootcampComp = () => {
    const navigate = useNavigate();
    const { getTechmember, deleteTechmember, techmembers, techmember, member, submitTechmember, technologies } = useTraining();
    const [responsive, setResponsive] = useState("standard");
    const [tableBodyHeight, setTableBodyHeight] = useState("400px");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [searchBtn, setSearchBtn] = useState(true);
    const [downloadBtn, setDownloadBtn] = useState(true);
    const [printBtn, setPrintBtn] = useState(true);
    const [viewColumnBtn, setViewColumnBtn] = useState(true);
    const [filterBtn, setFilterBtn] = useState(true);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const deleteUser = () => {
        deleteTechmember(techmember);
    };

    const style = {
        position: "absolute",
        top: "40%",
        left: "50%",
        color: "white",
        fontSize: 20,
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 600,
        bgcolor: "rgba(18, 20, 43, 0.8)",
        border: "none",
        borderRadius: "20px",
        boxShadow: 24,
        pt: 3,
        px: 4,
        pb: 3
    };


    const columns = [
        {
            label: "Name",
            name: "name",
            options: { filterOptions: { fullWidth: true } },
        },
        {
            label: "Email",
            name: "email",
            options: { filterOptions: { fullWidth: true } },
        },
        {
            label: "Status",
            name: "statusId",
            options: { filterOptions: { fullWidth: true } },
        },
        {
            label: "Delete",
            name: "techMemberId",
            options: {
                filter: true,
                customBodyRender: (techmember, tableMeta, updateValue) => {
                    return (
                        <DeleteIcon style={{ cursor: 'pointer' }}
                            onClick={() => {
                                deleteTechmember(techmember);
                            }}
                        />
                    );
                },
            },
        },
    ];

    const columns2 = [
        {
            label: "Name",
            name: "name",
            options: { filterOptions: { fullWidth: true } },
        },
        {
            label: "Email",
            name: "email",
            options: { filterOptions: { fullWidth: true } },
        },
        {
            label: "Status",
            name: "statusId",
            options: { filterOptions: { fullWidth: true } },
        },
        {
            label: "Delete",
            name: "techMemberId",
            options: {
                filter: true,
                customBodyRender: (techmember, tableMeta, updateValue) => {
                    return (
                        <DeleteIcon style={{ cursor: 'pointer' }}
                            onClick={() => {
                                deleteTechmember(techmember);
                            }}
                        />
                    );
                },
            },
        },
    ];

    const options = {
        search: searchBtn,
        download: downloadBtn,
        print: printBtn,
        viewColumns: viewColumnBtn,
        filter: filterBtn,
        filterType: "dropdown",
        responsive,
        tableBodyHeight,
        tableBodyMaxHeight,
        onTableChange: (action, state) => {
            console.log(action);
            console.dir(state);
        },
        selectableRows: false, // <===== will turn off checkboxes in rows
    };
    const { bootcamp, submitBootCamp, deleteBootCamp } = useTraining();
    const handleSubmit = async e => {
        e.preventDefault();
    }

    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{
                    bootcampId: bootcamp.bootcampId,
                    name: bootcamp.name,
                    startDate: new Date(bootcamp.startDate),
                    endDate: new Date(bootcamp.endDate),
                    currentLocationId: bootcamp.currentLocationId,
                    statusId: bootcamp.statusId,
                }}
                onSubmit={async (values) => {
                    const hola = await submitBootCamp(values)
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
                            <Row>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Feedback 1</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={1}
                                        maxLength="1000"
                                        name="feedback1"
                                        placeholder="(Optional) Made a feedback to the user."
                                        value={values.feedback1}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Feedback 2</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={1}
                                        maxLength="1000"
                                        name="feedback2"
                                        placeholder="(Optional) Made a feedback to the user."
                                        value={values.feedback2}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Feedback 3</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={1}
                                        name="feedback3"
                                        maxLength="1000"
                                        placeholder="(Optional) Made a feedback to the user."
                                        value={values.feedback3}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>
                            <div className='btn-area'>
                                <Button type="submit">Edit Bootcamp</Button>
                                <Button onClick={() => deleteBootCamp(bootcamp)
                                }>Delete Bootcamp</Button>
                            </div>
                        </Form>
                    </div>

                )}
            </Formik>
            <div className="members-form">
                <h1 className="members-title"></h1>
                {typeof techmembers.length === "undefined" ? (
                    <h1> No found candidates </h1>
                ) : (
                    <><CacheProvider value={muiCache}>
                        <ThemeProvider theme={createTheme()}>
                            <MUIDataTable
                                title={"Candidates list"}
                                data={techmembers}
                                columns={columns}
                                options={options} />
                        </ThemeProvider>
                    </CacheProvider>
                        <div className='btn-area'>
                            <button className="p-3 bg-danger m-4 rounded" onClick={handleOpen}>Add Candidate</button>
                        </div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box sx={{ ...style, width: 800 }}>
                                    <h1 className="members-title"></h1>
                                    {typeof techmembers.length === "undefined" ? (
                                        <h1> No found candidates </h1>
                                    ) : (
                                        <><CacheProvider value={muiCache}>
                                            <ThemeProvider theme={createTheme()}>
                                                <MUIDataTable
                                                    title={"Candidates assigned list"}
                                                    data={techmembers}
                                                    columns={columns2}
                                                    options={options} />
                                            </ThemeProvider>
                                        </CacheProvider></>)}
                            </Box>
                        </Modal>
                    </>
                )
                }

            </div >
        </>

    )
}
