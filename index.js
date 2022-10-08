const radius = Number(process.argv.slice(2)[0]);

if (isNaN(radius) || radius <= 0) {
  console.log("Lütfen 0'dan büyük bir yarıçap değeri giriniz!");
  return false;
}

console.log(`Yarıçapı ${radius} olan dairenin alanı: ${Math.PI * radius ** 2}`);
