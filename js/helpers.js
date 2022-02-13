function reverseString(str) {
  if (str && str.length > 0) {
    return str.split('').reverse().join('');
  }
}

// function fetchData(url) {
//   let books = []
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       books = data.items.map(item => item.volumeInfo)
//     })
//   return books
// }
