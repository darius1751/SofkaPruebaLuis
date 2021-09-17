import LoginForm from "../components/LoginForm";
const Login = ({user,setUser})=>{
    return(
        <div>
            <LoginForm user={user} setUser={setUser}/>
        </div>
    );
};
export default Login;