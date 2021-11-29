
//  BUDGET CONTROLLER 
var budgetController = (function() {
   
 var Expense = function(id, description, value) {
     this.id = id;
     this.description = description;
     this.value = value;
 };
 

 var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
};


var data = {
     allItems: {
         exp: [],
         inc: []
     },
    totals: {
        exp: 0,
        inc: 0
    },

};

return {
   addItem: function(type, des, val) {
     var newItem,  ID;

     ID = 0;

    //  create new ID
      
    if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
    } else {
        ID = 0;
    }
    
    

      //create  new item based on 'inc' or 'exp' type
     if (type === 'exp') {
        newItem = new Expense(ID, des, val);
     } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
     }
 

     //push it into our data structure
     data.allItem[type].push(newItem);

     // Return the new element
     return newItem;

   },
   
   testing: function() {
       console.log(data);
   }

};
 
})();






// UI CONTROLLER
var UIController = (function(){
      
    var DOMstrings = {
       inputType: '.add_type',
       inputDescription: '.add_description',
       inputValue:'.add_value',
       inputBtn: '.add_btn'
    };
  
    return {
        getInput: function() {
              return{

                 type: document.querySelector(DOMstrings.inputType).value,
                 description: document.querySelector(DOMstrings.inputDescription).value,
                 value: document.querySelector(DOMstrings.inputValue).value
                 
              };

        },


        addListItem: function(obj, type) {

         // create HTML string with placeholder text
         
        html ='<div class="item clearfix" id="income-0"><div class="item_description">Salary</div>
        <div class="right clearfix"><div class="item_value">+ 2,100.00</div> <div class="item_delete">
         <button class="item_delete-btn">sign</button></div> </div></div>'
    

         //Replace the placeholder text with some actual data


         //Insert the HTML into the DOM



        },

      getDOMstrings: function() {
          return DOMstrings;
      }

    };

})();




//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UIctrl) {

    var setupEventListeners = function() {
        var DOM = UIctrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
  

        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 ||  event.which === 13){
              ctrlAddItem();
            }
        });
    
    };


  

    var ctrlAddItem = function() {
        var input, newItem;

     // 1. Get the field input data
       input = UIctrl.getInput();

      // 2. Add the item to the budget controller
       newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    //   console.log(input);







     
    };

    return{
       init: function(){
           console.log('Application has started.');
           setupEventListeners();
       }

    }


})(budgetController, UIController);

controller.init();

