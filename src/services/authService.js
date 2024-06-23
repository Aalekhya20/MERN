import { userLogin } from "../redux/features/auth/authActions"
import store from "../redux/store"


export const handleLogin = (e, email, password, role) => {
    e.preventDefault()
    try {
        if (!role || !email || !password) {
            return alert("Please provide all fields")
        }
        store.dispatch(userLogin({ email, password, role }));
    } catch (error) {
        console.log(error);
    }
}
export const handleRegister = (
    e,
    name,
    role,
    email,
    password,
    organisationName,
    hospitalName,
    website,
    phone,
    address) => {
    e.preventDefault()
    try {
        console.log("Register",
            name,
            role,
            email,
            password,
            organisationName,
            hospitalName,
            website,
            phone,
            address)
    } catch (error) {
        console.log(error)
    }
};