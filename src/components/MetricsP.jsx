import React from 'react'
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import axios from 'axios';
import '../Styles/StylesMetrics.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';


let CEnglish = 0; 
let CSoftskills = 0;
let CProblemSolution = 0;
let CTechSkills = 0;
let CScore = 0;

const DatePickerI = () => {  
  const [startDate, setStartDate] = useState(new Date());  
  return (    
<DatePicker 
    selected={startDate} 
    onChange={(date) => setStartDate(date)} 
/>  
 );
};

const English = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#27B3E6' : '#308fe8',
  },
}));
const SoftSkills = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#16CEB5' : '#308fe8',
  },
}));
const Technical = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#E64D3B' : '#308fe8',
  },
}));
const Problem = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#F59C11' : '#308fe8',
  },
}));
const Score = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#A767BE' : '#308fe8',
  },
}));



const fnUpdate = () => {
  let CEnglish = 20;
  document.getElementById('liId').value = { CEnglish };
  console.log('Aqui Estoy')
}



const setMetrics = (data) => {
 
   CEnglish = data.find(x => x.evaluationId == 1).grade;
   CSoftskills = data.find(x => x.evaluationId == 2).grade;
   CProblemSolution = data.find(x => x.evaluationId == 3).grade;
   CTechSkills = data.find(x => x.evaluationId == 4).grade;
   CScore = (CTechSkills + CEnglish + CSoftskills + CProblemSolution) / 4;
}


const MetricsP = () => {  
  
  let [metrics, period] = useState(null);
  const [metric, setMetric] = React.useState(null);
  React.useEffect(() => {
    let MemberId=localStorage.getItem('MemberId');     
    const {data} = axios.get(`http://trainingsystem-dev.eba-qdbk6g8q.us-east-1.elasticbeanstalk.com/GetGrades?UserId=${MemberId}&period=${period}`).then((response) => {
      setMetric(response.data);
    });
    console.log('respuesta del servidor',data)
    setMetric(data);
  }, []);
  const getMetrics = async () => {
    const period="2023-A";
    
    try {
      let MemberId=localStorage.getItem('MemberId');     
      const {data} = await axios.get(`http://trainingsystem-dev.eba-qdbk6g8q.us-east-1.elasticbeanstalk.com/GetGrades?UserId=${MemberId}&period=${period}`);
      console.log('respuesta del servidor',data)
      setMetrics(data);

    } catch (error) {
      
    }
  }
  getMetrics();
  return (
    <div style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")` }} className='ContainerDashBoard'>

      <section id='CalendarSelector' >
      <div id='Caledario1'>
                  <DatePickerI/>
                </div>
      </section>

      <section id='dashBoard' className='DashBoardSquare DashBoard'>

        <div className='FontC'>
          <div className='MenuForma  breadcrumb'>

            <p>
              <span className='SpanSpace'> <span className='CuadradoIngles MenuFormat'></span>Inglés </span>
              <span className='SpanSpace'> <span className='CuadradoSoftSkills MenuFormat'></span>Habilidades Blandas</span>
              <span className='SpanSpace'> <span className='CuadradoProblemSolving MenuFormat'></span>Resolución de Problemas</span>
              <span className='SpanSpace'> <span className='CuadradoTechnical MenuFormat'></span>Evaluación Tecnicas</span>
              <span className='SpanSpace'> <span className='CuadradoScore MenuFormat'></span>Score</span></p>
          </div>

          <div>
            {
              !metric
              ?
            <div>
              <CircularProgress />
            </div>
            :
            <div id='PercentDashBoard'>
              <ul>
                <li id='liId' className='Metrics'>
                  {CEnglish/*metrics.English*/ + '%'}<English variant="determinate" value={CEnglish/*metrics.English*/} />
                </li>
                <li className='Metrics'>
                  {CSoftskills + '%'}<SoftSkills variant="determinate" value={CSoftskills} />
                </li>
                <li className='Metrics'>
                  {CProblemSolution + '%'}<Problem variant="determinate" value={CProblemSolution} />
                </li>
                <li className='Metrics'>
                  {CTechSkills + '%'}<Technical variant="determinate" value={CTechSkills} />
                </li>
                <li className='Metrics'>
                  {CScore + '%'}<Score variant="determinate" value={CScore} />
                </li>
              </ul>
            </div>
   
          }         
          </div>
        </div>
      </section>
    </div>


  )


}

export default MetricsP