import React from 'react'
import './Styles/StylesBody.css'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

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
let CEnglish=70;
let CSoftskills=50;
let CProblemSolution=70;
let CTechSkills=90;
let CScore = (CTechSkills + CEnglish + CSoftskills + CProblemSolution) / 4;

const fnUpdate=()=>{
  let CEnglish=20;
  document.getElementById('liId').value = {CEnglish};
  console.log('Aqui Estoy')
  //return CEnglish;
} 

export const Body = () => {
  return (
    <div style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")` }} className='ContainerDashBoard'>
      <section id='filtersCarousel' className='FiltersCarouselSquare' >
        <ul className='breadcrumb FontC2'>
          <li className='SemiCirculo2Izq imgMenu'><img src='src\images\DashBoardScrean\Larrow1.png'></img></li>
          <li>2022 A</li>
          <li>2022 B</li>
          <li><a href="#dashBoard" onClick={fnUpdate}>2023 A</a></li>
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
            <div id='PercentDashBoard'>
              <ul>
                <li id='liId' className='Metrics'>
                  {CEnglish+'%'}<English variant="determinate" value={CEnglish} />
                </li>
                <li className='Metrics'>
                  {CSoftskills+'%'}<SoftSkills variant="determinate" value={CSoftskills} />
                </li>
                <li className='Metrics'>
                  {CProblemSolution+'%'}<Problem variant="determinate" value={CProblemSolution} />
                </li>
                <li className='Metrics'>
                  {CTechSkills+'%'}<Technical variant="determinate" value={CTechSkills} />
                </li>
                <li className='Metrics'>
                  {CScore+'%'}<Score variant="determinate" value={CScore} />
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>


  )


}

