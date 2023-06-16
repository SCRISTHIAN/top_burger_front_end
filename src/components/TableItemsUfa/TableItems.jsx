
import { colors } from '@mui/material';
import './style/index.css';
import { NavLink } from 'react-router-dom';

const TableItems = ({ data, columns, title, height, width}) => {
    return (
      <div className="table-container-main" style={{height: height, width:width
      }}>
        <div className="table-only" style={{height: height}}>
          <table className='tabla'>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                // //EN ACA EL LISTERNER 
                <tr className="table-row" key={index}>
                  {
                    columns.map(
                        (column) => (
                          <td key={column.accessor} 
                            style={{
                              color:item[column.accessor]==='Agotado' ?'#fe4b68': (item[column.accessor]==='Disponible' ?'#00ff40': '' )
                            }}
                          >
                            <NavLink to={`/platos/${item["ID_Plato"]}`}>
                               {item[column.accessor]}
                            </NavLink> 
                          </td>
                        )
                    )
                  }
               </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
export default TableItems;