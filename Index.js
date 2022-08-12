const tags = [
  new Heading1()
]

setInterval(() => {
  document.getElementById("hello").innerText = tags[0].label
}, 100)
