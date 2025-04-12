import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/Store";
import {resetSelectedPatient, setSelectedPatient} from "../../store/slices/PatientSlice";

const PatientTable = () => {
    const patients = useSelector((state: RootState) => state.patient.patients);
    const selectedPatient = useSelector((state: RootState) => state.patient.selectedPatient);
    const dispatch = useDispatch();


    return (
        <TableContainer component={Paper} sx={{marginTop: "3vh"}}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{fontWeight: "bolder"}}>TC</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bolder"}}>İsim</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bolder"}}>Soyisim</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bolder"}}>Cinsiyet</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bolder"}}>Yaş</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bolder"}}>Hastane Adı</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bolder"}}>Şikayet</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {patients.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                '&:last-child td, &:last-child th': {border: 0},
                                bgcolor: selectedPatient?.id === row.id ? "lightgray" : "",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                if (selectedPatient?.id === row.id) {
                                    dispatch(resetSelectedPatient());
                                } else {
                                    dispatch(setSelectedPatient(row))
                                }
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.tcNumber}
                            </TableCell>
                            <TableCell align={"center"}>
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.surname}</TableCell>
                            <TableCell align="center">{row.gender}</TableCell>
                            <TableCell align="center">{row.age}</TableCell>
                            <TableCell align="center">{row.hospital.name}</TableCell>
                            <TableCell align="center">{row.complaint}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PatientTable;