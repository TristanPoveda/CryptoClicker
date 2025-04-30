// Simple format number function for some tests
export function formatNumber(value: number): string {
    if(value === 0) return '0.00';
    if(value < 0.0001) return value.toExponential(2);
    if(value < 0.01) return value.toFixed(6);
    if(value < 1) return value.toFixed(4);
    if(value < 1000) return value.toFixed(2);
    return value.toString();
}