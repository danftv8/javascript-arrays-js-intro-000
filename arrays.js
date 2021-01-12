var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element) {
  return [element, ...array];
}
function destructivelyAddElementToBeginngingOfArray (array, element) {
  array.unshift(element);
  return array
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array
}
