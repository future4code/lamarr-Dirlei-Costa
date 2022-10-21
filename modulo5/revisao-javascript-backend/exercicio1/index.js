const convertTemperature = (temperature, unit) => {
   if (typeof temperature !== "number") {
     return `Erro. Parâmetro inválido ('temperature').`;
   }
 
   if (typeof unit !== "string") {
     return `Erro. Parâmetro inválido ('unit').`;
   }
 
   if (unit !== "F" && unit !== "K") {
     return `Erro. Parâmetro inválido ('unit').`;
   }
 
   if (unit === "F") {
     return `${temperature}ºC é equivalente a ${Math.round((temperature * 9 / 5) + 32)}ºF`;
   } else {
     return `${temperature}ºC é equivalente a ${Math.round(temperature + 273.15)}ºK`;
   }
 };
 
 console.log(convertTemperature(30, "K"));
 console.log(convertTemperature(30, "F"));
 console.log(convertTemperature("30", 40));
 console.log(convertTemperature(30, "40"));