import { useEffect } from "react";
import Header2 from "../components/Header2";
import FooterCopyright from "../components/FooterCopyright";
import MetricsP from "../components/MetricsP";
import useTraining from "../hooks/useTraining";
//import PreviewProyecto from "../components/PreviewProyecto";
//import Alert from "../components/Alert";

const Metrics = () => {
  //const { training, alert } = useTraining();
  //const { msg } = alert;
  return (
    <>
      {/*msg && <Alert alert={alert} />*/}
      <MetricsP />
      <Header4 />
      <FooterCopyright />
    </>
  );
};

export default Metrics;