export class Hospital {
    id: number;
    name: string;
    city: string;
    departments: Department[]
}

export class Department {
    id: number;
    name: string;
    doctors: Doctor[]
}

export class Doctor {
    id: number;
    firstName: string;
    lastName: string;
    patients: Patient[]
}

export class Patient {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    avsNumber: string;
}