import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-col">
          <h4>Компания</h4>
          <ul>
            <div>
              <a href="">О компании</a>
            </div>
            <div>
              <a href="">Акции и скидки</a>
            </div>
            <div>
              <a href="">Доставка и оплата</a>
            </div>
            <div>
              <a href="">Отзывы</a>
            </div>
            <div>
              <a href="">Гарантия и возраст</a>
            </div>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Поддержка</h4>
          <ul>
            <div>
              <a href="">Вопрос-ответ</a>
            </div>
            <div>
              <a href="">Бонусная программа</a>
            </div>
            <div>
              <a href="">Политика конфиденциальности</a>
            </div>
            <div>
              <a href="">Персональные данных</a>
            </div>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Способы оплаты</h4>
          <ul>
            <li>
              
              <a href="">
                <img
                  class="kali9"
                  src="https://www.pngitem.com/pimgs/m/207-2077873_mobile-banking-icon-mobile-banking-logo-hd-png.png"
                  alt=""
                />
              </a>
            </li>
            <li>
             
              <a href="">
                <img
                  class="kali10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85sm0q9Gin_B1bEMTSVd5JkcUJQIkoYwcfA&usqp=CAU"
                  alt=""
                />
              </a>
            </li>
            <li>
            
              <a href="">
                <img
                  class="kali11"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-DxNgI8aS8ymsB2vws0oFT-q7njXxixFdQ&usqp=CAU"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
         
          <ul className="block-ul">
            
            <div>
              <a href="">
                <p class="qwer">г.Москва,улица Свободы 1/7</p>
              </a>
            </div>
            <br/>
            <a href="">
              <i class="fab fa-facebook-f"></i>
            </a>
            <br/>
            <a href="">
              <i class="fab fa-instagram"></i>
            </a>
            <br/>
            <a href="">
              <i class="fab fa-twitter"></i>
            </a>
            <br/>
            <a href="">
              <i class="fab fa-vk"></i>
            </a>
            <br/>
            <a href="">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </ul>
        </div>
      </footer> 
      
    </div>
  );
};

export default Footer;
