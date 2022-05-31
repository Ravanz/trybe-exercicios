// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   console.log("Returned planet: ", mars);
// };

// setTimeout(() => {
//   getPlanet();
// }, 4000);  // imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const marsTemp = getMarsTemperature();
  console.log(`Marns termperature is: ${marsTemp} `)
}
// crie a função sendMarsTemperature abaixo

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo