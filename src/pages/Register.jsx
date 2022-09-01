import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"),
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-left:15px;
  
`;

const Register = () => {
const [username, setUSername] = useState("");
//const [errors,isFectching ] = useState("");
const [password,setPassword ] = useState("");
const [confPassword,setConfPassword ] = useState("");
const history=useHistory();
const [email,setEmail ] = useState("");
const handleClickeee=(e)=>{
  e.preventDefault()
  history.push('/')
}
const handleClickee=(e)=>
{
  e.preventDefault()
  if(username===""||password===""||email===""||confPassword==="")
  {
     alert("Please fill all the fields");
  }
    if(username!==""&&password!==""&&
    confPassword!==""&&email!==""&&password===confPassword)
    {
       register(dispatch,{username,email,password});
    }
    if(password!==confPassword)
    {
       alert("Passwords are not Matching");
       
    }

}
//const history=useHistory();
//const {isFectching,error }= useSelector((state) => state.user);
const dispatch = useDispatch();

console.log(confPassword);
console.log(email);

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="usernamename" onChange={(e)=>setUSername(e.target.value)}/>
          
          <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
          <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Input placeholder="confirm password" onChange={(e)=>[handleClickee,setConfPassword(e.target.value)]}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClickee}>CREATE</Button>
          <Button onClick={handleClickeee}> Back</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
