import React, { useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Fourth(){
    const [products,setProducts] = useState([{"p_id":111,"p_name":"p_one","p_cost":10000},
                                             {"p_id":222,"p_name":"p_two","p_cost":20000},
                                             {"p_id":333,"p_name":"p_three","p_cost":30000},
                                             {"p_id":444,"p_name":"p_four","p_cost":40000},
                                             {"p_id":555,"p_name":"p_five","p_cost":50000}]);
    return(
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table  sx={{minWidth:500}} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>P_ID</TableCell>
                            <TableCell>P_NAME</TableCell>
                            <TableCell>P_COST</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product,index)=>(
                            <TableRow key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{product.p_id}</TableCell>
                                <TableCell>{product.p_name}</TableCell>
                                <TableCell>{product.p_cost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}

export default Fourth;