import { createContext, useState } from "react";
export const SubjectContext = createContext();

export const SubjectContextProvider = ({ children }) => {
  const [subject, setSubject] = useState(subjectsList);
  const [modalDetails, setModalDetails] = useState(false);
  const [modal, setModal] = useState();
  const [modalEdit, setModalEdit] = useState(false);
  const [isEdit, setEdit] = useState(false);

  return (
    <SubjectContext.Provider
      value={{
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
    title: "Apresentação Institucional TCS Institucional",
    manager_id: 1,
    manager: "Helio Endo",
    release_id: 1,
    release: "Experiência Digital",
    business_id: 1,
    business: "Infraestrutura e Operações TI",
    client_id: 1,
    client: "Igor Sena Soares Silva",
    client_email: "igorsena@tcs.com",
  },
  {
    id: 2,
    status: "Finished",
    title: "Apresentação Institucional TCS",
    manager_id: 1,
    manager: "Gilberto Anderson",
    release_id: 1,
    release: "Cliente PJ Itaú",
    business_id: 1,
    business: "Ativos PJ",
    client_id: 2,
    client: "Ariel Soares",
    client_email: "soares.ariel@tcs.com",
  },
  {
    id: 3,
    status: "Canceled",
    title: "Apresentação Institucional TCS",
    manager_id: 1,
    manager: "Gilberto Anderson",
    release_id: 1,
    release: "Plataformas de Produtos",
    business_id: 1,
    business: "Gestão Financeira PJ e Novos Negócios",
    client_id: 3,
    client: "Graziele Miranda",
    client_email: "graziele.miranda@tcs.com",
  },
  {
    id: 4,
    status: "Finished",
    title: "Apresentação Institucional TCS",
    manager_id: 1,
    manager: "Gilberto Anderson",
    release_id: 1,
    release: "Soluções Vic e Cartões",
    business_id: 1,
    business: "Integração Digital",
    client_id: 9,
    client: "Guilherme Rezende",
    client_email: "guilherme@tcs.com",
  },
  {
    id: 5,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager_id: 1,
    manager: "Gilberto Anderson",
    release_id: 1,
    release: "Itaú",
    business_id: 1,
    business: "React e Angular",
    client_id: 7,
    client: "Carlos Hideki Morita",
    client_email: "morita.carlos@tcs.com",
  },
  {
    id: 6,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager_id: 1,
    manager: "Helio Endo",
    release_id: 1,
    release: "Proteção e Comunicação com o Cliente ",
    business_id: 1,
    business: "Experiência com Clientes",
    client_id: 8,
    client: "Mateus Silveira",
    client_email: "silveira.mateus2@tcs.com",
  },
  {
    id: 7,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager_id: 1,
    manager: "Gilberto Anderson",
    release_id: 1,
    release: "Investment Services",
    business_id: 1,
    business: "Contas e Tarifas",
    client_id: 6,
    client: "João Pedro",
    client_email: "j.pedro@tcs.com",
  },
  {
    id: 8,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager_id: 1,
    manager: "Felipe Massaret",
    release_id: 1,
    release: "Plataformas de Produtos",
    business_id: 1,
    business: "Gestão Financeira PJ e Novos Negócios",
    client_id: 3,
    client: "Graziele Miranda",
    client_email: "graziele.miranda@tcs.com",
  },
  {
    id: 9,
    status: "Finished",
    title: "Apresentação Institucional TCS",
    manager_id: 1,
    manager: "Gilberto Anderson",
    release_id: 1,
    release: "Investment Services",
    business_id: 1,
    business: "Contas e Tarifas",
    client_id: 6,
    client: "João Pedro",
    client_email: "j.pedro@tcs.com",
  },
];
export default subjectsList;