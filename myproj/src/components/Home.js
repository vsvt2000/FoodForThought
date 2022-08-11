//import { url } from 'inspector';
import React,{Component} from 'react';
import '../stylesheets/Home.css';
import {Link} from 'react-router-dom';
//import img from '../images/newspaper1.jpg';
//import { url } from 'inspector';
class Home extends React.Component{
     
    render(){
        return(
            <body>
            <div class="navbar">
                <div style={{marginLeft:"40%",justifyContent:'center'}}>
                <h1 style={{fontSize:"40px"}}>Food For Thoughts</h1>
                </div>
                <div style={{marginLeft:"30%",float:"right",display:"block"}}>
                <Link to="/Login"><button style={{"marginLeft":"2%","marginRight":"2%"}}>Login</button></Link>
                <br/><br/>
                <Link to="/Register"><button style={{"marginLeft":"2%","marginRight":"2%"}}>Register</button></Link>
                </div>
            </div>
            <div class ="home-content"style={{display:'flex',height:'auto'}}>
            <div class="article-day">
            <h2>Article of the day</h2>
            

<p>Before the onset of the pandemic in 2020, I would say that my life was a mess. I was blessed to have got a good standard of life, as well as a strong support system in the form of my parents, friends, near and dear ones. 
    I had the habit of making a mountain out a molehill, which eventually played a huge role in many potential opportunities going outside my reach. 
    I constantly procrastinated contemplating future happenings, such that I forgot to think about the present, and the fact that the present is the seed for the future.
    In my defence, it is easier to say ‘be in the present’ rather than execute it. This was affecting my academic performance, as until that point, my performance was a steadily falling downward curve. 
    I was also worried about trivial things that eventually didn’t  matter in the long run, but I was certainly wasting precious time and energy on such things. 
The pandemic was a blessing in disguise. 
Although it stirred a new path of life , causing chaos and pain everywhere the disease went, it gave some souls like me, precious time to prioritize my life.<br/><br/>I wish this platform helps all those who use it, to share their uplifting opinions with a free will, and help those who read it, as well as themselves, to be more empowered.</p>
<h3 style={{"float":"right"}}>-VVT</h3>
            </div>
            <div class="authormsg">
            <h3>Staying in the present - Admin's note</h3>
            

<p>Before the onset of the pandemic in 2020, I would say that my life was a mess. I was blessed to have got a good standard of life, as well as a strong support system in the form of my parents, friends, near and dear ones. 
    I had the habit of making a mountain out a molehill, which eventually played a huge role in many potential opportunities going outside my reach. 
    I constantly procrastinated contemplating future happenings, such that I forgot to think about the present, and the fact that the present is the seed for the future.
    In my defence, it is easier to say ‘be in the present’ rather than execute it. This was affecting my academic performance, as until that point, my performance was a steadily falling downward curve. 
    I was also worried about trivial things that eventually didn’t  matter in the long run, but I was certainly wasting precious time and energy on such things. 
The pandemic was a blessing in disguise. 
Although it stirred a new path of life , causing chaos and pain everywhere the disease went, it gave some souls like me, precious time to prioritize my life.<br/><br/>I wish this platform helps all those who use it, to share their uplifting opinions with a free will, and help those who read it, as well as themselves, to be more empowered.</p>
<h3 style={{"float":"right"}}>-VVT</h3>
            </div>
            </div>
            <div class="bottom-navbar">
                <h2>13 users registered</h2>
                <h2 style={{marginLeft:"3%"}}>10 posts posted</h2>
            </div>
            </body>
        )
    }
}

export default Home;