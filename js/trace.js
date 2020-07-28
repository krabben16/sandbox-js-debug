const a = () => {
  console.log('a')
  console.trace()
}

const b = () => {
  a()
}

b()
