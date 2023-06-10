import React from 'react';
import './App.css';

const App = () => {
  return {
    <>
    <div class="nav">

    <ul>
      <li><a href="/html/index.html">Profile</a></li>
      <li><a href="/html/project.html">Project</a></li>
      <li><a href="/html/future.html">Future</a></li>
 
    </ul>
  </div>
  <main>
    <header>
      <img class="img" src="/img/anh.jpg">
      <h1>Phan Thanh Dĩ</h1>
    </header>
    <ul class="info">
      <li>
        <a href="https://www.tiktok.com/@ptd_thanhdi721"> <img class="img" src="/img/tiktok.png" 
        style="
    width: 30px;
    height: 30px;
    padding-bottom: 10px;">
    </a>
      </li>

      <li>
        <a href="https://www.facebook.com/profile.php?id=100023019017099"><img class="img" src="/img/facebook.png" 
        style="
    width: 30px;
    height: 30px;
    padding-bottom: 10px;">
    </a>
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UCXkaIbYdw9heSWiGDY8UFrA"><img class="img" src="/img/youtube.png" 
        style="
    width: 30px;
    height: 30px;
    padding-bottom: 10px;">
    </a>
      </li>
    </ul>
  </main>
    </>
  };
};

export default App;
