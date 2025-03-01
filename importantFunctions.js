//1️⃣ trim() – Başta ve sonda boşlukları temizler

const text0 = "   Merhaba Dünya!   ";
console.log(text.trim());  
// Çıktı: "Merhaba Dünya!"

//2️⃣ JSON.stringify() – Nesneyi JSON formatına çevirir (string yapar)
const user1 = { name: "Ahmet", age: 25 };
const jsonString1 = JSON.stringify(user);

console.log(jsonString);
// Çıktı: '{"name":"Ahmet","age":25}'


//3️⃣ JSON.parse() – JSON string'ini nesneye çevirir
const jsonString = '{"name":"Ahmet","age":25}';
const user = JSON.parse(jsonString);

console.log(user.name); 
// Çıktı: "Ahmet"

// Neden kullanılır?
// API'den gelen JSON verisini nesneye çevirmek için
// Local Storage veya AsyncStorage’dan veri alırken


//4️⃣ toUpperCase() ve toLowerCase() – Harfleri büyük/küçük yapar
const text = "JavaScript";
console.log(text.toUpperCase()); // Çıktı: "JAVASCRIPT"
console.log(text.toLowerCase()); // Çıktı: "javascript"


//5️⃣ split() – String’i belirli bir karaktere göre böler

const sentence = "React,Node,Express,MongoDB";
const words = sentence.split(",");

console.log(words);
// Çıktı: ["React", "Node", "Express", "MongoDB"]


//6️⃣ join() – Diziyi string’e çevirir
const words1 = ["React", "Node", "Express"];
const sentence1 = words1.join(" - ");

console.log(sentence);
// Çıktı: "React - Node - Express"

// Neden kullanılır?
// Listeleri, kelimeleri veya verileri birleştirmek

//7️⃣ includes() – String veya array içinde bir şey var mı kontrol eder
const text3 = "JavaScript harika bir dil!";
console.log(text.includes("harika")); // Çıktı: true
console.log(text.includes("Python")); // Çıktı: false

// Neden kullanılır?
// Kullanıcının girdiği bir kelimenin geçerli olup olmadığını kontrol etmek
// Filtreleme ve arama işlemleri

//8️⃣ replace() – Bir kelimeyi başka bir kelimeyle değiştirir
const text6 = "Merhaba dünya!";
const newText = text6.replace("dünya", "React");

console.log(newText);
// Çıktı: "Merhaba React!"

// Neden kullanılır?
// Metin içindeki belirli kelimeleri değiştirmek
// Kötü kelimeleri sansürlemek


//9️⃣ map() – Dizinin her elemanına işlem uygular
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled);
// Çıktı: [2, 4, 6, 8]
// Neden kullanılır?
// Dizideki verileri değiştirmek veya yeni bir dizi oluşturmak


//🔟 filter() – Belirli koşulları sağlayan elemanları döndürür
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
// Çıktı: [2, 4, 6]
// Neden kullanılır?
// Listeden belirli öğeleri seçmek
// Arama ve filtreleme işlemlerinde


//1️⃣1️⃣ find() – Şarta uyan ilk elemanı döndürür
const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Veli" },
    { id: 3, name: "Ayşe" }
];

const user6= users.find(user => user.id === 2);
console.log(user);
// Çıktı: { id: 2, name: "Veli" }

// Neden kullanılır?
// Kullanıcıları veya verileri ID’ye göre bulmak



//1️⃣2️⃣ forEach() – Dizi elemanlarını tek tek dolaşır

const numbers8 = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));

// Çıktı:
// 2
// 4
// 6

//1️⃣3️⃣ reduce() – Diziyi tek bir değere indirger
const numbers4 = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
// Çıktı: 10
// Neden kullanılır?
// Toplama, çarpma gibi işlemler yapmak


// trim()	Baş ve sondaki boşlukları kaldırır
// JSON.stringify()	Nesneyi JSON string’e çevirir
// JSON.parse()	JSON string’ini nesneye çevirir
// toUpperCase() / toLowerCase()	Büyük/küçük harfe çevirir
// split()	String’i diziye çevirir
// join()	Diziyi string’e çevirir
// includes()	İçinde belirli bir kelime var mı kontrol eder
// replace()	Kelimeyi değiştirir
// map()	Dizideki her eleman için işlem yapar
// filter()	Belirli öğeleri seçer
// find()	Şarta uyan ilk öğeyi döndürür
// forEach()	Dizi elemanlarını tek tek dolaşır
// reduce()	Diziyi tek bir değere indirger
