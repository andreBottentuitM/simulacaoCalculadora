function calculadora(n1, n2, operador) {
    switch (operador) {
        case 1:
            return n1 + n2
            break
        case 2:
            return n1 - n2
            break
        case 3:
            return n1 * n2
            break
        case 4:
            return n1 / n2
            break
        default:
            return 0
    }

}

console.log(calculadora(7,9,4))