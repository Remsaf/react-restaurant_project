import React from "react";
import HeaderTwo from "../header/HeaderTwo";

const About = () => {
  return (
    <>
      <header>
        <HeaderTwo />
      </header>
      <div className="container">
        <h3 className="center">Side-Hustle</h3>
        <div className="card">
          <div className="card-content about">
            <p>
              At the point when 'Side-Hustle' organizer Tony ventured off the
              shorelines of Oahu following multi-day of surfing with his Navy
              pals in the mid-60s, he did what worked out easily for him. He
              went hunting down a delicious burger, a hot container of fries,
              and a virus drink.{" "}
            </p>
            <p>
              After twenty years, in 1982, it was that feeling of peace and
              fulfillment he was attempting to reproduce when he took a little
              piece of the 'Side-Hustle's'and thudded it down right in the
              territory of Southern California.
            </p>
            <p>
              Today, 'Side-Hustle's' still is consistent with Tony's unique
              experience and his unique vision. Also, however, our menu has
              developed to incorporate plates of mixed greens, soups, and
              delicate tacos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
