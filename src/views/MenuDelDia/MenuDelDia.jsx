


import './style/index.css';
import TableItems from "../../components/TableItems/TableItems";


const MenuDelDia = () => {
    const [platos, setPlatos] = useState([]);
    useEffect(() => {
      getJson("/menudeldia").then((data) => {
        setPlatos(data);
      });
    }, []);
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    return (
      <div className="menudeldia-container">
        <TableItems
          title={`Menu del dia: ${formattedDate}`}
          data={platos}
          columns={[
            { header: "Nombre", accessor: "Nombre" },
            { header: "Precio", accessor: "Precio" },
            { header: "Unidades Restantes", accessor: "MaxDishes" },
            { header: "Disponibilidad", accessor: "Disponibilidad" },
          ]}
          height={"700px"}
        />
      </div>
    );
  };
  
  export default MenuDelDia;