
import { colors } from '@mui/material';
import './style/index.css';

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
              {/* //<button className="table-row" key={index} onClick={() => redirectToDetails(item.id)}> */}
                  {columns.map((column) => (
                    console.log(column.accessor),
                    <td key={column.accessor} 
                    style={{
                      color:item[column.accessor]==='Agotado' ?'#fe4b68': (item[column.accessor]==='Disponible' ?'#00ff40': '' )
                    }}
                    >{item[column.accessor]}</td>
                  ))}
                {/* //</button> */}
               </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
export default TableItems;
