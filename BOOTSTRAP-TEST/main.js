// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import Dropdown from 'bootstrap/js/dist/dropdown'
import Tooltip from 'bootstrap/js/dist/tooltip'

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl)
})