import React,{Component} from 'react';
import '../stylesheets/Dashboard.css';
import axios from 'axios';
import {createRoot} from 'react-dom/client';
class Dashboard extends React.Component{
    
    render(){
        
        return(
            
            <div id="home-content" style={{overflow:'hidden'}}>
                
                <div style={{display:'flex'}}>
                <div  className="stats">
                    <p>Stats</p>
                    <div id="stats"></div>
                </div>
                <div>
                <div className="topbar">
                    <form onSubmit={this.createPost} class="newpost">
                        <input type="text" id="title" placeholder="title" class="headtitle"></input>
                        <br/><br/>
                        <textarea on onKeyUp={(event) => (event.key === 'Enter' || event.key=== 'Backspace' ) && this.changesize()}  placeholder=" What's in your mind? "name="addcontent" id="addcontent" rows="3">

                        </textarea >
                        <br/><br/>
                        <button type="submit">Create Article</button>

                    </form>
                </div>
                
                <div id ="article-section" class="article-content">
                    
                </div>
                </div>
                <div className="profile">
                <input type="hidden" id="sessionUser"></input>
                
                <div id="profilestuff">
                </div>
                </div>
                </div>
            </div>
        )
        }
        LogOut(event){
            event.preventDefault();
            axios({url:"http://localhost:1337/api/Logout",method:'get'}).then((res)=>{
            if(res.data==="done"){
                window.location.replace("/");
            }
        })
        }
    getDetails(){
        axios({url:"http://localhost:1337/api/getDetails",method:'get'}).then((res)=>{
            if(res.data==="error"){
                window.location.replace("/Login");
            }
            else{
                //console.log(res.data)
                
                var y=JSON.parse(JSON.stringify(res.data))
                console.log(this.state)
                //this.setState({name:y.username})
                
                console.log(this.state)
                var x=<div><input type="hidden" id="session" value={y.username}></input><h2>{y.name}</h2><p><i>Author</i></p><h3><i>{y.email}</i></h3><button onClick={this.LogOut}>Log out</button></div>
                createRoot(document.getElementById("profilestuff")).render(x)
            }
        })

        axios({url:"http://localhost:1337/api/getArticles",method:'get'}).then((res)=>{
            if(res.data==="error"){
                window.location.replace("/Login");
            }
            else{
                console.log(res.data)
                
            }
            var y={}
                var z =JSON.parse(JSON.stringify(res.data))
                for(var i=0;i<z.length;i++){ 
                try{
                    y[z[i].author]['count']+=1
                    continue
                }
                catch(err){
                    y[z[i].author]={'name':z[i].author,'count':1}
                }
            }
            var y1=[]
            for (var j in y){
                y1.push(y[j])
            }
            console.log(y1)
            var x1=<div><h3>Highest posts by users</h3>{y1.map((item)=>(<p>{JSON.parse(JSON.stringify(item.name))}-<b>{JSON.parse(JSON.stringify(item.count))}</b></p>))}</div>
            
                var x=<div style={{overflow: 'auto',height:'500px'}}>
                    {res.data.map((item)=>(<div ><div className="articles">
                        <h3>{JSON.parse(JSON.stringify(item.title))}</h3>
                        <p>{JSON.parse(JSON.stringify(item.content))}</p>
                        
                        </div><br/></div>))}
                </div>
                //var y=JSON.parse(JSON.stringify(res.data))
                //var x=<div><h2>{y.name}</h2><p><i>Author</i></p><h3><i>{y.email}</i></h3><button onClick={this.LogOut}>Log out</button></div>
                createRoot(document.getElementById("stats")).render(x1)
                createRoot(document.getElementById("article-section")).render(x)
            }
        )

        }

        

        createPost(event){
            event.preventDefault()
            var req={
                author:document.getElementById("session").value,
                title:document.getElementById("title").value,
                content:document.getElementById("addcontent").value
        }

        //console.log(req)
        axios({url:"http://localhost:1337/api/addArticle",method:'post',params:req}).then((res)=>{
            if(res.data==="done"){
                window.location.replace('/Dashboard')
            }
            else{
                alert("Error in creating post")
            }
    })
}
    
        changesize(){
            
            var x=document.getElementById("addcontent");
            //console.log(x.value)
            x.value.split('\n')
            var y=parseInt(x.rows)
            //console.log(y)
            if (x.value.split('\n').length===y||(y-x.value.split('\n').length>1)){
                //console.log("in")
                
                document.getElementById("addcontent").setAttribute("rows",x.value.split('\n').length+1)
            }

        }
    constructor(){
        super()
        this.render();
        this.getDetails();
       
        //this.user=document.getElementById("sessionUser").value;
        
    }
    
}

export default Dashboard;