import { createContext, useState } from "react";
export const ClientContext = createContext();

export const ClientContextProvider = ({ children }) => {
  const [client, setClient] = useState(subjectsList);

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {children}
    </ClientContext.Provider>
  );
};

const subjectsList = [
  {
    id: 1,
    status: "Active",
    email: "igorsena@tcs.com",
    client: "Igor Sena Soares Silva",
    textRole: "Analyst DevOps",
    textCustomer: "Itaú",
    textBusiness: "Infraestrutura e Operações TI",
    textRelease: "Experiência Digital",
    tags: [
      { value: 6, label: "Azure", color: "#3ddc97" },
      { value: 12, label: "Demand Drafts", color: "#6CB4EE" },
      { value: 1, label: "Online Banking", color: "#FFB2D1" },
    ],
  },

  {
    id: 2,
    status: "Inactive",
    email: "soares.ariel@tcs.com",
    client: "Ariel Soares",
    textRole: "UX Design",
    textCustomer: "Itaú",
    textBusiness: "Ativos PJ",
    textRelease: "Cliente PJ Itaú",
    tags: [
      { value: 11, label: "Product design", color: "#ACD4FF" },
      { value: 7, label: "Salesforce", color: "#ACD4FF" },
      { value: 5, label: "Internet of Things (IoT)", color: "#FFE60082" },
    ],
  },
  {
    id: 3,
    status: "Active",
    email: "graziele.miranda@tcs.com",
    client: "Graziele Miranda",
    textRole: "Software Engineer",
    textCustomer: "Itaú",
    textBusiness: "Gestão Financeira PJ e Novos Negócios",
    textRelease: "Plataformas de Produtos",
    tags: [
      { value: 8, label: "AWS", color: "#ACD4FF" },
      { value: 5, label: "Internet of Things (IoT)", color: "#FFE60082" },
      { value: 7, label: "Salesforce", color: "#ACD4FF" },
    ],
  },
  {
    id: 4,
    status: "Active",
    email: "luana.nogueira1@email.com",
    client: "Luana Nogueira",
    textRole: "Dev Front-End",
    textCustomer: "Itaú",
    textBusiness: "Crédito Imobiliário",
    textRelease: "Receber e Arrecadar PJ",
    tags: [
      { value: 10, label: "Credit & Debit Cards", color: "#ACD4FF" },
      { value: 3, label: "Issue of Credit Cards", color: "#FFE60082" },
      { value: 1, label: "Online Banking", color: "#3ddc97" },
      { value: 8, label: "AWS", color: "#ACD4FF" },
    ],
  },
  {
    id: 5,
    status: "Active",
    email: "maycon.cabo@tcs.com",
    client: "Maycon Cabo",
    textRole: "Product Owner",
    textCustomer: "Itaú",
    textBusiness: "Corretora Institucional",
    textRelease: "Jornada do Cliente",
    tags: [
      { value: 4, label: "Security & Identification", color: "#FFB2D1" },
      { value: 1, label: "Online Banking", color: "#3ddc97" },
      { value: 5, label: "Internet of Things (IoT)", color: "#FFE60082" },
    ],
  },
  {
    id: 6,
    status: "Inactive",
    email: "j.pedro@tcs.com",
    client: "João Pedro",
    textRole: "Tech Lead",
    textCustomer: "Itaú",
    textBusiness: "Contas e Tarifas",
    textRelease: "Investment Services",
    tags: [
      { value: 2, label: "Cyber Security", color: "#ACD4FF" },
      { value: 7, label: "Salesforce", color: "#ACD4FF" },
      { value: 9, label: "Google Cloud", color: "#ACD4FF" },
    ],
  },
  {
    id: 7,
    status: "Inactive",
    email: "morita.carlos@tcs.com",
    client: "Carlos Hideki Morita",
    textRole: "Dev Front-End",
    textCustomer: "Itaú",
    textBusiness: "React e Angular",
    textRelease: "Itaú",
    tags: [
      { value: 4, label: "Security & Identification", color: "#FFB2D1" },
      { value: 11, label: "Product design", color: "#ACD4FF" },
      { value: 9, label: "Google Cloud", color: "#ACD4FF" },
    ],
  },
  {
    id: 8,
    status: "Active",
    email: "silveira.mateus2@tcs.com",
    client: "Mateus Silveira",
    textRole: "Scrum Master",
    textCustomer: "Itaú",
    textBusiness: "Experiência com Clientes",
    textRelease: "Proteção e Comunicação com o Cliente ",
    tags: [
      { value: 10, label: "Credit & Debit Cards", color: "#ACD4FF" },
      { value: 11, label: "Product design", color: "#ACD4FF" },
      { value: 6, label: "Azure", color: "#3ddc97" },
    ],
  },
  {
    id: 9,
    status: "Active",
    email: "guilherme@tcs.com",
    client: "Guilherme Rezende",
    textRole: "Software Engineer",
    textCustomer: "Itaú",
    textBusiness: "Integração Digital",
    textRelease: "Soluções Vic e Cartões",
    tags: [
      { value: 10, label: "Credit & Debit Cards", color: "#ACD4FF" },
      { value: 5, label: "Internet of Things (IoT)", color: "#FFE60082" },
      { value: 1, label: "Online Banking", color: "#3ddc97" },
    ],
  },
];

/*
  { value: 1, label: "Online Banking", color: "#3ddc97" },
  { value: 2, label: "Cyber Security", color: "#ACD4FF" },
  { value: 3, label: "Issue of Credit Cards", color: "#FFE60082" },
  { value: 4, label: "Security & Identification", color: "#FFB2D1" },
  { value: 5, label: "Internet of Things (IoT)", color: "#FFE60082" },
  { value: 6, label: "Azure", color: "#3ddc97" },
  { value: 7, label: "Salesforce", color: "#ACD4FF" },
  { value: 8, label: "AWS", color: "#ACD4FF" },
  { value: 9, label: "Google Cloud", color: "#ACD4FF" },
  { value: 10, label: "Credit & Debit Cards", color: "#ACD4FF" },
  { value: 11, label: "Product design", color: "#ACD4FF" },
  { value: 12, label: "Demand Drafts", color:"#ACD4FF"},
*/
