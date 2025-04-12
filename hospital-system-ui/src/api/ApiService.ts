import axios from "axios";
import {HospitalModel, PatientModel} from "../models/Models";

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

export const getPatients = (): Promise<any> => {
    return axios
        .get(`${API_BASE_URL}/patients`)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Veri çekme hatası ", error);
        });
}

export const postPatient = (patient: PatientModel): Promise<any> => {
    return axios
        .post(`${API_BASE_URL}/patients`, patient)
        .then((response) => response.data)
        .catch((error) => console.error("Hasta kayıt hatası ", error))
}

export const putPatient = (patient: PatientModel): Promise<any> => {
    return axios
        .put(`${API_BASE_URL}/patients`, patient)
        .then((response) => response.data)
        .catch((error) => console.error("Hasta kayıt hatası ", error))
}

export const deletePatient = (id: string): Promise<any> => {
    return axios
        .delete(`${API_BASE_URL}/patients/${id}`)
        .then((response) => response.data)
        .catch((error) => console.error("Hasta silme hatası ", error))
}