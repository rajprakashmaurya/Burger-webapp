import React from "react";
import BreadUpper from "./BurgerCompoments/BreadUpper/BreadUpper";
import BreadLower from "./BurgerCompoments/BreadLower/BreadLower";
import { BurgerCompomentEnum } from "./Resources";
import Cheese from "./BurgerCompoments/Cheese/Cheese";
import Lettuce from "./BurgerCompoments/Lettuce/Lettuce";
import Tomatoes from "./BurgerCompoments/Tomatoes/Tomatoes";

function CreateBurger(props) {
  const burgerStack = props.burgerStack.map((item, index) => {
    switch (item) {
      case BurgerCompomentEnum.CHEESE:
        return <Cheese />;
      case BurgerCompomentEnum.LETTUCE:
        return <Lettuce />;
      case BurgerCompomentEnum.TOMATOES:
        return <Tomatoes />;

      default:
        return null;
    }
  });

  return (
    <div style={{ padding: "12% 25%" }}>
      <BreadUpper />
      {burgerStack}
      <BreadLower />
    </div>
  );
}

export default CreateBurger;
