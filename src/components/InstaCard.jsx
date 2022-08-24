/*eslint-disable*/
import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "../elements/Profile";
import Detail from "./Detail"

const InstaCard = ({stuff, posts}) => {



  let [name , setName] = useState(0)
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
      modal ? <Detail modal={modal} targetId={targetId} setModal={setModal} stuff={stuff} posts={posts} name={name}/> : null
      }

        <CardHeader>
          <Profile></Profile>
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
            <LikeSpan style={{color:'grey', marginLeft:'10px', cursor:'pointer'}}>
              ...더보기
            </LikeSpan>
            </div>
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
  height:200px;
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

