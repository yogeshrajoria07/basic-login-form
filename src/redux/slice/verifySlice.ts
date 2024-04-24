import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface verifyType {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    verifyStatus?: boolean;
}


const initialState: verifyType = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    verifyStatus: false,
}

export const verifySlice = createSlice({
    name: 'verify',
    initialState,
    reducers: {
        signupverify: (state, action: PayloadAction<verifyType>) => {
            const { firstname, lastname, email, password } = action.payload
            state.firstname = firstname;
            state.lastname = lastname;
            state.email = email;
            state.password = password;
        },

        loginverify: (state, action: PayloadAction<verifyType>) => {
            const { verifyStatus } = action.payload;
            state.verifyStatus = verifyStatus;
        },

        // logoutverify: (state) => {
        //     state.verifyStatus = false;
        // }

    },
})

// export const { signupverify, loginverify, logoutverify } = verifySlice.actions
export const { signupverify, loginverify } = verifySlice.actions

export default verifySlice.reducer;