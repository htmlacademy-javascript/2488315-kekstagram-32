const checkStringLength = (string, numMaxLength) => string.length <= numMaxLength;
// Строка короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false*

function isPalindrom(string){
  const cleaned = string.toLowerCase().replaceAll (' ','');
  const reversed = cleaned.split('').reverse().join('');
  /*let reversed = '';
  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed = reversed + cleaned[i];
  }*/
  return cleaned === reversed;
}
// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false
