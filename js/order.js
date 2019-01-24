function Order(){
  //----------
  this.arr_order = [];
  this.arr_prices = [];
  this.num = [];
  this.num1=[];
  this.a = [];
  // this.b;

  for(let i = 0;i<30;i++)
  {
    this.num[i]=1;
    // this.num1[i]=1;
  }
  //------------
  this.showOrHideOrderCart = (the_id,show) =>{
    if(show){
      $(the_id).animate({top:"0px"});
    }else {
       $(the_id).animate({top:"-365px"});
    }
  };


  this.addOrder = (the_breakfast,the_price,index)=>{
    this.num1[index] = the_breakfast;

    if(!this.arr_order.includes(the_breakfast))
    {this.arr_order.push(the_breakfast);
    this.arr_prices.push(the_price);

}
    else {
            this.num[index]++;
    }

   this.createOrderString();

  };

  this.addTotal = ()=> {
    let total = 0;
    for(let i in this.arr_prices){
      total += this.arr_prices[i] * this.a[i];
    }
    return total;
  };

  this.caculateTaxes = (initial_amount) => {
    return Number((initial_amount * 0.06).toFixed(2));
  };

  this.tipSuggestion = (initial_amount) =>{
      return Number((initial_amount * 0.2).toFixed(2));
  };

  this.createOrderString = (q) => {
    let string_to_return = "";
    // if(this.b) this.num[index] = 1;
    // to get index
    this.num[q] =1;
    let m = 0;
    for(let i = 0;i<this.arr_order.length;i++)
    {for(let p = 0;p<100;p++)
    {if(this.arr_order[i]===this.num1[p]) {this.a[m] = this.num[p];m++;break;}}
    }
    const total_without_taxes = this.addTotal();
    const total_with_taxes = total_without_taxes +this.caculateTaxes(total_without_taxes);
    const tip1 = this.tipSuggestion(total_without_taxes);
    const total_tx_and_tip = total_with_taxes + tip1;
    for (let i in this.arr_order) {
      const btn_id = `b${i}`;
      const del_num_id = `d${i}`;
      const add_num_id = `a${i}`;

       string_to_return += `<button class = "delete_btn" id = ${btn_id}>X</button> - ${this.arr_order[i]}<span class = 'x'>X</span><button id = ${del_num_id}>-</button>${this.a[i]}<button id = ${add_num_id}>+</button>: $${(this.arr_prices[i]*this.a[i]).toFixed(2)}<br>`;

}
  if(this.addTotal()!==0)
    {string_to_return += "<hr>";
    string_to_return += `Total Without Tax : $${total_without_taxes.toFixed(2)}<br>`;
    string_to_return += `Total With Tax(6%) : $${(total_with_taxes).toFixed(2)}<br>`;
    string_to_return += `Suggested Tip(20%) : $${(tip1).toFixed(2)}<br>`;
      string_to_return += `Total With Tax and Tip : $${total_tx_and_tip.toFixed(2)}<br>`;
    $("#order_to_display").html(string_to_return);}
    $("button").click(function(evt){
      // alert(evt.target.id);
      const id = evt.target.id;
      const first_letter = id.substring(0,1);
      const the_index = id.substring(1,id.length);
      if(first_letter==='b')
      // this.a[the_index]--;
    $('#order_to_display').html(order.removeOrder(the_index));
    else
    $('#order_to_display').html(order.changenum(first_letter,the_index));

  // console.log(the_index);

    })

  };

  this.removeOrder = (the_index) => {
    let p;
    
    for( p = 0;p<100;p++)
    {if(this.arr_order[the_index]===this.num1[p])  break;}

    this.arr_order.splice(the_index,1);
    this.arr_prices.splice(the_index,1);


    if(this.addTotal()===0)
    {

      this.num[p] = 1;
      return " ";}
    return this.createOrderString(p);
  };


  this.changenum = (l,the_index) =>{
    let p;
      //
      for( p = 0;p<30;p++)
      {if(this.arr_order[the_index]===this.num1[p])  break;}
      if(this.num[p]>1&&l==='d')
      this.num[p]--;
      else if(l==='a')
      this.num[p]++;
      return this.createOrderString();
  }

}
