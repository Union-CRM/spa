import { createContext, useState } from "react";
export const RemarkContext = createContext();

export const RemarkContextProvider = ({ children }) => {
  const [idRemark, setIdRemark] = useState(null);
  const [remark, setRemark] = useState(remarkList);

  const [modalRemark, setModalRemark] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <RemarkContext.Provider
      value={{
        modalRemark,
        setModalRemark,
        remark,
        setRemark,
        idRemark,
        setIdRemark,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </RemarkContext.Provider>
  );
};

const remarkList = [
  {
    id: 1,
    date: "12-06-23",
    dateReturn: "10-05-23",
    noteText:
      "Identificar as necessidades do cliente e compreender seus objetivos; Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira; Identificar as necessidades do cliente e compreender seus objetivos; Apresentar a expertise da consultoria de TI em serviços financeiros; ",
    subject_id: 2,
  },
  {
    id: 2,
    date: "10-02-23",
    dateReturn: "20-07-23",
    noteText:
      "Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira; Identificar as necessidades do cliente e compreender seus objetivos; Apresentar a expertise da consultoria de TI em serviços financeiros; ",
    subject_id: 1,
  },
];
