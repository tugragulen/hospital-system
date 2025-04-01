import axios from "axios";
import {HospitalModel} from "../models/Models";

export const API_BASE_URL = "http://localhost:8080/api";

export const getHospitals = (): Promise<any> => {
    return axios
        .get(`${API_BASE_URL}/hospitals`)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Veri çekme hatası ", error);
        });
}

export const postHospital = (hospital: HospitalModel): Promise<any> => {
    return axios
        .post(`${API_BASE_URL}/hospitals`, hospital)
        .then((response) => response.data)
        .catch((error) => console.error("Hastane kayıt hatası ", error))
}