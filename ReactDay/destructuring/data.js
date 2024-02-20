const animals = [
  {
    name: "cat",
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5,
    },
    sound: "meow",
  },
  { name: "dog", sound: "woof" },
];
function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}
export default animals;
export { useAnimals };
