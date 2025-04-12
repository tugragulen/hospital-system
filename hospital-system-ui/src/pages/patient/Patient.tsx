import React, {ChangeEvent, useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import TextFieldView from "../../components/TextFieldView";
import FormBox from "../../components/FormBox";
import {HospitalModel} from "../../models/Models";
import TextAreaView from "../../components/TextAreaView";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/Store";
import DropdownView from "../../components/DropdownView";
import {Box, Button, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {GenderEnum} from "../../models/Enums";
import {deletePatient, postPatient, putPatient} from "../../api/ApiService";
import {addPatient, removePatient, resetSelectedPatient, updatePatient} from "../../store/slices/PatientSlice";
import PatientTable from "./PatientTable";

const Patient = () => {
    const [name, setName] = useState<string | undefined>("");
    const [surname, setSurname] = useState<string | undefined>("");
    const [gender, setGender] = useState<string>(GenderEnum.MALE);
    const [age, setAge] = useState<number | null | undefined>(null);
    const [tcNumber, setTcNumber] = useState<string | undefined>("");
    const [tcError, setTcError] = useState<boolean>(false);
    const [complaint, setComplaint] = useState<string | undefined>("");
    const [address, setAddress] = useState<string | undefined>("");
    const [hospital, setHospital] = useState<HospitalModel | null | undefined>(null);

    const dispatch = useDispatch();

    const hospitals = useSelector((state: RootState) => state.hospital.hospitals)
        .map(hospital => {
            return {...hospital, value: hospital.name, id: hospital.id!}
        });
    const selectedPatient = useSelector((state: RootState) => state.patient.selectedPatient);

    useEffect(() => {
        if (selectedPatient) {
            setName(selectedPatient.name);
            setSurname(selectedPatient.surname);
            setGender(selectedPatient.gender);
            setAge(selectedPatient.age);
            setTcNumber(selectedPatient.tcNumber);
            setComplaint(selectedPatient.complaint);
            setAddress(selectedPatient.address);
            setHospital(selectedPatient.hospital);
        } else {
            clearForm();
        }
    }, [selectedPatient]);

    const handleTcChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        if (/^\d{0,11}$/.test(value)) {
            setTcNumber(value);

            if (value.length === 11) {
                setTcError(false);
            } else {
                setTcError(true);
            }
        }
    }

    const clearForm = () => {
        setName("");
        setSurname("");
        setAge(null);
        setTcNumber("");
        setTcError(false);
        setComplaint("");
        setAddress("");
        setHospital(null);
        setGender(GenderEnum.MALE)
    }

    const checkRequiredFields = () => {
        // If fields are empty, it means error state.
        if (name == "") {
            setName(undefined);
        }
        if (surname == "") {
            setSurname(undefined);
        }
        if (age == null) {
            setAge(undefined);
        }
        if (tcNumber == "") {
            setTcNumber(undefined);
        }
        if (complaint == "") {
            setComplaint(undefined);
        }
        if (address == "") {
            setAddress(undefined)
        }
        if (hospital == null) {
            setHospital(undefined)
        }
        return !!name && !!surname && !!age && !!tcNumber && !!complaint && !!address && !!hospital;
    }

    const createPatient = () => {
        if (checkRequiredFields()) {
            const patient = {
                id: selectedPatient?.id,
                name: name!,
                surname: surname!,
                age: age!,
                tcNumber: tcNumber!,
                complaint: complaint!,
                address: address!,
                hospital: hospital!,
                gender: gender!
            }
            if (selectedPatient) {
                putPatient(patient)
                    .then(response => {
                        dispatch(resetSelectedPatient())
                        dispatch(updatePatient(response));
                    })
                    .catch(err => console.error("Hasta oluşturulamadı", err));
            } else {
                postPatient(patient)
                    .then(response => {
                        clearForm();
                        dispatch(addPatient(response));
                    })
                    .catch(err => console.error("Hasta oluşturulamadı", err));
            }
        }
    }

    const onCancel = () => {
        clearForm();
        dispatch(resetSelectedPatient());
    }

    const onDelete = () => {
        if (selectedPatient) {
            deletePatient(selectedPatient.id!)
                .then(() => {
                    dispatch(removePatient(selectedPatient.id!))
                    dispatch(resetSelectedPatient())
                })
                .catch((err) => console.error("Hasta silinemedi", err))
        }
    }

    return (
        <FormBox>
            <Typography textAlign={'center'} variant={"h4"} margin={1}>Hasta Ekle</Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
                <TextFieldView
                    value={name}
                    label={"İsim"}
                    required
                    error={name === undefined}
                    helperText={name === undefined ? "İsim boş kalamaz" : " "}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    sx={{
                        width: "45%"
                    }}
                />
                <TextFieldView
                    value={surname}
                    label={"Soyisim"}
                    required
                    error={surname === undefined}
                    helperText={surname === undefined ? "Soyisim boş kalamaz" : " "}
                    onChange={(e) => {
                        setSurname(e.target.value)
                    }}
                    sx={{
                        width: "45%"
                    }}
                />
            </Box>
            <RadioGroup
                row
                value={gender}
                onChange={(event) => {
                    setGender(event.target.value);
                }}
                sx={{marginBottom: "20px"}}
            >
                <FormControlLabel control={<Radio/>} label={"Male"} value={GenderEnum.MALE}/>
                <FormControlLabel control={<Radio/>} label={"Female"} value={GenderEnum.FEMALE}/>
            </RadioGroup>
            <Box display={'flex'} justifyContent={'space-between'}>
                <TextFieldView
                    value={age ?? ""}
                    label={"Yaş"}
                    required
                    error={age === undefined}
                    helperText={age === undefined ? "Soyisim boş kalamaz" : " "}
                    type={"number"}
                    slotProps={{input: {inputProps: {min: 1}}}}
                    onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value < 1) {
                            setAge(1);
                        } else {
                            setAge(value)
                        }
                    }}
                    sx={{width: "45%"}}
                />
                <TextFieldView
                    value={tcNumber}
                    label={"TC No"}
                    required
                    error={tcNumber === undefined || tcError}
                    helperText={tcNumber === undefined ? "TC alanı boş kalamaz" : tcError ? "TC No 11 haneli olmalıdır" : " "}
                    slotProps={{
                        input: {
                            inputProps: {
                                maxLength: 11,
                            }
                        }
                    }}
                    onChange={handleTcChange}
                    sx={{width: "45%"}}
                />
            </Box>
            <TextAreaView
                value={address}
                onChange={(e) => {
                    setAddress(e.target.value)
                }}
                size={"small"}
                label={"Adres"}
                required
                error={address === undefined}
                helperText={address === undefined ? "Adres boş kalamaz" : " "}/>
            <TextAreaView
                value={complaint}
                onChange={(e) => {
                    setComplaint(e.target.value)
                }}
                size={"small"}
                label={"Şikayet"}
                required
                error={complaint === undefined}
                helperText={complaint === undefined ? "Şikayet alanı boş kalamaz" : " "}/>

            <DropdownView
                options={hospitals}
                value={hospital?.id}
                onChange={(e) => {
                    console.log(hospitals.find(hospital => hospital.id === e.target.value))
                    setHospital(hospitals.find(hospital => hospital.id === e.target.value))
                }}
                label={"Hastane Tipi"}
                required
                error={hospital === undefined}
                helperText={hospital === undefined ? "Hastane seçmek zorunludur" : " "}
            />

            <Box width={"100%"} display={'flex'} justifyContent={'end'}>
                <Button variant={"outlined"} disabled={!selectedPatient} onClick={onDelete} sx={{marginRight: "0.5vw"}}>Delete</Button>
                <Button variant={"outlined"} onClick={onCancel} sx={{marginRight: "0.5vw"}}>Cancel</Button>
                <Button variant={"outlined"} onClick={createPatient}>{selectedPatient ? "Update" : "Add"}</Button>
            </Box>
            <PatientTable/>
        </FormBox>
    );
};

export default Patient;