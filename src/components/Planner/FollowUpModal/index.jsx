import React, { useState, useEffect } from "react";
import SingleSelect from "../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import { GuestComponent } from "../../Geral/Input/GuestsComponent";
import {
  Container,
  Title,
  PositionLabel,
  InputSubject,
  Form,
  PositionSingle,
  PositionTag,
  PositionButtons,
} from "./styles";
import { useUserContext } from "../../../hook/useUserContext";
import { useFetchPlanner } from "../../../hook/useFetchPlanner";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useClientContext } from "../../../hook/useClientContent";

const options = [
  { value: 1, label: "In one month" },
  { value: 3, label: "In three months" },
  { value: 6, label: "In six months" },
];

const FollowUpModal = (props) => {
  const { user, userTarget } = useUserContext();
  const { createPlanner } = useFetchPlanner();
  const [guests, setGuests] = useState();
  const { plannerEdit } = usePlannerContext();
  const { client } = useClientContext();
  const [date] = useState(new Date(plannerEdit.date));

  const clientOption = client
    ? client
        .filter((c) => c.status === "Active")
        .map((c) => ({ value: c.id, label: c.client }))
    : [];

  useEffect(() => {
    setGuests(
      plannerEdit.guest
        ? plannerEdit.guest.map((g) => ({
            value: g.client_id,
            label: g.client_name,
          }))
        : []
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlanner = {
      name: plannerEdit.subject_title,
      date:
        date.toISOString().substring(0, 10) + " " + date.toLocaleTimeString(),
      duration: plannerEdit.duration,
      subject: plannerEdit.subject,
      client: plannerEdit.client,
      release: plannerEdit.release,
      user: userTarget.id,
      remark: plannerEdit.remark,
      guest: guests.map((g) => ({ client_id: g.value })),
    };
    createPlanner(newPlanner);
  };

  const handleSelectReturn = (r) => {
    date.setMonth(date.getMonth() + r);
  };

  return (
    <Container>
      <Title>Follow Up</Title>
      <Form onSubmit={handleSubmit}>
        <PositionLabel>Subject</PositionLabel>
        <InputSubject
          type="text"
          value={plannerEdit.subject_title}
          disabled
        ></InputSubject>
        <PositionLabel>Client Name</PositionLabel>
        <InputSubject
          type="text"
          value={plannerEdit.client_name}
          required
          disabled
        ></InputSubject>
        <PositionLabel>Email</PositionLabel>
        <InputSubject
          type="text"
          value={plannerEdit.client_email}
          disabled
        ></InputSubject>
        <PositionLabel>Business</PositionLabel>
        <InputSubject
          type="text"
          value={plannerEdit.business}
          disabled
        ></InputSubject>
        <PositionLabel>Release Train</PositionLabel>
        <InputSubject
          type="text"
          value={plannerEdit.release_title}
          disabled
        ></InputSubject>
        <PositionTag>
          <GuestComponent
            options={clientOption}
            tags={guests}
            set={(g) => setGuests(g)}
            label={"Guests"}
            sizeHeight={"3.5vh"}
            width={"9vw"}
            widths={"15vw"}
            heights={"12vh"}
            marginLeft={"40%"}
          />
        </PositionTag>
        <PositionSingle>
          <SingleSelect
            placeholder={""}
            label={"Return"}
            options={options}
            sizeHeight={"3.5vh"}
            sizeSingle={"9vw"}
            set={(d) => handleSelectReturn(d)}
            required
          />
        </PositionSingle>
        {/*<PositionSingle>
                <SingleSelect label={"Status"} options={options} sizeHeight={"3.5vh"} sizeSingle={"9vw"}/>
            </PositionSingle>*/}
        <PositionButtons>
          <ButtonDefault
            type={"userCancel"}
            name={"Cancel"}
            sizeWidth={"12vw"}
          />
          <ButtonDefault type={"userSave"} name={"Save"} sizeWidth={"12vw"} />
        </PositionButtons>
      </Form>
    </Container>
  );
};

export default FollowUpModal;
