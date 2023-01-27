import * as React from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import useTraining from "../hooks/useTraining";
import EditIcon from "@mui/icons-material/Edit";
import "../Styles/TableMembers.css";

function Tabla() {
  const navigate = useNavigate();
  const { setMember } = useTraining();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleCellClick = (e) => {
    setMember(e);
    navigate("/dashboard/EditUser");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { members } = useTraining();
  return (
    <>
      <div className="ContainerUserTable">
        <div className="titleForm">Members</div>
        <div className="members-form">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            {typeof members.length === "undefined" ? (
              <h1> No found users </h1>
            ) : (
              <>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Member ID</TableCell>
                        <TableCell>Role</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {members
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow
                            onClick={() => { handleCellClick(row) }}
                            key={row.membersId}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>
                              {row.name +
                                " " +
                                row.lastName +
                                " " +
                                row.secondLastName}
                            </TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.membersId}</TableCell>
                            <TableCell>{row.adminId != null && row.mentorId != null ? "Admin, Mentor" : row.adminId != null ? "Admin" : row.mentorId != null ? "Mentor" : "Colaborador"}</TableCell>
                            <TableCell>
                              <EditIcon>
                                {row.membersId}</EditIcon>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={members.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </>
            )}
          </Paper>
        </div>
      </div>
    </>
  );
}

export default Tabla;
