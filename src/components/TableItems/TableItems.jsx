
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
              
                  {columns.map((column) => (
                    <td key={column.accessor}>{item[column.accessor]}</td>
                  ))}

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
export default TableItems;
