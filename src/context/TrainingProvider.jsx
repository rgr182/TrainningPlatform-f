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
  const [techmember, setTechmember] = useState({});
  const [techmembers, setTechmembers] = useState([]);
  const [project, setProject] = useState({});
  const [projects, setProjects] = useState([]);
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
    // const obtenerMetrics = async () => {
    //   try {
    //     const token = localStorage.getItem("token");
    //     if (!token) return;
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     };
    //     /*
    //     const { data } = await clienteAxios(
    //       `/GetGrades/?period=${"2023-A"}`,
    //       config
    //     );
    //     setMetrics(data);*/
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // obtenerMetrics();
    getMetrics();
    getMembers();
    getTechnologies();
    getBootcampers();
    getBootCamps();
    getProjects();
  }, [auth]);

  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert({});
    }, 5000);
  };

  const getMetric = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get(`/Grade/?memberId=${id}`, config);
      setMetric(data);
      navigate("/dashboard/Metrics");
      setAlert({});
    } catch (error) {
      navigate("/dashboard");
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } finally {
      setLoading(false);
    }
  };
  const getMetrics = async () => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get("/Grades", config);
      setMetrics(data);
      setAlert({});
    } catch (error) {
      console.log(error);
    }
  };

  const submitMetric = async (grade) => {
    if (grade.gradeId) {
      await updateMetric(grade);
    } else {
      await newMetric(grade);
    }
  };
  const newMetric = async (grade) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.post("/Grade", grade, config);
      setAlert({
        msg: "Metric created",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getMetrics();
        navigate("/dashboard/ViewCandidates");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  const updateMetric = async (grade) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.put(
        `/Grade`,
        grade,
        config
      );
      setAlert({
        msg: "Metric Update",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getMetrics();
        navigate("/dashboard/ViewCandidates");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const getMember = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get(`/Member/?id=${id}`, config);
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
      }, 1000);
    } finally {
      setLoading(false);
    }
  };
  const getMemberData = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get(`/Member/?id=${id}`, config);
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
      }, 1000);
    } finally {
    }
  };
  const getMembers = async () => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get("/Members", config);
      setMembers(data);
      setAlert({});
    } catch (error) {
      console.log(error);
    }
  };

  const submitMember = async (member) => {
    if (member.memberId) {
      await updateMember(member);
    } else {
      await newMember(member);
    }
  };
  const newMember = async (member) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.post("/Member", member, config);
      setAlert({
        msg: "Member created",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getMembers();
        navigate("/dashboard/Users");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  const updateMember = async (member) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.put(
        `/Member`,
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
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMember = async (member) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/Member/?memberId=${member.memberId}`, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getMembers();
        navigate("/dashboard/Users");
      }, 1000);
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
      const { data } = await clienteAxios.get(`/Technology/?technologyId=${id}`, config);
      setTechnology(data);
      navigate("/dashboard/EditTechnology");
      setAlert({});
    } catch (error) {
      navigate("/dashboard");
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } finally {
      setLoading(false);
    }
  };
  const getTechnologies = async () => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get("/Technologies", config);
      setTechnologies(data);
      setAlert({});
    } catch (error) {
      console.log(error);
    }
  };

  const submitTechnology = async (technology) => {
    if (technology.technologyId) {
      await updateTechnology(technology);
    } else {
      await newTechnology(technology);
    }
  };

  const newTechnology = async (technology) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.post("/Technology", technology, config);
      setAlert({
        msg: "Technology created",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getTechnologies();
        navigate("/dashboard/ViewTechnologies");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  const updateTechnology = async (technology) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.put(
        `/Technology`,
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
        navigate("/dashboard/ViewTechnologies");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTechnology = async (technology) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/Technology/?technologyId=${technology.technologyId}`, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getTechnologies();
        navigate("/dashboard/ViewTechnologies");
      }, 1000);
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
      }, 1000);
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
    if (bootcamp.bootcampId) {
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
        navigate("/dashboard/ViewBootcamps");
      }, 1000);
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
        navigate("/dashboard/ViewBootcamps");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBootCamp = async (bootcamp) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/BootCamp/?bootcampId=${bootcamp.bootcampId}`, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getBootCamps();
        navigate("/dashboard/ViewBootcamps");
      }, 1000);
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
      navigate("/dashboard/EditCandidate");
      setAlert({});
    } catch (error) {
      navigate("/dashboard");
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } finally {
      setLoading(false);
    }
  };
  const getBootcampers = async () => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get("/BootCampers", config);
      setBootcampers(data);
      setAlert({});
    } catch (error) {
      console.log(error);
    }
  };

  const submitBootcamper = async (bootcamper) => {
    if (bootcamper.bootcampCandidateId) {
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
        navigate("/dashboard/ViewCandidates");
      }, 1000);
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
        navigate("/dashboard/ViewCandidates");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBootcamper = async (bootcamper) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/BootCamper/?bootcampCandidateId=${bootcamper.bootcampCandidateId}`, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getBootcampers();
        navigate("/dashboard/ViewCandidates");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const getTechmember = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get(`/TechMember/?techMembersId=${id}`, config);
      setTechmember(data);
      console.log(data)
      setAlert({});
    } catch (error) {
      navigate("/dashboard");
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } finally {
    }
  };

  const getTechmembers = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get(`/TechsMember/?memberId=${id}`, config);
      setTechmembers(data);
      navigate("/dashboard/ViewTechAssigned");
      setAlert({});
    } catch (error) {
      navigate("/dashboard");
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } finally {
    }
  };

  const submitTechmember = async (techmember) => {
    alert(techmember.techMemberId)
    if (techmember.techMemberId) {
      await updateTechmember(techmember);
    } else {
      await newTechmember(techmember);
    }
  };

  const newTechmember = async (techmember) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.post("/Techmember", techmember, config);
      setAlert({
        msg: "Technology assigned",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getTechmembers(techmember.memberId);
        navigate("/dashboard/ViewTechAssigned");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  const updateTechmember = async (techmember) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.put(
        `/Techmember`,
        techmember,
        config
      );
      setAlert({
        msg: "Techmember Update",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getTechmembers(techmember.memberId);
        navigate("/dashboard/ViewTechAssigned");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTechmember = async (techmember) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/Techmember/?techMembersId=${techmember}`, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const getProject = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get(`/Project/?projectId=${id}`, config);
      setProject(data);
      navigate("/dashboard/EditProject");
      setAlert({});
    } catch (error) {
      navigate("/dashboard");
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } finally {
      setLoading(false);
    }
  };
  const getProjects = async () => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get("/Projects", config);
      setProjects(data);
      setAlert({});
    } catch (error) {
      console.log(error);
    }
  };

  const submitProject = async (project) => {
    if (project.projectId) {
      await updateProject(project);
    } else {
      await newProject(project);
    }
  };
  const newProject = async (project) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.post("/Project", project, config);
      setAlert({
        msg: "Project created",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getProjects();
        navigate("/dashboard/ViewProjects");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  const updateProject = async (project) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.put(
        `/Project`,
        project,
        config
      );
      setAlert({
        msg: "Project Update",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getProjects();
        navigate("/dashboard/ViewProjects");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (project) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/Project/?projectId=${project.projectId}`, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getProjects();
        navigate("/dashboard/ViewProjects");
      }, 1000);
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
        getMemberData,
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
        techmember,
        setTechmember,
        getTechmember,
        deleteTechmember,
        submitTechmember,
        techmembers,
        setTechmembers,
        getTechmembers,
        project,
        setProject,
        getProject,
        deleteProject,
        submitProject,
        projects,
        setProjects,
        getProjects,
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
