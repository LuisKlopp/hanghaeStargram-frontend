/*eslint-disable*/
import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "../elements/Profile";
import Detail from "./Detail"
import CardProfile from "../elements/CardProfile";

const InstaCard = ({stuff, user}) => {



  let [ targetId, setTargetId ] = useState(0)
  let [ modal, setModal ] = useState(false)

  const set_modal = () => {
    setModal(true)
    setTargetId(stuff.id)
  }


  return (
    <>
      <StWrapper>
      {
      modal ? <Detail setModal={setModal} stuff={stuff} user={user}/> : null
      }

        <CardHeader>
          <CardProfile stuff={stuff}></CardProfile>
          <DotImg></DotImg>
        </CardHeader>
        <CardImg  onClick={() => {
          set_modal()
        }} stuff={stuff} style={{cursor:'pointer'}}></CardImg>

        <CardFooter>

        <FooterDiv1>
          <Icon_1></Icon_1>
          <Icon_2></Icon_2>
          <Icon_3></Icon_3>
          </FooterDiv1>

          <FooterDiv2>
            <LikeSpan>
              좋아요 10개
            </LikeSpan>
            <div style={{height:'5px'}}></div>
            <div style={{display:'flex', width:'300px'}}>
            <LikeSpan >
              {stuff.content}
            </LikeSpan>
            </div>

        {/* <div style={{display:'flex', height:'50px', width:'100px'}}>
        <StProfile stuff={stuff}>
        </StProfile>
        <StNameDiv>
          <StUserName>{stuff.author}</StUserName>
          <StUserName style={{paddingRight:'60px', fontWeight:'500', width:'100px'}}>{stuff.authorNickname}</StUserName>
        </StNameDiv>
        </div> */}

          </FooterDiv2>
        </CardFooter>

      </StWrapper>
    </>
  );
};

export default InstaCard;

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: ecdede;
    
	}
  `;

const StWrapper = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;;
  border-radius: 10px;
  margin-top:30px;
  position:relative;
  box-shadow: 0px 0px 1px 0px;
`;

const CardHeader = styled.div`
  width:100%;
  height:70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`

const CardImg = styled.div`
  width:100%;
  height:400px;
  background-size: 100% 100%;
  background-image: url(${props => props.stuff.imageUrl});
  &:hover {
    background-size: 105% 105%;
    transition: 0.5s;
  }
`
const CardFooter = styled.div`
  width:100%;
  height:150px;
  display:flex;
  flex-direction:column;
`

const DotImg = styled.div`
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIulwTvPTShIrUNTNlq4e1I2uuWbeEXEf2TM-RdJRlh2avnSUYK0HoYLeKJMe3nJ6mCEM&usqp=CAU');
  background-size: 100% 100%;
  width:25px;
  height:25px;
  margin-right:10px;
  cursor:pointer;
  `

const FooterIcon = styled.button`
  background-size: 100% 100%;
  width:25px;
  height:25px;
  background-color: white;
  border:none;
  cursor:pointer;
  &:hover{ 
    width:32px;
  }
`

const Icon_1 = styled(FooterIcon)`
  background-image: url('https://cdn-icons-png.flaticon.com/512/2560/2560343.png');
`
const Icon_2 = styled(FooterIcon)`
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOmDghVsJuB0Vu_JMgjA87Sqj8KEcfI5WLg&usqp=CAU');
`
const Icon_3 = styled(FooterIcon)`
  background-image: url('data:image/png;base64,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')
`




const FooterDiv1 = styled.div`
  height:50px;
  width:30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const FooterDiv2 = styled.div`
  width:30%;
  display:flex;
  flex-direction:column;
`

const LikeSpan = styled.span`
  font-weight: 600;
  margin-left:20px;
`



/* const StProfile = styled.div`
  width:50px;
  height:50px;
  border-radius: 50px;
  margin-left:10px;
  background-image: url(${(props => props.stuff.comments.profileImage)});
  /* background-image: url('data:image/jpeg;base64,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'); */
  /* background-size: 100% 100%;
  cursor:pointer;
`

const StNameDiv = styled.div`
  width:30%;
  height:70%;
  margin-left:5px;
  display:flex;
  /* text-align: center; */
  /* flex-direction:column;

`

const StUserName = styled.span`
  font-weight: 600;
` */