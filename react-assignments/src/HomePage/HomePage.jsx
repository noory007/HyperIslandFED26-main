import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h2>HomePage</h2>
      <div>
        <ul>
          <li>
            <NavLink to="props" end>
              PropsComponent
            </NavLink>
          </li>
          <li>
            <NavLink to="state" end>
              StateComponent
            </NavLink>
          </li>
          <li>
            <NavLink to="effect" end>
              EffectComponent
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
