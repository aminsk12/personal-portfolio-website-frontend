import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
    user?: any;
    userId: string;
    email: string;
    role: string;
    name: string;
    phone: string;
    address: string;
    iat: number;
    exp: number;
};




type TAuthState = {
    user: null | TUser;
    token: null | string;
    isLoading: false,
};

const initialState: TAuthState = {
    user: null,
    token: null,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload; // Manage loading state
          },
    }
})

export const { setUser, logout ,setLoading} = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;