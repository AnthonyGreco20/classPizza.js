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
  }
  toppingCost(top){
    if(top=="meat"){
      return this.meatToppings*0.99;
    }
    if(top=="veggie"){
      return this.veggieToppings*0.50;
    }
  }
  price(){
    return this.sizeCost+this.toppingCost("meat","veggie");
  }
  promotionalDeal(pizza,percent){
    this.pizza-("percent");
    return newPrice;
  }
}
