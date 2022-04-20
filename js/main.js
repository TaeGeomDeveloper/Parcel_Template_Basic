console.log('Hello Parcel!')

function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()