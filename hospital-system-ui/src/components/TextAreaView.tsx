import React from 'react';
import {TextField, TextFieldProps as MuiTextFieldProps} from "@mui/material";


const TextAreaView = (props: MuiTextFieldProps) => {
    return (
        <TextField
            multiline
            rows={5}
            {...props}
            margin={"normal"}
        />
    );
};

export default TextAreaView;