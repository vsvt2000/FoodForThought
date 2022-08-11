import React,{Component} from 'react';
import '../stylesheets/Home.css';
import axios from 'axios';
class Register extends React.Component{

    RegisterUser(event){
        event.preventDefault();
        console.log('Submit was clicked');
        var req={};
        req['name']=document.getElementById("Name").value;
        req['age']=document.getElementById("age").value;
        req['email']=document.getElementById("email").value;
        req['gender']=document.getElementById("Gender").value;
        req['username']=document.getElementById("username").value;
        req['password']=document.getElementById("password").value;
        req['re-password']=document.getElementById("re-password").value;
        req['samplepost']=document.getElementById("samplepost").value;
        console.log(req)

        axios({url:"http://localhost:1337/api/register",method:'post',params:req}).then(
            res=>{
                console.log(res);
            }
        )

    }
    render(){
        return(
            <body>
                <div class="navbar">
                <div style={{marginLeft:"40%",justifyContent:'center'}}>
                <h1 style={{fontSize:"40px"}}>Food For Thoughts</h1>
                </div>
                
            </div>
            <div class="register-form">
                    <h2 style={{textAlign:'center'}}>Register user</h2>
                    <form style={{paddingLeft:"2%"}} onSubmit={this.RegisterUser}>
                        <label for="Name"><b>Name </b></label>
                        <input type="text" name="name" id="Name"></input>
                        <br/><br/>
                        <label for="age"><b>Age </b></label>
                        <input type="number" name="age" id="age"></input>
                        <br/><br/>
                        <label for="email"><b>E-mail </b></label>
                        <input type="email" name="email" id="email"></input>
                        <br/><br/>
                        <label for ="Gender"><b>Gender </b></label>
                        <select name="gender" id="Gender">
                            <option name="gender" id="male" value="male">Male</option>
                            
                            <option name="gender" id="female" value="female">Female</option>
                           
                            <option name="gender" id="ni" value="ni">Do not want to answer this</option>
                        </select>
                        <br/><br/>
                        <label for="username"><b>Username </b></label>
                        <input type="text" name="username" id="username"></input>
                        <br/><br/>
                        <label for="password"><b>Password </b></label>
                        <input type="password" name="password" id="password"></input>
                        <br/><br/>
                        <label for="re-password"><b>Re-password</b></label>
                        <input type="password" name="re-password" id="re-password"></input>
                        <br/><br/>
                        <label for="samplepost"><b>Sample Post on Mental Health</b> [Min. 300 characters . This is mandatory in order to sign up as a registered user]<br/><br/></label>
                        <textarea name="samplepost" id="samplepost"></textarea>
                        <br/><br/>
                        <button type="submit">Register into FFT</button>
                    </form>
                </div>
            </body>
        )
    }
}

export default Register;