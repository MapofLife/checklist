/**
 * @author Ben
 */
var currentLayer = 'page1';
function showLayer(lyr) {
   hideLayer(currentLayer);
   document.getElementById(lyr)
      .style.visibility = 'visible';
   currentLayer = lyr;
}

function hideLayer(lyr) {
   document.getElementById(lyr).
      style.visibility = 'hidden';
}

function showValues(form) {
   var values = '';
   var len = form.length - 1; 
   //Leave off Submit Button
   for(i=0; i<len; i++) {
      if (form[i].id.indexOf("C") != -1 || 
         form[i].id.indexOf("B") != -1)
         //Skip Continue and Back Buttons
         continue;
         values += form[i].id;
         values += ': ';
         values += form[i].value;
         values += '\n';
      }
      alert(values);
   }