class Pizza{
  constructor(s,mT,vT){
    this.size=s;
    this.meatToppings=mT;
    this.veggieToppings=vT;
  }
  sizeCost(){
    if(this.size=="S"){
      return 7.99;
    }
    if(this.size=="M"){
      return 9.99;
    }
    if(this.size=="L"){
      return 12.99;
    }
    if(this.size=="XL"){
      return 15.99;
    }
  toppingCost(top){
    if(top=="meat"){
      return sizeCost*0.99;
    }
    if(top=="veggie"){
      return sizeCost*0.50;
    }
  price(){
    return sizeCost+toppingCost;
  }
  promotionalDeal(pizza,percent){
    for(this.pizza/.50);
    return newPrice;
  }
}
let mypizza = new Pizza("M",["sausage","peporoni"],["onion"])
