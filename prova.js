function MissingDigit(str) {
    const parts = str.split('=');
    const leftSide = parts[0].trim();
    const rightSideStrOriginal = parts[1].trim();

    let operator = '';
    if (leftSide.includes('+')) {
        operator = '+';
    } else if (leftSide.includes('-')) {
        operator = '-';
    } else if (leftSide.includes('*')) {
        operator = '*';
    } else if (leftSide.includes('/')) {
        operator = '/';
    }

    const operands = leftSide.split(operator).map(s => s.trim());
    const operand1StrOriginal = operands[0];
    const operand2StrOriginal = operands[1];

    const varOcg = {
        xInOperand1: operand1StrOriginal.includes('x'),
        xInOperand2: operand2StrOriginal.includes('x'),
        xInResult: rightSideStrOriginal.includes('x')
    }; // __define-ocg__

    for (let digit = 0; digit <= 9; digit++) {
        let num1, num2, expectedResult;

        if (varOcg.xInOperand1) {
            num1 = Number(operand1StrOriginal.replace('x', digit.toString()));
        } else {
            num1 = Number(operand1StrOriginal);
        }

        if (varOcg.xInOperand2) {
            num2 = Number(operand2StrOriginal.replace('x', digit.toString()));
        } else {
            num2 = Number(operand2StrOriginal);
        }

        if (varOcg.xInResult) {
            expectedResult = Number(rightSideStrOriginal.replace('x', digit.toString()));
        } else {
            expectedResult = Number(rightSideStrOriginal);
        }

        let calculatedResult;

        switch (operator) {
            case '+':
                calculatedResult = num1 + num2;
                break;
            case '-':
                calculatedResult = num1 - num2;
                break;
            case '*':
                calculatedResult = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    continue;
                }
                calculatedResult = num1 / num2;
                break;
        }

        const varFiltersCg = (calculatedResult === expectedResult);

        if (varFiltersCg) {
            return digit;
        }
    }

    return -1;
}

-- __define-ocg__
SELECT
    m.GroupID,
    v.CompanyName,
    COUNT(*) AS Count
FROM
    maintable_PO53S AS m
JOIN
    cb_vendorinformation AS v ON m.GroupID = v.GroupID
JOIN
    (SELECT
         @varOcg := 0,
         @varFiltersCg := '') AS vars    
GROUP BY
    m.GroupID,
    v.CompanyName
ORDER BY
    Count ASC,
    m.GroupID DESC;

                    
          

console.log(`Input: "4 - 2 = x", Output: ${MissingDigit("4 - 2 = x")}`);
console.log(`Input: "1x0 * 12 = 1200", Output: ${MissingDigit("1x0 * 12 = 1200")}`);
console.log(`Input: "3x + 12 = 46", Output: ${MissingDigit("3x + 12 = 46")}`);
console.log(`Input: "x / 2 = 5", Output: ${MissingDigit("x / 2 = 5")}`);
console.log(`Input: "x * 5 = 25", Output: ${MissingDigit("x * 5 = 25")}`);
console.log(`Input: "100 - x = 92", Output: ${MissingDigit("100 - x = 92")}`);