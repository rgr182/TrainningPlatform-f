import React from "react";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress, {  linearProgressClasses,} from "@mui/material/LinearProgress";
import "../Styles/StylesMetrics.css";
import useTraining from "../hooks/useTraining";
import DatePicker from "react-datepicker";

let CEnglish = 0;
let CSoftskills = 0;
let CProblemSolution = 0;
let CTechSkills = 0;
let CScore = 0;
/*
const DatePickerI = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};*/

const English = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#27B3E6" : "#308fe8",
  },
}));
const SoftSkills = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#16CEB5" : "#308fe8",
  },
}));
const Technical = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#E64D3B" : "#308fe8",
  },
}));
const Problem = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#F59C11" : "#308fe8",
  },
}));
const Score = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#A767BE" : "#308fe8",
  },
}));

const setMetrics = (data) => {
  CEnglish = data.find((x) => x.evaluationId == 1).grade;
  CSoftskills = data.find((x) => x.evaluationId == 2).grade;
  CProblemSolution = data.find((x) => x.evaluationId == 3).grade;
  CTechSkills = data.find((x) => x.evaluationId == 4).grade;
  CScore = (CTechSkills + CEnglish + CSoftskills + CProblemSolution) / 4;
};

const MetricsP = () => {
  
  const {metrics} = useTraining();
  console.log(metrics);
  if(typeof  metrics.length!== 'undefined'){
    setMetrics(metrics);
  }
  return (
    <div
      style={{
        backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")`,
      }}
      className="ContainerDashBoard"
    >{/*
      <section id="CalendarSelector">
        <div id="Caledario1">
          <DatePickerI />
        </div>
    </section>*/}

      <section id="dashBoard" className="DashBoardSquare DashBoard">
        <div className="FontC">
          <div className="MenuForma  breadcrumb">
            <p>
              <span className="SpanSpace">
                {" "}
                <span className="CuadradoIngles MenuFormat"></span>Inglés{" "}
              </span>
              <span className="SpanSpace">
                {" "}
                <span className="CuadradoSoftSkills MenuFormat"></span>
                Habilidades Blandas
              </span>
              <span className="SpanSpace">
                {" "}
                <span className="CuadradoProblemSolving MenuFormat"></span>
                Resolución de Problemas
              </span>
              <span className="SpanSpace">
                {" "}
                <span className="CuadradoTechnical MenuFormat"></span>Evaluación
                Tecnicas
              </span>
              <span className="SpanSpace">
                {" "}
                <span className="CuadradoScore MenuFormat"></span>Score
              </span>
            </p>
          </div>

          <div>
            {typeof  metrics.length=== 'undefined' ? (
              <div>
                <CircularProgress />
              </div>
            ) : (
              <div id="PercentDashBoard">
                <ul>
                  <li id="liId" className="Metrics">
                    {CEnglish + "%"}
                    <English
                      variant="determinate"
                      value={CEnglish}
                    />
                  </li>
                  <li className="Metrics">
                    {CSoftskills + "%"}
                    <SoftSkills variant="determinate" value={CSoftskills} />
                  </li>
                  <li className="Metrics">
                    {CProblemSolution + "%"}
                    <Problem variant="determinate" value={CProblemSolution} />
                  </li>
                  <li className="Metrics">
                    {CTechSkills + "%"}
                    <Technical variant="determinate" value={CTechSkills} />
                  </li>
                  <li className="Metrics">
                    {CScore + "%"}
                    <Score variant="determinate" value={CScore} />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetricsP;
