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


// Mocks SPA-like page routing
// sourcing local <script> requires addition workaround
// document.addEventListener("click", (event) => {
//   if (event.target.tagName === 'A' && event.target.origin === location.origin) {
//     console.log("Mock SPA Page Change");
//     event.preventDefault();
//     const path = event.target.pathname
//     fetch(event.target.href).then(response => response.text()).then(payload => {
//       window.history.pushState(path, path, path);
//       const newNode = new DOMParser().parseFromString(payload, "text/html").querySelector("div.container");
//       console.log(newNode.classList);
//       const rootNode = document.querySelector("div.container");
//       console.log(rootNode);
//       document.body.replaceChild(newNode, rootNode);
//       window.scrollTo(0, 0)
//     })
//   }
// })
