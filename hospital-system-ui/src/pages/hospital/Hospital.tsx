import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import TextAreaView from "../../components/TextAreaView";
import TextFieldView from "../../components/TextFieldView";
import {DropdownOptionModel, HospitalModel} from "../../models/Models";
import DropdownView from "../../components/DropdownView";
import Typography from "@mui/material/Typography";
import FormBox from "../../components/FormBox";
import {postHospital} from "../../api/ApiService";
import {useDispatch} from "react-redux";
import {addHospital} from "../../store/slices/HospitalSlice";

export const hospitalTypes: DropdownOptionModel[] = [
    {
        id: "GENERAL_HOSPITAL",
        value: "Genel Hastane"
    },
    {
        id: "EYE_HOSPITAL",
        value: "Göz Hastanesi"
    },
    {
        id: "DENTAL_HOSPITAL",
        value: "Diş Hastanesi"
    },
    {
        id: "OTHER",
        value: "Diğer"
    },
]

const Hospital = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string | undefined>("");
    const [address, setAddress] = useState<string | undefined>("");
    const [hospitalType, setHospitalType] = useState<string | undefined>("");

    const clearForm = () => {
        setName("");
        setAddress("");
        setHospitalType("");
    }

    const checkRequiredFields = () => {
        // If fields are empty, it means error state.
        if (name == "") {
            setName(undefined);
        }
        if (address == "") {
            setAddress(undefined)
        }
        if (hospitalType == "") {
            setHospitalType(undefined)
        }
        return !!name && !!address && !!hospitalType;
    }

    const createHospital = () => {
        if (checkRequiredFields()) {
            const hospital: HospitalModel = {
                name: name!,
                address: address!,
                hospitalType: hospitalType!
            }
            postHospital(hospital)
                .then((response) => {
                    dispatch(addHospital(response));
                })
                .catch((error) => console.error("Hastane kayıt hatası", error));
        }
    }

    return (
        <FormBox>
            <Typography textAlign={'center'} variant={"h4"} margin={1}>Hastane Ekle</Typography>
            <TextFieldView
                value={name}
                label={"İsim"}
                required
                error={name === undefined}
                helperText={name === undefined ? "İsim boş kalamaz" : " "}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
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

            <DropdownView
                options={hospitalTypes}
                value={hospitalType}
                onChange={(e) => {
                    setHospitalType(e.target.value)
                }}
                label={"Hastane Tipi"}
                required
                error={hospitalType === undefined}
                helperText={hospitalType === undefined ? "Tip seçmek zorunludur" : " "}
            />

            <Box width={"100%"} display={'flex'} justifyContent={'end'}>
                <Button variant={"outlined"} onClick={clearForm} sx={{marginRight: "0.5vw"}}>Cancel</Button>
                <Button variant={"outlined"} onClick={createHospital}>Add</Button>
            </Box>
        </FormBox>
    );
};

export default Hospital;