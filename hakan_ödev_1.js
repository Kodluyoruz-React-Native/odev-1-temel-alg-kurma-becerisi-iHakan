let buyukluk = 10;

for (let i = 0; i <= buyukluk; i++) {
  let satirlar = "";

  for (let j = 0; j <= buyukluk - i; j++) {
    satirlar += " ";
  }
  for (let j = 0; j <= i; j++) {
    satirlar += "*";
  }
  for (let j = 0; j <= i; j++) {
    satirlar += "*";
  }
  for (let j = 0; j <= buyukluk - i; j++) {
    satirlar += " ";
  }
  for (let j = 0; j <= buyukluk - i; j++) {
    satirlar += "*";
  }
  for (let j = 0; j <= i; j++) {
    satirlar += "*";
  }
  console.log(satirlar);
}
