
import './style/Reportes.css';
import PlatosMasVendidos from "./components/PlatosMasVendidos";
import IngredientesEscasos from "./components/IngredientesEscasos";


const Reportes = () => {
    return (
      <div className="reports-container">
        <PlatosMasVendidos/>
        <IngredientesEscasos/>
      </div>
    );
  };
export default Reportes
