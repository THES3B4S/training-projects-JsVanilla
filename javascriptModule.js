export const PI = 3.14159;

export function CalcularCircunferencia(radio){
    return 2 * PI * radio;
}

export function TomarArea(radio){
    return PI * radio * radio;
}

export function TomarSuperficie(radio){
    return 4 * PI * radio * radio;
}