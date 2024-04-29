
import GlobalStyles from "./styles.css/GlobalStyles";
import {Layout} from "./Components/Layout";

function App() {
  return (
    <div >
       <Layout/>
       <GlobalStyles/> 
       {/* {todos los components hijos de app tendran estos estilos} */}
    </div>
     
    
    
  );
}

export default App;
