export interface Certificate {
    id: string;
    studentName: string;
    courseName: string;
    issueDate: string;
    certificateImage?: string; // URL de la imagen del certificado
}

// Puedes cargar esto desde un JSON, CSV o base de datos
export const certificates: Certificate[] = [
    {
        id: "36e81cd3-5795-4c3f-aa5a-f653470b3102", // UUID v4
        studentName: "Jeremy Lara",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-jeremy-lara.png" // Opcional
    },
    {
        id: "0a592ffe-a587-4334-8641-53fe14b85c09", // UUID v4
        studentName: "Eleamar Benedetto",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-eleamar-benedetto.png" // Opcional
    },
    {
        id: "c444b1a4-fd94-4dfc-a71b-9b20d871d151", // UUID v4
        studentName: "Ana Maria Grisales",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-ana-grisales.png" // Opcional
    },
    {
        id: "9b580857-8af7-4eab-a701-2f10b2ab80a6", // UUID v4
        studentName: "Monica E. Lopez",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-monica-lopez.png" // Opcional
    },
    {
        id: "8c310b45-c84f-4e77-9302-2301b888d430", // UUID v4
        studentName: "Sheryl Burbano",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-sheryl-burbano.png" // Opcional
    },
    {
        id: "697f2da4-f5a1-4e3b-a20c-b5682bbd3742", // UUID v4
        studentName: "Lina V. Camilo Caicedo",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-lina-caicedo.png" // Opcional
    },
    {
        id: "fa343781-e9bc-43e7-8565-dbafab255c9d", // UUID v4
        studentName: "Maria Casanova",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-maria-casanova.png" // Opcional
    },
    {
        id: "e7331aff-d57e-4d04-8328-845c72a85b61", // UUID v4
        studentName: "Emir Nunez",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-emir-nunez.png" // Opcional
    },
    {
        id: "86a0e8ef-4634-4b4c-b787-09ac4f1b1b5b", // UUID v4
        studentName: "Nicolas Sanchez",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-nicolas-sanchez.png" // Opcional
    },
    {
        id: "23c79c69-00c8-48e0-9cfb-41f6627c8793", // UUID v4
        studentName: "Katherin Bejarano Paz",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-katherin-bejarano.png" // Opcional
    },
    {
        id: "7c949912-31a1-4b43-8ecd-5ff812763649", // UUID v4
        studentName: "Maria Isabel Taborda",
        courseName: "Basic Preparation of Individual Taxes",
        issueDate: "2024-12-03",
        certificateImage: "/certificates/nab-certificate-maria-taborda.png" // Opcional
    }
]; 