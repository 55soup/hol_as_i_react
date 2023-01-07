import logo from './logo.svg';
import './App.css';
import './Slide.css';

function App() {
  return (
    <>
      <body>
    <header>
      <div class="nav_bar">
        <a href="#"><img class="logo" src="img/logo.png" /></a>
      </div>
      <div class="main_navbar">
        <div class="left_bar">
          <nav class="nav_container">
            <li class="nav-item"><a href="#BestPhoto">Best photo</a></li>
            <li class="nav-item"><a href="#TodayPhoto">Today Photo</a></li>
            <li class="nav-item"><a href="#Calandar">Calandar</a></li>
            <li class="nav-item"><a href="#Footer">Footer</a></li>
          </nav>
        </div>
        <div class="right_bar">
          <nav class="nav_container">
            <li class="nav-item">
              <a href="사진앨범_선택페이지/index.html">Album</a>
            </li>
            <button
              class="nav-item btn_preety"
              onclick="location.href='사진꾸미기페이지/index.html' "
            >
              <a href="#pick">사진 꾸미러 가기! ✨</a>
            </button>
          </nav>
        </div>
      </div>
      <button class="btn_menu">
        <i id="close_menu" class="bx bx-menu bx-sm"></i>
      </button>
    </header>
    <div class="photo">
      <section class="bestPhoto">
        <div>Best Photo</div>
        <div class="highlight"></div>
        <br />
        <div class="slidebox">
          <input type="radio" name="slide" class="slide" id="slide01" checked />
          <input type="radio" name="slide" class="slide" id="slide02" />
          <input type="radio" name="slide" class="slide" id="slide03" />
          <input type="radio" name="slide" class="slide" id="slide04" />
          <ul class="slidelist">
            <li class="slideitem">
              <div class="image-box">
                <a><img class="image-thumbnail" src="./img/01.jpg" /></a>
              </div>
            </li>
            <li class="slideitem">
              <div class="image-box">
                <a><img class="image-thumbnail" src="./img/02.jpg" /></a>
              </div>
            </li>
            <li class="slideitem">
              <div class="image-box">
                <a><img class="image-thumbnail" src="./img/03.jpg" /></a>
              </div>
            </li>
            <li class="slideitem">
              <div class="image-box">
                <a><img class="image-thumbnail" src="./img/04.jpg" /></a>
              </div>
            </li>
          </ul>
          <div class="slide-control">
            <div class="control01">
              <label for="slide04" class="prev"
                ><i class="bx bx-chevron-left"></i
              ></label>
              <label for="slide02" class="next"
                ><i class="bx bx-chevron-right"></i
              ></label>
            </div>
            <div class="control02">
              <label for="slide01" class="prev"
                ><i class="bx bx-chevron-left"></i
              ></label>
              <label for="slide03" class="next"
                ><i class="bx bx-chevron-right"></i
              ></label>
            </div>
            <div class="control03">
              <label for="slide02" class="prev"
                ><i class="bx bx-chevron-left"></i
              ></label>
              <label for="slide04" class="next"
                ><i class="bx bx-chevron-right"></i
              ></label>
            </div>
            <div class="control04">
              <label for="slide03" class="prev"
                ><i class="bx bx-chevron-left"></i
              ></label>
              <label for="slide01" class="next"
                ><i class="bx bx-chevron-right"></i
              ></label>
            </div>
          </div>
        </div>
      </section>

      <section calss="todayPhoto" id="TodayPhoto">
        <div>Today Photo</div>
        <div class="todayPhoto-box">
          <img src="https://url.kr/2e3z6c" class="todayPhoto-img img" />
          <p>2022.06.27(월)</p>
          <p>
            이 강아지는 내가 고1 때 키우던 강아지이다.엄청 말을 잘 들었었는데
            지금은 잘 지내려는지 모르겠다!
          </p>
        </div>
      </section>

      <section class="calandar" id="Calandar">
        <div>Calandar</div>
        <img src="./img/cal.jpg" class="img" />
      </section>
    </div>
    <footer class="main-footer" id="Footer">
      <div class="developerFooter">
        <li class="footerTitle">Developer info</li>
        <ul>
          <li>박선주 ✉ w2118@e-mirim.hs.kr</li>
          <a href="https://github.com/55soup" target="_blank"
            ><i class="bx bxl-github bx-sm"></i
          ></a>
          <br />
          <li>최윤영 ✉ w2127@e-mirim.hs.kr</li>
          <a href="https://github.com/olsi10" target="_blank"
            ><i class="bx bxl-github bx-sm"></i
          ></a>
        </ul>
      </div>
      <div class="schoolFooter">
        <li class="footerTitle">School info</li>
        <ul>
          <li>
            미림여자정보과학고등학교 (08821) 서울시 관악구 호암로 546 (신림동)
          </li>
          <br />
          <li>546 Hoam-ro, Gwanak-gu, Seoul, 08821 Korea</li>
          <br />
          <br />
          <a href="https://ko-kr.facebook.com/emirimhs/" target="_blank"
            ><i class="bx bxl-facebook bx-sm"></i
          ></a>
          <a href="https://www.instagram.com/mirim_student/" target="_blank"
            ><i class="bx bxl-instagram bx-sm"></i
          ></a>
          <i class="bx bxl-twitter bx-sm"></i>
        </ul>
      </div>
    </footer>
    <script src="js/custom.js"></script>
  </body>
    </>
  );
}

export default App;
