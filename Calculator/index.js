function enter(val) {
    var v = document.getElementById('res');
    v.value += val;
  }
  function result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
  }
  function clean() {
    var val = document.getElementById('res');
    val.value = '';
  }
  function back() {
    var val = document.getElementById('res');
    val.value = val.value.slice(0, -1);
  }