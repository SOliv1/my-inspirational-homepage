import React from "react";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import BackgroundImageLeft from "./features/backgroundImage/components/BackgroundImageLeft";
import BackgroundImageRight from "./features/backgroundImage/components/BackgroundImageRight";

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <header>
        <Error />
        <Weather />
      </header>
      <aside className="left-wallpaper-control wallpaper-control">
        <BackgroundImageLeft />
      </aside>
      <main>
        <Journal />
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <BackgroundImageRight />
      </aside>
      <footer>
      <Quote />
      </footer>
    </div>
  );
}

export default App;
