import React from "react";

import "./MainNav.style.scss";

const MainNav = () => {
  return (
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="nav-toggl" />
      <label for="nav-toggl" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <span>01</span> Ret-Ram
            </a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <span>02</span> LL25
            </a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <span>03</span> Other inventions...
            </a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <span>04</span> Stories
            </a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <span>05</span> Book Now!
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
