addEventListener('DOMContentLoaded', (event) => {
    const header = `
<nav class="menu">
        <div class="menuLogo"><h1>SLAIS</h1></div>
        <div class="menuLinks">
          
        <div class="menuButtons">
          <div class="menuButton"></div>
        </div>
      </nav>
      <div class="sideBar">
        <div class="sideBarBox">
                      <a class="sideBarLink" href="/home.html">Trang chủ</a
          >

          <div class="sideBarLine"></div>

          <a class="sideBarLink" href="/ai.html"
            >SLAIS AI - Trí tuệ nhân tạo</a
          >

    <a class="sideBarLink" href="/game/"
            >Trò chơi
          </a>

          <a class="sideBarLink" href="/phanmem/"
            >Phần mềm - Ứng dụng học tập
          </a>
<a class="sideBarLink" href="/news.html"
            >Tin tức
          </a>
          
        </div>
      </div>

      <div class="overlay"></div>

`;

    const headerContainer = document.querySelector('#header');

    headerContainer.innerHTML = header;

    const menu = document.querySelector('.header');
    const menuButton = document.querySelector('.menuButtons');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('menuOpen');
    });
});

addEventListener('DOMContentLoaded', (event) => {
    const footer = `
              <div class="footerTop">
                    <div class="container">
                        <p>© KitoMC 2023</p>
                        <p>Make by KitoMC & ChatGPT</p>
                    </div>
                </div>
  `;

    const footerContainer = document.querySelector('#footer');

    footerContainer.innerHTML = footer;
});
  // Replace 'YOUR_CHANNEL_ID' with your actual YouTube channel ID
  const channelId = 'UCqZ4kYJ3QFdihfa3rZZa9Sg';
  const apiKey = 'AIzaSyBYJQWBBBoOFEFS0yd3FoFHoLTo7NavKu0';
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

  // Function to fetch subscriber count
  async function fetchSubscriberCount() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const subscriberCount = data.items[0].statistics.subscriberCount;
      document.getElementById('subscriberCount').innerText = `Subscriber Count: ${subscriberCount}`;
    } catch (error) {
      console.error('Error fetching subscriber count:', error);
      document.getElementById('subscriberCount').innerText = 'Error fetching subscriber count';
    }
  }

  fetchSubscriberCount();
        document.addEventListener('contextmenu', event => event.preventDefault())

        document.onkeydown = function (e) {
            if (e.ctrlKey &&
                (e.keyCode === 85)) {
                return false
            }

            if ((e.ctrlKey && e.shiftKey) &&
                (e.keyCode === 73)) {
                return false
            }

            if (event.keyCode === 123) {
                return false
            }
        }
    const status = document.getElementById('status')

        status.textContent = navigator.onLine ? 'Online' : 'Offline'

        window.addEventListener('offline', e => {
            status.textContent = 'Offline'
        })

        window.addEventListener('online', e => {
            status.textContent = 'Online'
        })
