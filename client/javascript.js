function proRangeSlider(sliderid, outputid, colorclass) {
  var x = document.getElementById(sliderid).value;
  document.getElementById(outputid).innerHTML = x;
  document.getElementById(sliderid).setAttribute('class', colorclass);

  updateTotal();
}

var total = 0;

function updateTotal() {
  var list = document.getElementsByClassName("range");
  [].forEach.call(list, function(el) {
    console.log(el.value);
    total += parseInt(el.value);
  });
  document.getElementById("n_total").innerHTML = total;

}
$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

$(function() {
  $('form').submit(function() {
    $('#result').text(JSON.stringify($('form').serializeObject()));
    return false;
  });
});
