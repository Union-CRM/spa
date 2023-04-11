import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const SubjectContext = createContext();

export const SubjectContextProvider = ({ children }) => {
  const [subject, setSubject] = useState([{}]);

  useEffect(()=>{
    async function loadDate(){
      
        var subjects;
        try {
            const response = await axios.get('http://localhost:8089/union/v1/subjects/submissives',{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
                subjects = response;
                
        }catch (error) {
            console.error(error);
            
        }
        
        setSubject(subjects.data.List.map((item)=>({
          id:item.subject_id, 
          status_id: item.status_id,
          status:item.status.status_description,
          subject_title:item.subject_title,
          release:item.release_name,
          release_id:item.release_id,
          business:item.business_name,
          manager:item.user_name,
          client: item.client_name,
          client_id: item.client_id,
          client_email: item.client_email,
          description:item.subject_text,
          })
        ))
    }
    
    loadDate();
  },[])

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [modalDetails, setModalDetails] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const [modal, setModal] = useState();
  const [modalEdit, setModalEdit] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const [toggleState, setToggleState] = useState(1);

  const [id, setId] = useState(null);

  const [modalPlanner, setModalPlanner] = useState(false);

  const openModalDetails = (id) => {
    setSelectedSubject(id);
  };

  return (
    <SubjectContext.Provider
      value={{
        id,
        setId,
        openModalDetails,
        selectedSubject,
        toggleState,
        setToggleState,
        subject,
        setSubject,
        modalDetails,
        setModalDetails,
        modal,
        setModal,
        modalEdit,
        setModalEdit,
        isEdit,
        setEdit,
        modalPlanner,
        setModalPlanner,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

const subjectsList = [
  {
    id: 1,
    status: "Progress",
    subject_title: "Apresentação Institucional TCS Institucional",
    manager: "Helio Endo",
    release: "Experiência Digital",
    business: "Infraestrutura e Operações TI",
    client: "Igor Sena",
    client_email: "igorsena@tcs.com",
    description:
      "Objetivos da apresentação: Identificar as necessidades do cliente e compreender seus objetivos Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira;",
  },
  {
    id: 2,
    status: "Finished",
    subject_title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Cliente PJ Itaú",
    business: "Ativos PJ",
    client: "Ariel Soares",
    client_email: "soares.ariel@tcs.com",
    description:
      "Objetivos da apresentação: Identificar as necessidades do cliente e compreender seus objetivos Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira;",
  },
  {
    id: 3,
    status: "Canceled",
    subject_title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Plataformas de Produtos",
    business: "Gestão Financeira PJ e Novos Negócios",
    client: "Graziele Miranda",
    client_email: "graziele.miranda@tcs.com",
    description:
      "Objetivos da apresentação: Identificar as necessidades do cliente e compreender seus objetivos Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira;",
  },
  {
    id: 4,
    status: "Finished",
    subject_title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Soluções Vic e Cartões",
    business: "Integração Digital",
    client: "Guilherme Rezende",
    client_email: "guilherme@tcs.com",
    description:
      "Objetivos da apresentação: Identificar as necessidades do cliente e compreender seus objetivos Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira;",
  },
  {
    id: 5,
    status: "Progress",
    subject_title: "Apresentação Institucional TCS",
    manager: "Felipe Flaibam",
    release: "Itaú",
    business: "Integração Digital",
    client: "Guilherme Rezende",
    client_email: "guilherme@tcs.com",
    description:
      "Objetivos da apresentação: Identificar as necessidades do cliente e compreender seus objetivos Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira;",
  },
  {
    id: 6,
    status: "Progress",
    subject_title: "Apresentação Institucional TCS",
    manager: "Helio Endo",
    release: "Proteção e Comunicação com o Cliente ",
    business: "Experiência com Clientes",
    client: "Mateus Silveira",
    client_email: "silveira.mateus2@tcs.com",
    description:
      "Objetivos da apresentação: Identificar as necessidades do cliente e compreender seus objetivos Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira;",
  },
  {
    id: 7,
    status: "Progress",
    subject_title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Investment Services",
    business: "Contas e Tarifas",
    client: "João Pedro",
    client_email: "j.pedro@tcs.com",
    description:
      "Objetivos da apresentação: Identificar as necessidades do cliente e compreender seus objetivos Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira;",
  },
  {
    id: 8,
    status: "Progress",
    subject_title: "Apresentação Institucional TCS",
    manager: "Felipe Flaibam",
    release: "Plataformas de Produtos",
    business: "Gestão Financeira PJ e Novos Negócios",
    client: "Graziele Miranda",
    client_email: "graziele.miranda@tcs.com",
    description:
      "Objetivos da apresentação: Identificar as necessidades do cliente e compreender seus objetivos Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira;",
  },
  {
    id: 9,
    status: "Finished",
    subject_title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Investment Services",
    business: "Contas e Tarifas",
    client: "João Pedro",
    client_email: "j.pedro@tcs.com",
    description:
      "Objetivos da apresentação: Identificar as necessidades do cliente e compreender seus objetivos Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira;",
  },
];
export default subjectsList;
