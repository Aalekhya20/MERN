import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from 'react-toastify';
export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ role, email, password }, { isRejectedWithValue }) => {
        try {
            const { data } = await API.post('/auth/login', { role, email, password });
            //store token
            if (data.success) {
                localStorage.setItem('token', data.token)
                toast.success(data.message);
            }
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return isRejectedWithValue(error.response.data.message)
            }
            else {
                return isRejectedWithValue(error.message)
            }
        }
    }
);