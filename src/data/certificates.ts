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
        id: "01d36862-3ebe-4550-a033-594da18f7f4b", // UUID v4
        studentName: "Robert Munoz",
        courseName: "Preparación Básica de Impuestos Individuales",
        issueDate: "2024-03-20",
        certificateImage: "/certificates/nab-certificate-001.png" // Opcional
    },
    // ... más certificados
]; 