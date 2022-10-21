/* Adds Element BEFORE NeighborElement */
Element.prototype.appendBefore = function(element) {
    element.parentNode.insertBefore(this, element);
  }, false;
  
/* Adds Element AFTER NeighborElement */
Element.prototype.appendAfter = function(element) {
element.parentNode.insertBefore(this, element.nextSibling);
}, false;