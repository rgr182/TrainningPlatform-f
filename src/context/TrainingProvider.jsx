import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const TrainingContext = createContext();

const TrainingProvider = ({ children }) => {
  const [period, setPeriod] = useState("");
  const [member, setMember] = useState({});
  // const [tech, setTech] = useState({});
  const [members, setMembers] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [alerta, setAlert] = useState({});
  const navigate = useNavigate();
  const { auth } = useAuth();

  const getConfig = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  };
  useEffect(() => {
    const obtenerMetrics = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        /*
        const { data } = await clienteAxios(
          `/GetGrades/?period=${"2023-A"}`,
          config
        );
        setMetrics(data);*/
      } catch (error) {
        console.log(error);
      }
    };
    obtenerMetrics();
    getMembers();
  }, [auth]);

  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert({});
    }, 5000);
  };
  const getMember = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios(`/getMember/${id}`, config);
      setMember(data);
      setAlert({});
    } catch (error) {
      navigate("/dashboard");
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 3000);
    } finally {
      setLoading(false);
    }
  };
  const getMembers = async () => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios("/getMembers", config);
      setMembers(data);
      setAlert({});
    } catch (error) {
      console.log(error);
    }
  };

  const submitMember = async (member) => {
    if (member.membersId) {
      await updateMember(member);
    } else {
      await newMember(member);
    }
  };
  const newMember = async (member) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.post("/PostMember", member, config);
      setAlert({
        msg: "Member created",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getMembers();
        navigate("/dashboard/Users");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  const updateMember = async (member) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.put(
        `/PutMember`,
        member,
        config
      );
      setAlert({
        msg: "Member Update",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getMembers();
        navigate("/dashboard/Users");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMember = async (member) => {
    try {
      const config = getConfig();
      alert(JSON.stringify(member));
      if (!config) return;
      const { data } = await clienteAxios.delete(`/DeleteMember/?memberId=${member.membersId}`,member, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getMembers();
        navigate("/dashboard/Users");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const closeSesionTraning = () => {
    setMetrics([]);
    setAlert({});
  };

  // const submitTech = async (tech) => {
  //   try {
  //     console.log(tech);
  //     const config = getConfig();
  //     if (!config) return;
  //     const { data } = await clienteAxios.post("/PostTechnology", tech, config);
  //     setAlert({
  //       msg: "TechStack created",
  //       error: false,
  //     });
  //     setTimeout(() => {
  //       setAlert({});
  //       navigate("/dashboard");
  //     }, 3000);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <TrainingContext.Provider
      value={{
        metrics,
        setMetrics,
        period,
        setPeriod,
        member,
        setMember,
        members,
        setMembers,
        getMembers,
        getMember,
        deleteMember,
        submitMember,
        // tech,
        // setTech,
        // submitTech,
        alerta,
        showAlert,
        closeSesionTraning,
      }}
    >
      {children}
    </TrainingContext.Provider>
  );
};
export { TrainingProvider };

export default TrainingContext;
