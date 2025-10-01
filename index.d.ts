export interface CivicAddressPieces {
    civicNumber: string;
    streetName: string;
    qualifier?: string;
    unitNumber?: string;
}
export default function formatCivicAddress(civicAddressPieces: CivicAddressPieces): string;
export declare function isPostalCode(possiblePostalCode: string): boolean;
export declare function formatPostalCode(postalCode: string): string;
