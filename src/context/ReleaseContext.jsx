import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const ReleaseContextProvider = ({ children }) => {
  const [release, setRelease] = useState([{}]);
  const [modalDiscard, setModalDiscard] = useState(false);
  const [modalCreateRelease, setModalCreateRelease] = useState(false);
  const [modalSaveRelease, setModalSaveRelease] = useState(false);
  const [modalEditRelease, setModalEditRelease] = useState(false);
  const [idRelease,setIdRelease] = useState();
  const [modalStatusRelease, setModalStatusRelease] = useState(false);
  const [releaseTarget, setReleaseTarget] = useState()
  const [sucessRelease, setSucessRelease] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("token")){
    loadData();
    }
  }, []);

  const loadData = async () => {
    var release;
    
    try {
      const response = await axios.get(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8087/union/v1/releasetrains",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      release = response;
    } catch (error) {
      console.error(error.response);
    }

    setRelease(
        release.data.list.map((item) => ({
            id: item.release_id,
            code: item.release_code,
            name: item.release_name,
            business_id:item.business_id,
            business_name:item.business_name,
            status: item.status_description,
            tags: item.tags
            ? item.tags.map((tag) => ({ value: tag.tag_id, label: tag.tag_name, color: colors[Math.floor(Math.random() * (colors.length - 1))], }))
            : [],
        })) 
    );
  };
  return (
    <ReleaseContext.Provider value={{
      release, setRelease, loadData, modalCreateRelease,
      setModalCreateRelease,modalEditRelease, setModalEditRelease,
      modalDiscard,setModalDiscard,idRelease,setIdRelease,
      modalSaveRelease,
      setModalSaveRelease, modalStatusRelease, setModalStatusRelease,
      releaseTarget, setReleaseTarget, sucessRelease, setSucessRelease
    }}>
      {children}
    </ReleaseContext.Provider>
  );
};

export const ReleaseContext = createContext();

const colors = [
  "#836FFF",
  "#00BFFF",
  "#7FFFD4",
  "#00FA9A",
  "#00FF00",
  "#ADFF2F",
  "#BDB76B",
  "#FFDEAD",
  "#DEB887",
  "#9370DB",
  "#EE82EE",
  "#FFB6C1",
  "#F08080",
  "#FA8072",
  "#FFA07A",
  "#FFFF00",
  "#7B68EE",
  "#BC8F8F",
];

