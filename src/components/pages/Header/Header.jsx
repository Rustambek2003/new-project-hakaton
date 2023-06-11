import React from "react";
import { FiPhone } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="block-header">
        <div className="mini-block">
          <h3>KG_Shop</h3>
          <h3>Kyrgyzstan</h3>
        </div>
        <div className="mini-block-icon">
          <FiPhone style={{ fontSize: "30px" }} />
          <Link to="/rgs">
            <h4 className="min-block-icon_h3">Регистрация</h4>
          </Link>
          <h4 className="min-block-icon_h3">+996 703 76 40 92</h4>
          <GrCart
            onClick={() => navigate("/cart")}
            style={{ fontSize: "30px" }}
          />
          <Link to='/admin'>
            <BsFillPersonLinesFill style={{ fontSize: "30px" }} />
          </Link>
        </div>
      </div>
      <div className="block-second">
        <div className="block-search">
          <h3 className="block-search_h3">Каталог</h3>
          <div class="search">
            <div class="search-box">
              <div class="search-field">
                <input placeholder="Search..." class="input" type="text" />
                <div class="search-box-icon">
                  <button class="btn-icon-content">
                    <i class="search-icon">
                      <svg
                        xmlns="://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-text-content">
          <Link to="/">
            <h3 className="block-text-content_h3">Главное</h3>
          </Link>
          <Link to="/about">
            <h3 className="block-text-content_h3">О сайте</h3>
          </Link>
          <Link to="/">
            <h3 className="block-text-content_h3">Товары</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
