import React from "react";
import "./Navigation.css";
import { navigationItems } from "../../utils/navigationItem";

function Navigation({active, setActive}) {
  return (
    <div className="navigation">
      <div className="navigation-Container">
        <h1>Andy</h1>
          <ul className="navigation-Items">
            {navigationItems.map((item) => (
              <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={active === item.id ? "active" : ""}>
                {item.icon}
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}

export default Navigation;
