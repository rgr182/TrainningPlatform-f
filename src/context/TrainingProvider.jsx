import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const TrainingContext = createContext();

const TrainingProvider = ({ children }) => {
  const [period, setPeriod] = useState("");
  const [member, setMember] = useState({});
  const [technology, setTechnology] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const [bootcamp, setBootCamp] = useState({});
  const [bootcamps, setBootCamps] = useState([]);
  const [members, setMembers] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [bootcamper, setBootcamper] = useState({});
  const [bootcampers, setBootcampers] = useState([]);
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
    getTechnologies();
    getBootcampers();
    getBootCamps();
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
      const { data } = await clienteAxios(`/getMember/?id=${id}`, config);
      setMember(data);
      navigate("/dashboard/EditUser");
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
    alert(member.membersId)
    alert(member)
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
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/DeleteMember/?memberId=${member.membersId}`,member, config);
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

  const getTechnology = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios(`/GetTechnology/?technologyId=${id}`, config);
      setTechnology(data);
      navigate("/dashboard/EditUser");
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
  const getTechnologies = async () => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios("/GetTechnologies", config);
      setTechnologies(data);
      setAlert({});
    } catch (error) {
      console.log(error);
    }
  };

  const submitTechnology = async (technology) => {
    alert(technology.technologiesId)
    alert(technology)
    if (technology.technologiesId) {
      await updateTechnology(technology);
    } else {
      await newTechnology(technology);
    }
  };
  const newTechnology = async (technology) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.post("/PostTechnology", technology, config);
      setAlert({
        msg: "Technology created",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getTechnologies();
        navigate("/dashboard/ViewTechnologies");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  const updateTechnology = async (technology) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.put(
        `/PutTechnology`,
        technology,
        config
      );
      setAlert({
        msg: "Technology Update",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getTechnologies();
        navigate("/dashboard/Users");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTechnology = async (technology) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/DeleteTechnology/?bootcampId=${technology.technologyId}`,technology, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getTechnologies();
        navigate("/dashboard/Users");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const getBootCamp = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get(`/BootCamp/?bootcampId=${id}`, config);
      setBootCamp(data);
      navigate("/dashboard/EditBootcamp");
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
  const getBootCamps = async () => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get("/BootCamps", config);
      setBootCamps(data);
      setAlert({});
    } catch (error) {
      console.log(error);
    }
  };

  const submitBootCamp = async (bootcamp) => {
    alert(bootcamp.bootcampsId)
    alert(bootcamp)
    if (bootcamp.bootcampsId) {
      await updateBootCamp(bootcamp);
    } else {
      await newBootCamp(bootcamp);
    }
  };
  const newBootCamp = async (bootcamp) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.post("/BootCamp", bootcamp, config);
      setAlert({
        msg: "BootCamp created",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getBootCamps();
        navigate("/dashboard/Users");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  const updateBootCamp = async (bootcamp) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.put(
        `/BootCamp`,
        bootcamp,
        config
      );
      setAlert({
        msg: "BootCamp Update",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getBootCamps();
        navigate("/dashboard/Users");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBootCamp = async (bootcamp) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/BootCamp/?bootcampId=${bootcamp.bootcampsId}`,bootcamp, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getBootCamps();
        navigate("/dashboard/Users");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const getBootcamper = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get(`/BootCamper/?bootcampCandidateId=${id}`, config);
      setBootcamper(data);
      navigate("/dashboard/EditBootcamper");
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
  const getBootcampers = async () => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get("/BootCampers", config);      setBootcampers(data);
      setAlert({});
    } catch (error) {
      console.log(error);
    }
  };

  const submitBootcamper = async (bootcamper) => {
    alert(bootcamper.bootcamperCandidateId)
    alert(bootcamper)
    if (bootcamper.bootcamperCandidateId) {
      await updateBootcamper(bootcamper);
    } else {
      await newBootcamper(bootcamper);
    }
  };
  const newBootcamper = async (bootcamper) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.post("/BootCamper", bootcamper, config);
      setAlert({
        msg: "Bootcamper created",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getBootcampers();
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  const updateBootcamper = async (bootcamper) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.put(
        `/BootCamper`,
        bootcamper,
        config
      );
      setAlert({
        msg: "Bootcamper Update",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getBootcampers();
        navigate("/dashboard/Users");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBootcamper = async (bootcamper) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/BootCamper/?bootcamperCandidateId=${bootcamper.bootcamperCandidateId}`,bootcamper, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getBootcampers();
        navigate("/dashboard/Users");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TrainingContext.Provider
      value={{
        metrics,
        setMetrics,
        period,
        setPeriod,
        member,
        setMember,
        getMember,
        deleteMember,
        submitMember,
        members,
        setMembers,
        getMembers,
        technology,
        setTechnology,
        getTechnology,
        deleteTechnology,
        submitTechnology,
        technologies,
        setTechnologies,
        getTechnologies,
        bootcamp,
        setBootCamp,
        getBootCamp,
        deleteBootCamp,
        submitBootCamp,
        bootcamps,
        setBootCamps,
        getBootCamps,
        bootcamper,
        setBootcamper,
        getBootcamper,
        deleteBootcamper,
        submitBootcamper,
        bootcampers,
        setBootcampers,
        getBootcampers,
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
