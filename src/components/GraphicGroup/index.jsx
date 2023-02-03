import React from 'react'
import IconSystem from '../../assets/IconSystem'
import {Container, TotalMembers, PositionIcon, PositionSpan, TotalGroups, PositionTotal, MembersPerGroup, PositionIconGroups, PositionSpanGroups, PositionQuantity} from './styles'
import { Chart } from "react-google-charts"

const GraphicGroup = () => {
    const grupos = [
        {
            id: 1,
            group: 1,
        },
        {
            id: 2,
            group: 1,
        },
        {
            id: 3,
            group: 2,
        },
        {
            id: 4,
            group: 3,
        },
        {
            id: 5,
            group: 2,
        },
        {
            id: 6,
            group: 3,
        },
        {
            id: 7,
            group: 4,
        },
        {
            id: 8,
            group: 4,
        },
        {
            id: 8,
            group: 4,
        },
        {
            id: 8,
            group: 4,
        },
    ];

    const People = grupos.map((item) => {
        return item.id
    })

    const uniqueGroups = [...new Map(grupos.map((item) => 
        [item["group"], item])).values(),
    ];

        const options = {
        title: "Groups",
        pieHole: 0.3,
        is3D: false,
        slices: {
            0: { color: "#FFD012" },
            1: { color: "#07D95A" },
            2: { color: "#BB1E00" },
            3: { color: "#0AC9C9" },
        },
    };

  return (
    <Container>
        <TotalGroups>
            <PositionIconGroups>
                <IconSystem icon={"peopleTeams"} width={"44px"} height={"50px"}/>
            </PositionIconGroups>
            <PositionSpanGroups>
                <p>Groups</p>
            </PositionSpanGroups>
            <PositionQuantity>
               <p>{uniqueGroups.length}</p>
            </PositionQuantity>
        </TotalGroups>
        <TotalMembers>
            <PositionIcon>
                <IconSystem icon={"peopleTeams"} width={"57px"} height={"38px"}/>
            </PositionIcon>
            <PositionSpan>
                <p>Total Members</p>
            </PositionSpan>
            <PositionTotal>
                <p>{People.length}</p>
            </PositionTotal> 
        </TotalMembers>
        <MembersPerGroup>
            <Chart chartType="PieChart" width="200px" height="200px" data={{grupos}} options={options}/>
        </MembersPerGroup>
    </Container>
  )
}

export default GraphicGroup