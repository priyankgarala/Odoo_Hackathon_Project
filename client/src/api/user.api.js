import axiosInstance from "../utils/axiosInstance";



export const loginUser = async(email, password) => {
    const {data} = await axiosInstance.post("/api/auth/login", {email, password});
    return data;
}

export const registerUser = async(name,email,password) => {
    const {data} = await axiosInstance.post("/api/auth/register", {name,email,password});
    return data;
}

export const logoutUser = async() => {
    const {data} = await axiosInstance.get("/api/auth/logout");
    return data;

}
export const createItem = async(title, description, category, type, size, condition, tags) => {
    const {data} = await axiosInstance.post("/api/items",{title, description, category, type, size, condition, tags});
    return data;
}

export const getAllItems = async() => {
    const {data} = await axiosInstance.get("/api/items");
    return data;
}
