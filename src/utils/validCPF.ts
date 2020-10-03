export default function validCPF(cpf: string): boolean {
  let sum = 0;

  if (!cpf) {
    return false;
  }
  const strCPF = cpf.replace('.', '').replace('.', '').replace('-', '');

  if (
    strCPF === '00000000000' ||
    strCPF === '11111111111' ||
    strCPF === '22222222222' ||
    strCPF === '33333333333' ||
    strCPF === '44444444444' ||
    strCPF === '55555555555' ||
    strCPF === '66666666666' ||
    strCPF === '77777777777' ||
    strCPF === '88888888888' ||
    strCPF === '99999999999' ||
    strCPF.length !== 11
  ) {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  let rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(strCPF.substring(9, 10))) {
    return false;
  }

  sum = 0;

  for (let j = 1; j <= 10; j++) {
    sum = sum + parseInt(strCPF.substring(j - 1, j)) * (12 - j);
  }

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(strCPF.substring(10, 11))) {
    return false;
  }

  return true;
}
