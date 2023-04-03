import styled from 'styled-components'

export const Container = styled.div`
    width: 30vw;
    height: fit-content;
    border-left: 15px solid #007BFF;
    border-radius: 8px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 500;
    left: 50%;
    transform: translate(90%, -85%);
    background-color: #FFFFFF;
`

export const Title = styled.div`
    font-weight: 600;
    font-size: 32px;
    margin-left: 4%;
    margin-top: 2%;
`

export const PositionLabel = styled.label`
    display: flex;
    flex-direction: row;
    margin-left: 4%;
    margin-top: 2%;
    
`

export const InputSubject = styled.input`
    height: 3.5vh;
    width: 27.5vw;
    display: flex;
    align-self: center;
    margin-left: 4%;
    border-radius: 5px;
    border: 1px solid #888C95;
`

export const Form = styled.form`
`

export const PositionSingle = styled.div`
    margin-left: 4%;
    margin-top: 2%;
`

export const PositionTag = styled.div`
    margin-left: 4%;
    margin-top: 2%;
`

export const PositionButtons = styled.div`
    place-items: center;
    display: flex;
    margin-top: 5%;
    justify-content: space-around;
    height: 13vh;
`