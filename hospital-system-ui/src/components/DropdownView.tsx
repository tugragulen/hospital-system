import React from 'react';
import {MenuItem, TextField, TextFieldProps as MuiTextFieldProps} from "@mui/material";
import {DropdownOptionModel} from "../models/Models";

type PropType = MuiTextFieldProps & {
    value: any;
    options: DropdownOptionModel[];
}

const DropdownView = ({options, value, ...restProps}: PropType) => {
    return (
        <TextField
            select
            value={value ?? ''}
            size={"small"}
            {...restProps}
        >
            {options.map((option) => (
                <MenuItem key={option.id} value={option.id}>{option.value}</MenuItem>
            ))}
        </TextField>
    );
};

export default DropdownView;