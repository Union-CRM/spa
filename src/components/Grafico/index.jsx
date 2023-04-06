// Style - Css
import { Container,H1,TitleDiv,DivImg, SquareDiv,TextGraphic,SquareText,LateSquare,NearSquare,OnTimeSquare, 
} from './styles';
import Donut from './Donut';

const Grafic = (props) => {

    const obj= [
        {
            titulo: "Subject",
            late: 10,
            new: 2,
            onTime: 8
        },
        {
            titulo: "Planner",
            late: 7,
            new: 1,
            onTime: 2
        }
    ];
     
    const value= props.value;
    return(
        <Container>
            <TitleDiv>
                <H1>{obj[value].titulo}</H1>    
            </TitleDiv>           
            <SquareDiv>
                <SquareText>Late</SquareText> 
                <LateSquare>10</LateSquare>   
            </SquareDiv>
            <SquareDiv>
                <SquareText>Near</SquareText> 
                <NearSquare>2</NearSquare>   
            </SquareDiv>
            <SquareDiv>
                <SquareText>On Time</SquareText> 
                <OnTimeSquare>8</OnTimeSquare>   
            </SquareDiv>
            <DivImg>
                 <Donut></Donut>  
            </DivImg>
            
        </Container>
    );
};

export default Grafic;