export interface StreetAddressPieces {
    civicNumber: string;
    streetName: string;
    unitNumber?: string;
    qualifier?: string;
}
export declare function formatStreetAddress(streetAddressPieces: StreetAddressPieces): string;
export default formatStreetAddress;
