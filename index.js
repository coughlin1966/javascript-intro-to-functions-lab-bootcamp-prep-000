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
  if (lowercase.toLowerCase() === lowercase) {return('I can\'t hear you!')}
else if (uppercase.toUpperCase() === uppercase) {return('YES INDEED!')}
//else if (string === 'I love you, Grandma.'){return('I love you, too.')}
else if {return('I love you, too.')}
}
sayHiToGrandma('hello')
