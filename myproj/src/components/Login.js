import React,{Component} from 'react';
import '../stylesheets/Home.css';
import axios from 'axios';

class Login extends React.Component{
    Change(event){
            event.preventDefault();
            
    }
    Login(event){
        event.preventDefault();
        
        var req={}
        req['username']=document.getElementById('username').value;
        req['password']=document.getElementById('password').value;
        console.log(req)
        axios({url:"http://localhost:1337/api/login",method:'post',params:req}).then(
            res=>{
                console.log(res);
                if (res.data==="logged in,session set"){
                    console.log('res')
                    window.location.replace('/Dashboard')
               
            }
            }
        )
    }
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <body>
                <div class="navbar">
                <div style={{marginLeft:"40%",justifyContent:'center'}}>
                <h1 style={{fontSize:"40px"}}>Food For Thoughts</h1>
                </div>
                
                </div>
                <div class="login-form">
                <h2 style={{textAlign:'center'}}>Login</h2>
                <form style={{paddingLeft:"2%"}} onSubmit={this.Login}>
                <label for="username"><b>Username </b></label>
                        <input type="text" name="username" id="username"></input>
                        <br/><br/>
                        <label for="password"><b>Password </b></label>
                        <input type="password" name="password" id="password"></input>
                        <br/><br/>
                        <button type="submit">Login</button>
                </form>
                </div>
            </body>
        )
    }
}

export default Login;