import './App.css';
import {Bar,Line,Pie} from "react-chartjs-2";
function App() {
  return (
    <div>
        <Pie width={400}
             height={600}
             options={{
               maintainAspectRatio:false
             }}
             data={{
               labels:["Angular","ReactJS","VueJS","JavaScript","NodeJS","MongoDB"],
               datasets:[{
                  label:"AshokIT",
                  
                  data:[12,6,3,10,11,8,4],
                  backgroundColor:"red",
                  borderColor:"green",
                  borderWidth:2
               },
               {
                  label: 'Quantity',
                  data: [47, 52, 67, 58, 9, 50],
                  backgroundColor: 'orange',
                  borderColor: 'red'
               },
               {
                label: 'Price',
                data: [20, 52, 67, 58, 9, 25],
                backgroundColor: 'pink',
                borderColor: 'red'
             }
              ]
             }}>
          
        </Pie>        
    </div>
  );
}

export default App;
