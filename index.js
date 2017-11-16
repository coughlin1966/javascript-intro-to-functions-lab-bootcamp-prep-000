function shout(string) {
  return string.toUpperCase()
}
shout('Hello')

function whisper(string) {
  return string.toLowerCase()
}
whisper('Hello')

function logShout(string) {
  console.log(string)
}
logShout('HELLO')

function logWhisper(string) {
  console.log(string)
}
logWhisper('hello')

var lowercase = 'hello'
var uppercase = 'HELLO'
var mixedcase = 'Hi There'
//lowercase.toLowerCase === lowercase
//uppercase.toUpperCase === uppercase
//mixedcase.toLowerCase === mixedcase
//mixedcase.toUpperCase === mixedcase

function sayHiToGrandma(string) {
  return (if (lowercase.toLowerCase === lowercase) {"I can't hear you!"}
elseif (uppercase.toUpperCase === uppercase) {'YES INDEED!'}
else {'I love you, too.'})
}
