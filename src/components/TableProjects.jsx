import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import EditIcon from '@mui/icons-material/Edit';
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import useTraining from "../hooks/useTraining";
import "../Styles/TableMembers.css";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

function TableProjects() {
  const navigate = useNavigate();
  const { getProject, projects } = useTraining();
  const [responsive, setResponsive] = useState("standard");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    {
      label: "Name",
      name: "name",
      options: { filterOptions: { fullWidth: true } },
    },
    {
        label: "Start date",
        name: "startDate"
    },
    {    label: "End date",
        name: "endDate"
    },
    {
      label: "Status",
      name: "statusId"
    },
    {
      label: "Edit",
      name: "projectId",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <EditIcon style={{cursor: 'pointer'}}
              onClick={() => {
                getProject(value);
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
      {typeof projects.length === "undefined" ? (
        <h1> No found Projectss </h1>
      ) : (
        <CacheProvider value={muiCache}>
          <ThemeProvider theme={createTheme()}>
            <MUIDataTable
              title={"Projects list"}
              data={projects}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </CacheProvider>
      )}
    </div>
  );
}

export default TableProjects;