import React from 'react'
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import axios from 'axios';
import '../Styles/StylesMetrics.css';
import { useState } from 'react';


// componentDidMount() {
//   axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => {
//       console.log(res.data)

//       const {Periodo,CEnglish,CSoftskills,CTechskills,CProblemSolution} = res.data;
//       this.setState({ Periodo });

//       const CEnglish = res.;
//       this.setState({ CEnglish });

//       const CSoftskills = res.;
//       this.setState({ CSoftskills });

//       const CTechSkills = res.;
//       this.setState({ CTechSkills });

//       const CProblemSolution = res.;
//       this.setState({ CProblemSolution });
//     })
// }


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

let CEnglish = 90;
let CSoftskills = 50;
let CProblemSolution = 70;
let CTechSkills = 90;
let CScore = (CTechSkills + CEnglish + CSoftskills + CProblemSolution) / 4;

const fnUpdate = () => {
  let CEnglish = 20;
  document.getElementById('liId').value = { CEnglish };
  console.log('Aqui Estoy')
  //return CEnglish;
}

/*
button.addEventListener('click',()=>{
  axios({
    method: 'GET',
    url: 'http://'
  }).then(res.data)
}).catch(err=>console.log(err))
*/

export const MetricsP = () => {
  const id=1;
  const [metrics, setMetrics] = useState(null);
  const getMetrics = async () => {
    try {
      const {data} = await axios.get(`https://localhost:7140/ShowUsuarios?id=${id}`);
      console.log('respuesta del servidor',data)
      setMetrics(data);
    } catch (error) {
      
    }
  }
  getMetrics();
  return (
    <div style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")` }} className='ContainerDashBoard'>

      <section id='filtersCarousel' className='FiltersCarouselSquare' >
        <ul className='breadcrumb FontC2'>
          <li className='SemiCirculo2Izq imgMenu'><img src='src\images\DashBoardScrean\Larrow1.png'></img></li>
          <li>2022 A</li>
          <li>2022 B</li>
          <li>2023 A</li>
          <li>2023 B</li>
          <li>2024 A</li>
          <li>2024 B</li>
          <li>2025 A</li>
          <li>2025 B</li>
          <li className='SemiCirculo2Der imgMenu'><img src='src\images\DashBoardScrean\Rarrow1.png'></img></li>
        </ul>
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
              !metrics
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

