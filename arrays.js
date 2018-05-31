var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles']
  
var cities = [
  'New York',
  'San Francisco']

cities

var cities = ["New York", "San Francisco"]
 
cities = ["Philadelphia", ...cities]

console.log(cities)

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = array.push(element)
}

function addElementToEndOfArray(array, element) {
  return [array, ...element]
}

function destructivelelyaddElementToEndOfArray(array, element) {
  array = array.unshift(element)
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.unshift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  new_array = array.slice(0, array.length - 1)
  return new_array
}
