import React, {PropsWithChildren} from 'react';
import {Box, BoxProps as MuiBoxProps} from "@mui/material";

const FormBox = ({children, ...props}: PropsWithChildren<MuiBoxProps>) => {
    return (
        <Box width={"50%"} component={"form"} justifySelf={'center'} height={"100%"} display={'flex'}
             flexDirection={'column'}
             border={" border: 1px solid #E6E6E6"} padding={1}>
            {children}
        </Box>
    );
};

export default FormBox;