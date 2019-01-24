const brain = new Brain();
const order = new Order();
let data_result;

$(function() {
  loadJsonData();
  $("#your_order").click(function() {
    // alert('hello');
    order.showOrHideOrderCart("#order", true);
  });
  $("#order_close").click(function() {
    order.showOrHideOrderCart("#order", false);
  });

  // $('#price0').click(function(){
  //   alert('hello');
  // })
  // why this is not working?
});

const loadJsonData = () => {
  $.getJSON("json/data.json", function(result) {
    data_result = result;

    brain.createInterface(data_result);
    let arr_of_keys = Object.keys(data_result);
    for (let i = 0; i < arr_of_keys.length; i++)
      $("#price" + i).click(function() {
        order.showOrHideOrderCart("#order", true);
        order.addOrder(
          arr_of_keys[i],
          Number(data_result[arr_of_keys[i]][0]),
          i
        );
      });
  });
};
