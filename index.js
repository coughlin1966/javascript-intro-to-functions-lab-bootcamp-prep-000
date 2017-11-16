function shout(string) {
  return string.toUpperCase()
}
shout('Hello')

function whisper(string) {
  return string.toLowerCase()
}
whisper('Hello')

function logShout(string) {
  console.log(string.toUpperCase())
}
logShout('hello')

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper('HELLO')

var lowercase = 'hello'
var uppercase = 'HELLO'
var mixedcase = 'Hi There'
//lowercase.toLowerCase === lowercase
//uppercase.toUpperCase === uppercase
//mixedcase.toLowerCase === mixedcase
//mixedcase.toUpperCase === mixedcase

function sayHiToGrandma(string) {
  if (lowercase.toLowerCase() === lowercase) {return('I can\'t hear you!')}
}
function sayHiToGrandma(string) {if (uppercase.toUpperCase() === uppercase) {return('YES INDEED!')}
}
function sayHiToGrandma(string) {if (string === 'I love you, Grandma.'){return('I love you, too.')}
}

sayHiToGrandma('HELLO')
sayHiToGrandma('hello')
sayHiToGrandma('I love you, Grandma.')
