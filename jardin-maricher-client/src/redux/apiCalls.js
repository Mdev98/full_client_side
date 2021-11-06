import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:3001/api/v3/login',user);
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}