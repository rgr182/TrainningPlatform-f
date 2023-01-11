import { useState } from "react";
import { DashboardComp } from "../components/DashboardComp"
import FooterCopyright from "../components/FooterCopyright"
import Header2 from "../components/Header2"
import Alert from "../components/Alert"

const Dashboard = () => {
  const [alert, setAlert] = useState({});
  const { msg } = alert;
  return (
    <>
    {msg && <Alert alert={alert} />}
      <DashboardComp/>
      <Header2/>
      <FooterCopyright/>
    </>
  )
}

export default Dashboard;