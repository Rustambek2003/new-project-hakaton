import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItem = useSelector(state=>state.cart.cart)
    
    
   
  return (
    <div>
    

      <div class="qwertya">

        <div class="korzina">
            
          <h1 class="rrr">Корзина</h1>

          <div>
            <img
            className="block-foto-cart"
              src='https://images.immediate.co.uk/production/volatile/sites/4/2021/08/mountains-7ddde89.jpg?quality=90&resize=768,574'
              alt=""
            /> 
          </div>
          <div class="name"></div>
        
          <button type="button" class="btn btn-light">
            -
          </button>
          <h1 class="qwertyu">0</h1>
          <button type="button" class="btn x btn-light">
            +
          </button>
          <div class="price1">5000 $</div>
          <div class="price2">5700 $</div>
        </div>

        <div class="korzina2">
          <div class="dost">выберите адрес доставки</div>
          <span class="towar">товары, 1шт</span>
          <span class="towar d">55 134 $</span>
          <span class="df">Итого</span>
          <span class="kj">55 134 $</span>
          <button>Заказать</button>
          <input type="checkbox" name="" id="po" />
          <div class="sogl">
            Соглашаюсь с правилами пользования торговой площадкой и возврата
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Cart;
