export interface CivicAddressPieces {
    civicNumber: string;
    streetName: string;
    unitNumber?: string;
    qualifier?: string;
}
export declare function formatCivicAddress(civicAddressPieces: CivicAddressPieces): string;
export default formatCivicAddress;
