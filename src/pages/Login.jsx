import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:green;
    cursor:not-allowed;}
`;

const Error =styled.span`
color:red;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
const [username, setUSername] = useState("");

const [password,setPassword ] = useState("");
 const history=useHistory();

const {isFectching,error }= useSelector((state) => state.user);

const dispatch = useDispatch();

const handleClick=(e)=>{
  e.preventDefault();
  login(dispatch,{username,password});

}
const handleChange=(e)=>{
  e.preventDefault();
  history.push("/register")
}

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" 
          onChange={(e)=>setUSername(e.target.value)} />
          <Input placeholder="password"
          type="password"
          onChange={(e)=>setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFectching}>LOGIN</Button>
          {error &&<Error>Something Went Wrong....</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link onClick={handleChange}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
