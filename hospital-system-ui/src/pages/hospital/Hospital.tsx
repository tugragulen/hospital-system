import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import TextAreaView from "../../components/TextAreaView";
import TextFieldView from "../../components/TextFieldView";
import {DropdownOptionModel} from "../../models/Models";
import DropdownView from "../../components/DropdownView";
import Typography from "@mui/material/Typography";
import FormBox from "../../components/FormBox";

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

    const [name, setName] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [hospitalType, setHospitalType] = useState<string | undefined>();
    const [nameError, setNameError] = useState<boolean>();
    const [addressError, setAddressError] = useState<boolean>();
    const [hospitalTypeError, setHospitalTypeError] = useState<boolean>();

    const clearForm = () => {
        setName("");
        setAddress("");
        setHospitalType("");
    }

    const checkRequiredFields = () => {
        if (!name) {
            setNameError(true);
        }
        if (!address) {
            setAddressError(true);
        }
        if (!hospitalType) {
            setHospitalTypeError(true)
        }
        return !!name && !!address && !!hospitalType;
    }

    const addHospital = () => {
        // TODO SEND BACKEND
    }

    return (
        <FormBox>
            <Typography textAlign={'center'} variant={"h4"} margin={1}>Hastane Ekle</Typography>
            <TextFieldView
                value={name}
                label={"İsim"}
                required
                error={nameError}
                helperText={nameError ? "İsim boş kalamaz" : " "}
                onChange={(e) => {
                    setName(e.target.value)
                    setNameError(false);
                }}
            />
            <TextAreaView
                value={address}
                onChange={(e) => {
                    setAddress(e.target.value)
                    setAddressError(false);
                }}
                size={"small"}
                label={"Adres"}
                required
                error={addressError}
                helperText={addressError ? "Adres boş kalamaz" : " "}/>

            <DropdownView
                options={hospitalTypes}
                value={hospitalType}
                onChange={(e) => {
                    setHospitalType(e.target.value)
                    setHospitalTypeError(false);
                }}
                label={"Hastane Tipi"}
                required
                error={hospitalTypeError}
                helperText={hospitalTypeError ? "Tip seçmek zorunludur" : " "}
            />

            <Box width={"100%"} display={'flex'} justifyContent={'end'}>
                <Button variant={"outlined"} onClick={addHospital}>Add</Button>
                <Button variant={"outlined"} onClick={clearForm}>Cancel</Button>
            </Box>
        </FormBox>
    );
};

export default Hospital;