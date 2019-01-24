function Brain(){
  this.createInterface= (result)=>{
    let fifth_row = document.getElementById('fifth_row');
     const arr_of_keys = Object.keys(result);

    // for(let i; i<5;i++){
      // console.log('hhh');
      // $('#fifth_row').text(arr_of_keys[i]);
      // $('#fifth_row').text('result');
      for(let i in arr_of_keys){

    let eggs_container = document.createElement('DIV');
    eggs_container.setAttribute("class","eggs_container");
    let br_img = document.createElement('DIV');
    br_img.setAttribute("class","br_img");
    let img = document.createElement('IMG');
     let img_to_display = result[arr_of_keys[i]][1];
     img.setAttribute("src",`images/${img_to_display}`);
     let breakfast_title = document.createElement('DIV');
     breakfast_title.setAttribute("class","breakfast_title");
     let breakfast_text = arr_of_keys[i];
    breakfast_title_display= document.createTextNode(breakfast_text);
     breakfast_title.appendChild(breakfast_title_display);

     let description = document.createElement('DIV');
     let des_text = result[arr_of_keys[i]][2];
     des_node = document.createTextNode(des_text);
     description.appendChild(des_node);

      let price_container = document.createElement('DIV');
      price_container.setAttribute("class","price_container");
     let price = document.createElement('DIV');
     price.setAttribute("class","price");
     price.setAttribute("id","price"+i);

     let price_each = '$'+result[arr_of_keys[i]][0];
     let price_display = document.createTextNode(price_each);
     // let test = document.createElement('BUTTON');
     // test.setAttribute("clss","test");
     // price_container.appendChild(test);

     // price.appendChild(`$${price_display}`);
     // price.setAttribute("content","100");
      price.appendChild(price_display);
     // br_img.appendChild(price);
     price_container.appendChild(price);
     br_img.appendChild(price_container);
     br_img.appendChild(img);
     // eggs_container.appendChild(price_container);
     eggs_container.appendChild(br_img);
     eggs_container.appendChild(breakfast_title)
     eggs_container.appendChild(description);

     // let id_i = 'price'+i;
     $("#price"+i).click(function(){
       alert('hello');
       order.showOrHideOrderCart('#order',true);
     });

     // if(document.getElementById("price0") !== null)
     // {alert('hello111');
     // }


     fifth_row.appendChild(eggs_container);

  }
}
}
