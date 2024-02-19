var numbers = [3, 56, 2, 48, 5];
import React from "react";
import emojipedia from "./emojipedia";
const newEmoji = emojipedia.map(function (item) {
  return item.meaning.substring(0, 100);
});
console.log(newEmoji);
