import { v4 as uuidv4 } from 'uuid';

export function generateCertificateId(): string {
    const id = uuidv4();
    console.log(id);
    return id;
}