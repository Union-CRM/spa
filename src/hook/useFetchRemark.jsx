import axios from "axios";
import { usePlannerContext } from "./usePlannerContext";
import { useRemarkContext } from "./useRemarkContent";
import { remarkCreate, remarkUpdate } from "../api/routesAPI";
export const useFetchRemark = () => {
  const {
    setModalError,
    setModalRemark,
    setModalPopUpFinished,
    setModalPopUpCanceled,
  } = usePlannerContext();
  const { loadRemarkList } = useRemarkContext();

  const createRemark = async (remark) => {
    try {
      const response = await axios.post(remarkCreate, remark, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      loadRemarkList();
      return response.data.id;
    } catch (error) {
      console.error(error);

      setModalError(true);
      setModalRemark(false);
      setModalPopUpFinished(false);
      setModalPopUpCanceled(false);
      return false;
    }
  };

  const updateRemark = async (remark, remark_id) => {
    axios
      .put(`${remarkUpdate}${remark_id}`, remark, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        loadRemarkList();
      })
      .catch(function (error) {
        setModalError(true);
        console.error(error);
      });
  };

  return {
    createRemark,
    updateRemark,
  };
};
