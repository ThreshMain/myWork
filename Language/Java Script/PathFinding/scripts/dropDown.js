/* eslint-disable space-before-function-paren */
// eslint-disable-next-line no-unused-vars
let algorithm = null
var customSelect, j, backGroundOptions, firstElement, options, option, sortType
customSelect = document.getElementsByClassName("custom-select")
backGroundOptions = customSelect[0].getElementsByTagName("select")[0]
firstElement = document.createElement("DIV")
firstElement.setAttribute("class", "select-selected")
firstElement.innerHTML = backGroundOptions.options[backGroundOptions.selectedIndex].innerHTML
customSelect[0].appendChild(firstElement)
options = document.createElement("DIV")
options.setAttribute("class", "select-items select-hide")
for (j = 1; j < backGroundOptions.length; j++) {
  option = document.createElement("DIV")
  option.innerHTML = backGroundOptions.options[j].innerHTML
  option.addEventListener("click", function(e) {
    var y, i, k, s, h
    s = this.parentNode.parentNode.getElementsByTagName("select")[0]
    h = this.parentNode.previousSibling
    for (i = 0; i < s.length; i++) {
      if (s.options[i].innerHTML === this.innerHTML) {
        s.selectedIndex = i
        algorithm = backGroundOptions.options[i]
        h.innerHTML = this.innerHTML
        y = this.parentNode.getElementsByClassName("same-as-selected")
        for (k = 0; k < y.length; k++) {
          y[k].removeAttribute("class")
        }
        this.setAttribute("class", "same-as-selected")
        break
      }
    }
    h.click()
  })
  options.appendChild(option)
}
customSelect[0].appendChild(options)
firstElement.addEventListener("click", function(e) {
  e.stopPropagation()
  closeAllSelect(this)
  this.nextSibling.classList.toggle("select-hide")
  this.classList.toggle("select-arrow-active")
})

function closeAllSelect(elmnt) {
  var x
  var y
  var i
  var arrNo = []
  x = document.getElementsByClassName("select-items")
  y = document.getElementsByClassName("select-selected")
  for (i = 0; i < y.length; i++) {
    if (elmnt === y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active")
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide")
    }
  }
}
document.addEventListener("click", closeAllSelect)
