import{ React, useState, useEffect} from 'react'
import { Container, 
    ContainerCentral,
    PositionTitle, 
    Form,
    H1,
    DivButton,
    ClickButton,
    PositionButtonCancel,
    DivBusinessName,
    Label,
    Input,
    DivCodeStatus,
    DivCode,
    DivStatus,
    DivSegment,
    DivAtivo   } from "./styles"
import { useBusinessContext } from '../../../../hook/useBusinessContent';
import ButtonDefault from '../../../../assets/Buttons/ButtonDefault';
import { TagComponent } from '../../../Geral/TagComponent';
import SingleSelect from '../../../Geral/Input/SingleSelect';
import { useFetchBusiness } from '../../../../hook/useFetchBusiness';
import {useFetchTag} from '../../../../hook/useFetchTag';
import { useFetchSegment } from '../../../../hook/useFetchSegment';
const CreateEditBusiness = (props) => {
  const { id } = props;
  const { setModalCreateBusiness, setModalEditBusiness ,loadData,modalDiscard,
    setModalDiscard,modalEditBusiness, idBusiness, business, businessTarget} = useBusinessContext(); 
  const { createBusiness, updateBusiness, updateStatusBusiness} = useFetchBusiness();
  const [flag, setFlag] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [businessCode, setBusinessCode] = useState("");
  const [businessStatus, setBusinessStatus] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [businessSegment, setBusinessSegment] = useState("");
  const [tags, setTags] = useState("");
  const { tagBusinessList } = useFetchTag("Tag");
  const [tagBusinessType, setTagBusinessType] = useState([{}]);

  const [newBusiness,setNewBusiness] = useState("");
  const { segmentList } = useFetchSegment("Seg");

  const status = [
    { id: 1, value: "Ativo", label: "ATIVO" },
    { id: 2, value: "Inativo", label: "INATIVO" },
  ];

  useEffect(() => {
    
    if(props.title === "Edit Business"){
      
      //const businessList = business.filter((item) => item.id === props.id)[0];
      //console.log(idBusiness);
      console.log(businessTarget)
      setBusinessName(businessTarget.name);
      console.log(businessTarget)
      setBusinessCode(businessTarget.code);
      setBusinessStatus(businessTarget.status);
      setBusinessSegment(businessTarget.segment_description);
      setTags(businessTarget.tags);
    }
  }, [businessTarget]);


  const handleSubmit = () => {
    if(!modalDiscard){
      if(!modalEditBusiness){
        insertBusiness()
      }
      else{
        editBusiness()
      }
    }
  };

  const insertBusiness = () =>{

    const newBusiness = {
      business_name: businessName,
      business_code: businessCode,
      segment_id: businessSegment,
      tags: tags.map((tag) => ({ tag_id: tag.value}))
    }

    if(businessName,businessCode,businessSegment){
      createBusiness(newBusiness);
      loadData()
      setModalCreateBusiness(false)
    }
    else{
      setFlag(true);
    }
  }

  const editBusiness = () => {
    
    const newBusiness = {
      business_name: businessName,
      business_code: businessCode,
      status: businessStatus,
      segment_id: businessSegment,
      tags: tags.map((tag) => ({ tag_id: tag.value}))
    }
    if(businessName,businessCode,businessStatus,businessSegment){
      updateBusiness(newBusiness,idBusiness);
      if(newBusiness.status != idBusiness.status){
        updateStatusBusiness(idBusiness.id);
      }
      loadData()
      setModalEditBusiness(false)
    }
    else{
      setFlag(true);
    }

  }

  const handleCancel = () => {
    setModalCreateBusiness(false)
    setModalEditBusiness(false)
  };

  const handleSelectBusiness = (id) => {
    setBusinessStatus(id);
  };

  const handleSelectSegment = () => {
    setBusinessSegment(businessStatus);
  };

  const handleChange = (id) => {
    //setBusinessStatus(id);
    console.log(id);
  };


  return (
    <ContainerCentral>
        <Container>
            <PositionTitle>
                <H1>{props.title}</H1>
            </PositionTitle>
            <Form>
            <DivBusinessName>

                <Label>Business Name</Label> 
                {/*!modalEditBusiness &&*/ (
                <Input
                  widthInput={"98% !important"}
                  name={businessName}
                  flag={flag}
                  value={businessName ? businessName : ("")}
                  onChange={(event) => setBusinessName(event.target.value)}
                  required
                /> )}
            </DivBusinessName> 
            <DivCodeStatus>
                <DivCode>
                    <Label>Code</Label>
                    {(
                    <Input 
                      widthInput={"98% !important"}
                      name={businessCode}
                      flag={flag}
                      value={businessCode ? businessCode : ("")}
                      onChange={(event) => setBusinessCode(event.target.value)}
                      required
                    />
                    )}
                </DivCode>
                <DivStatus>
                    <Label>Status</Label>
                      {modalEditBusiness && (
                      <SingleSelect
                      set={(businessStatus) => setBusinessStatus(businessStatus)}
                      onChange={(event) => setBusinessStatus(event.target.value)}
                      placeholder={flag && !businessStatus ? "Required field" : ""}
                      options={status}
                      value={businessStatus ? businessStatus : ("")}
                      sizeSingle={"87%"}
                      sizeMenu={"100%"}
                      isDisabled={false}
                      required
                      />
                      )}
                      {!modalEditBusiness && (
                        <>
                          <DivAtivo>
                            <Input placeholder="Status" value="Ativo" disabled />
                          </DivAtivo>
                        </>
                        )}
                </DivStatus>    
            </DivCodeStatus>
            <DivSegment>
                <Label>Segment</Label>
                {!modalEditBusiness && (
                  <SingleSelect
                  set={(s) => setBusinessSegment(s)}
                  placeholder={flag && !businessSegment ? "Required field" : ""}
                  options={segmentList ? segmentList : []}
                  sizeSingle={"86.5%"}
                  sizeMenu={"100%"}
                  isDisabled={false}
                  required
                  />
                )}
                {modalEditBusiness && (
                  <SingleSelect
                  set={(businessSegment) => setBusinessSegment(businessSegment)}
                  placeholder={flag && !businessSegment ? "Required field" : ""}
                  options={segmentList ? segmentList : []}
                  value={businessSegment ? businessSegment : ("")}
                  sizeSingle={"86.5%"}
                  sizeMenu={"100%"}
                  isDisabled={false}
                  required
                  />
                )}
            </DivSegment>
            <TagComponent
              options={tagBusinessList ? tagBusinessList : []}
              tags={tags}
              placeholder={""}
              label={"Tag"}
              width={"90%"}
              widths={"73.9%"}
              sizeHeight={"3.5vh"}
              heights={"12vh"}
              sizeMenuList={"10vw"}
              sizeMenu={"35%"}
              set={(t) => setTags(t)}
            />   
            </Form>
            <DivButton>
            <ClickButton onClick={() => handleSubmit()}>
              <ButtonDefault
                type="adminSave"
                weightFont={"500"}
                sizeFont={"18px"}
                name={"Save"}
              />
            </ClickButton>
            <PositionButtonCancel onClick={() => handleCancel()}>
              <ButtonDefault type="adminCancel" name={"Cancel"} />
            </PositionButtonCancel> 
            </DivButton>  
        </Container>
    </ContainerCentral>
  )
}

export default CreateEditBusiness;
