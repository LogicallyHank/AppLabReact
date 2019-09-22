import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div class="header">
          <h1>Assignment 2: The Stack</h1>
          <h3>By Hank Wu</h3>
          <p>A negative change I have experienced as a result of Instagram is social anxiety. When watching my friends out having fun or attending interesting evens, I experience a fear of missing out that causes me to feel bad about myself. I could mitigate this impact by relying less on social media as a means by which I compare my life to others. Rather, I can use it as a lens to view the best aspect of my friend's lives and remind myself that it is not the full picture. A negative change I've experienced as a result of the YouTube app is overstimulation. Because I am constantly watching videos about topics that interest me, silent times when I do not have access to the app become dreadful. I can mitigate this by deliberately forcing myself to enjoy time away from entertainment and eduction on YouTube and force myself to spend time reflecting silently. One negative change I've experienced as a result of the eleme application is a laziness that inhibits me from properly exploring my surroundings. Although I live in the exciting jingan temple district of Shanghai, the convenience of ordering food straight to my apartment has made it difficult for me to justify spending time outside to properly explore the restaurants and nightlife nearby. I can mitigate this by forcing myself to pick up food on my way back home from class and therefore limit my eleme usage and promote neighborhood exploration.</p>
          <p>This page will demonstrate the FOMO (fear of missing out) Instagram users experience whilst using the app by demonstrating this process through "The Stack".</p>
          </div>
            <div class="content">
              <div class="content-box">
                <img class="pic" src="https://cdn3.imggmi.com/uploads/2019/9/13/0be31e27bf29f834a63f344dffc1f904-full.jpg" alt="User" width="300" height="300"/>
                <p class="desc">User Layer: Normal people use Instagram but become jealous when they see other people leading more exciting lives.</p>  
              </div>
            <div class="content-box">
                  <img class ="vert" src="https://cdn3.imggmi.com/uploads/2019/9/13/62c81c3fe5d654e0a8c9795ab480539e-full.jpg" alt="User" width="150" height="300"/>
                <p class="desc">Interface Layer: The instagram app shows users other people's (sometimes deceptively happy) life photos and the reactions of others to these photos.</p>
             </div>
            <div class="content-box">
                  <img class="pic" src="https://cdn3.imggmi.com/uploads/2019/9/13/9c59b0fe9269417075a6ff2603aed9e0-full.jpg" alt="User" width="300" height="300"/>
                <p class="desc">Address Layer: Routers at home are delivering these "FOMO" images to user's phones from the internet. </p>
            </div>
            <div class="content-box">
                  <img class="pic" src="https://cdn3.imggmi.com/uploads/2019/9/13/7fcb56daca8f3323b94059b714233731-full.jpg" alt="User" width="300" height="300"/>
                <p class="desc">City Layer: The assembly of users within the Instagram app is effectively a group of users experiencing FOMO. </p>
            </div>
            <div class="content-box">
                  <img class="vert" src="https://cdn3.imggmi.com/uploads/2019/9/13/fffc9ac828eaa56595ab65a8a18708ab-full.jpg" alt="User" width="170" height="300"/>
                <p class="desc">Cloud Layer: The servers by which Facebook (Instagram's owner) stores and transmits the Instagram content over the internet. Does F stand for Facebook or FOMO?</p>
            </div>
            <div class="content-box">
                   <img class="pic" src="https://cdn3.imggmi.com/uploads/2019/9/13/124e9600e5c95f4b432ce5da5319eab9-full.jpg" alt="User" width="300" height="300"/>
                <p class="desc">Earth Layer: The other people posting the images serve as the earth layer. However, their life may not always be as happy as it seems.</p>
            </div>
          </div>
    </div>
  );
}

export default App;
