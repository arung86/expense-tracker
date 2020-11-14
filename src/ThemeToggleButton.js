import React from "react";
import {
  darkColor,
  darkColorBoxShadow,
  lightColor,
  lightColorBoxShadow
} from "./ExpenseTracker/constant";

export default function ThemeToggleButton() {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    if (checked) {
      document.body.style.setProperty("--light-theme", darkColor);
      document.body.style.setProperty("--dark-theme", lightColor);
      document.body.style.setProperty("--box-shadow", darkColorBoxShadow);
    } else {
      document.body.style.setProperty("--light-theme", lightColor);
      document.body.style.setProperty("--dark-theme", darkColor);
      document.body.style.setProperty("--box-shadow", lightColorBoxShadow);
    }
  }, [checked]);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className="slider round"></span>
    </label>
  );
}
