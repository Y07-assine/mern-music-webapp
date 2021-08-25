import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import {videoClipURL} from '../../constant';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

const ListVideoClip = ()=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        axios
            .get(videoClipURL)
            .then(res=>{
                setData(res.data);
                setLoading(false);
            })
            .catch(err=>{
                setError(err);
                setLoading(false);
            });
        },[]);
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
        }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);
    const handleDelete = (id)=>{
        axios.delete(`${videoClipURL}/${id}`)
            .then(res=>{alert('item is successfully deleted !') ;window.location.reload();})
            .catch(error=>console.log(error));
    }
    return (
    <div className="container">
        <TableContainer component={Paper}>
            <Table  aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Video Clip Name</StyledTableCell>
                <StyledTableCell >Youtube ID</StyledTableCell>
                <StyledTableCell ></StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                    {row.name}
                    </StyledTableCell>
                    <StyledTableCell >{row.youtubeId}</StyledTableCell>
                    <StyledTableCell ><button className="delete" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(row._id) } }><DeleteIcon /></button></StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}

export default ListVideoClip