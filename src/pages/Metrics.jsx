import { useEffect } from "react";
import Header2 from "../components/Header2";
import FooterCopyright from "../components/FooterCopyright";
import MetricsP from "../components/MetricsP";
import useTraining from "../hooks/useTraining";
//import PreviewProyecto from "../components/PreviewProyecto";
//import Alerta from "../components/Alerta";

const Metrics = () => {
  //const { training, alerta } = useTraining();
  //const { msg } = alerta;
  return (
    <>
      {/*msg && <Alerta alerta={alerta} />*/}
      <MetricsP />
      <Header2 />
      <FooterCopyright />
    </>
  );
};

export default Metrics;