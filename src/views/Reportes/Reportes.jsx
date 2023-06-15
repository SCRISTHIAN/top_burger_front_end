
import './style/Reportes.css';
import PlatosMasVendidos from "./components/PlatosMasVendidos";
import IngredientesEscasos from "./components/IngredientesEscasos";
import { HeaderRerpotes } from './components/HeaderReports';


const Reportes = () => {
    return (
      <div className="reports-container">
        <HeaderRerpotes name='PLATOS MAS VENDIDOS'/>
        <PlatosMasVendidos/>
        <HeaderRerpotes name='INGREDIENTES MAS ESCASOS'/>
        <IngredientesEscasos/>
      </div>
    );
  };
export default Reportes
