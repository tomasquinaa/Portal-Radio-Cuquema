import { BrowserRouter } from "react-router-dom";
import { RouteComponent } from "./router";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
    </>
  )
}

export default App
