import './App.css';
import { IMG_anh, IMG_facebook, IMG_tiktok, IMG_youtube } from './img/img';
function Home(){
    return(
        <>
        
        <main>
        <header>
          <img class="img" src={IMG_anh} />
          <h1>Phan Thanh Dĩ</h1>
        </header>
        <ul class="info">
          <li>
            <a href="https://www.tiktok.com/@ptd_thanhdi721">
            
              <img class="img"  src={IMG_tiktok} />
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/profile.php?id=100023019017099">
              <img class="img" src={IMG_facebook}/>
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/channel/UCXkaIbYdw9heSWiGDY8UFrA">
              <img class="img" src={IMG_youtube} />
            </a>
          </li>
        </ul>
      </main>
        </>
    )
    
}
export default Home