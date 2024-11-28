export interface CivicAddressPieces {
    civicNumber: string;
    streetName: string;
    unitNumber?: string;
    qualifier?: string;
}
export default function formatCivicAddress(civicAddressPieces: CivicAddressPieces): string;
