export interface MenuOptionModel {
    id: number;
    name: string;
    component: React.JSX.Element;
    icon: React.JSX.Element;
}

export interface DropdownOptionModel {
    id: string;
    value: string;
}

export interface HospitalModel {
    id?: string;
    name: string;
    address: string;
    hospitalType: string;
}

export interface PatientModel {
    id?: string;
    name: string;
    surname: string;
    gender: string;
    age: number;
    tcNumber: string;
    complaint: string;
    address: string;
    hospital: HospitalModel;
}