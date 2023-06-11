import React, { useEffect } from "react";
import "./home.css";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../../../store/action";
import { addToCart } from "../../../store/cart";
import { Spin } from "antd";

const Home = ({ id, name, price }) => {
  const item = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItem());

  }, []);
  if(!getItem.length===0){
    return <Spin/>
  }
  const handleAddToCart = () => {
    const newItem = { id, name, price };
    dispatch(addToCart(newItem));
  };
  return (
    <>
      <div className="block-wrapp-home">
        <div class="meimg">
          <img
            class="myimg"
            src="https://bizneszakon.ru/wp-content/uploads/2018/06/magazin-odezhdy.jpg"
            alt=""
          />
        </div>
        <div class="text1">
          <h6>
            Лучшие одежды
            <br />
            только у нас !
          </h6>
        </div>
        <div class="text2">
          <p>
            Наши клиенты всегда
            <br />
            довольны и рады
          </p>
        </div>

        <div class="text4"></div>
      </div>
   
      <div className="block-skidka">
      <div class="skidki"> 
                <div class="kor1"><a href="#!"><img class="kor3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAh8VW7y1iHauuUi7dyx5dhjKMAdYqRIn5Q&usqp=CAU" alt=""/></a></div> 
                <div class="kor1"><a href="#!"><img class="kor3" src="https://gorodskidok48.ru/upload/iblock/950/950815c7f9ad48c41d0ecbb1b67bcc7b.jpg" alt=""/></a></div> 
                <div class="kor1"><a href="#!"><img class="kor3" src="https://sun9-70.userapi.com/impg/c855624/v855624142/18f166/zKSKOpVjFRs.jpg?size=1000x1000&quality=96&sign=3bcb8bdf07ce96a3c6981030e03a08c1&c_uniq_tag=8zZVAA1YdiCpzPaqa9-oWJLQHhjejhrBPCAH2G8U6JY&type=album" alt=""/></a></div> 
                <div class="kor1"><a href="#!"><img class="kor3" src="https://static.insales-cdn.com/files/1/5331/15078611/original/1000%D1%851000_%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5__2__5e66b59ac63bb64d249f898a4e7071af.jpg" alt=""/></a></div> 
            </div> 
            <div class="skidki2"> 
                <div class="kor2"><a href="#!"><img class="kor3" src="https://www.fantastika-nn.ru/upload/iblock/ed3/zd7obowxs3ojdrv3x84yrwk6o50sf51x/1120x750_kopiya.jpg" alt=""/></a></div> 
                <div class="kor2"><a href="#!"><img class="kor3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AnpSMHJFephkU6Y--Jau0nmxKym5t1XhliKQZv7dFiBLF052GmQGE15o1YukVZrL0jI&usqp=CAU" alt=""/></a></div> 
                <div class="kor2"><a href="#!"><img class="kor3" src="https://fiesta74.com/upload/information_system_29/1/2/2/item_1226/item_1226.jpg" alt=""/></a></div> 
                <div class="kor2"><a href="#!"><img class="kor3" src="https://tebu-tex.ru/wp-content/uploads/2019/09/zhenskie-vjazanye-shapki-sharfy-optom-ot-proizvoditelja-tebu-textile.png" alt=""/></a></div> 
            </div>

      </div>
      <div className="block-content-item">
        {item.map(item => (
          <div class="cards">
            <div class="card">
              <div class="new-text">новинка</div>
              <img
                class="tovar"
                src={item.image}
                alt=""
              />
              <br/>
              <br/>
              <div class="opisanie">{item.title}</div>
              <br/>
              <br/>
              <div className="block-display-price">
                <div class="price">{item.price}$</div>
                
                <MdAddShoppingCart
                 onClick={handleAddToCart} style={{ fontSize: "25px", color: "green" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
