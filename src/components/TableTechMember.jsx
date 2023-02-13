import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
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
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import Modal from "@mui/material/Modal";
import { Formik } from "formik";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

function TableTechMember() {
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
    top: "50%",
    left: "50%",
    color: "white",
    fontSize:20,
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 400,
    bgcolor: "rgba(18, 20, 43, 0.8)",
    border: "none",
    borderRadius:"20px",
    boxShadow: 24,
    pt: 10,
    px: 4,
    pb: 3
  };


  const columns = [
    {
      label: "Tech",
      name: "tech",
      options: { filterOptions: { fullWidth: true } },
    },
    {
      label: "Seniority",
      name: "seniority",
      options: { filterOptions: { fullWidth: true } },
    },
    {
      label: "Edit",
      name: "techMemberId",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <EditIcon style={{ cursor: 'pointer' }}
              onClick={async () => {
                await getTechmember(value);
                setOpen(true)
              }}
            />
          );
        },
      },
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
  return (
    <div className="members-form">
      <h1 className="members-title"></h1>
      {typeof techmembers.length === "undefined" ? (
        <h1> No found Technologies </h1>
      ) : (
        <><CacheProvider value={muiCache}>
          <ThemeProvider theme={createTheme()}>
            <MUIDataTable
              title={"Technology assigned list"}
              data={techmembers}
              columns={columns}
              options={options} />
          </ThemeProvider>
        </CacheProvider>
          <div className='btn-area'>
            <button className="p-3 bg-danger m-4 rounded" onClick={handleOpen}>Add technology</button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <Formik
                initialValues={{
                  techMemberId:techmember.techMemberId??0,
                  technologyId: techmember.technologyId??0,
                  seniorityId: techmember.seniorityId??0,
                  memberId: techmember.memberId??member.memberId,
                }}
                onSubmit={async (values) => {
                  alert(JSON.stringify(values))
                  const hola = await submitTechmember(values)
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
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row><div className='titleForm fs-3'>Select technology</div></Row>
                      <Row className="mb-2">
                        <Form.Group
                          as={Col}
                          md="6"
                          controlId="validationFormik105"
                          className="position-relative"
                        >
                          <Form.Label>Technology</Form.Label>
                          <Form.Select
                            name='technologyId'
                            value={values.technologyId}
                            onChange={handleChange}
                          >
                            {
                              technologies.map((option)=>(
                                <option key={option.technologyId} value={option.technologyId}>{option.name}</option>
                              ))
                            }
                          </Form.Select>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="6"
                          controlId="validationFormik109"
                          className="position-relative"
                        >
                          <Form.Label>Seniority</Form.Label>
                          <Form.Select
                            name='seniorityId'
                            value={ parseInt(values.seniorityId)}
                            onChange={handleChange}
                          >
                            <option value="1">Junior</option>
                            <option value="2">Middle</option>
                            <option value="3">Senior</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                      <div className='btn-area'>
                        <Button type="submit">Save</Button>
                      </div>
                    </Form>
                )}
              </Formik>
            </Box>
          </Modal>
        </>
      )
      }

    </div >
  );
}

export default TableTechMember;