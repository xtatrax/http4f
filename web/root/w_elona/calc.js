
function calc_mana(){
    reaction_form.reaction.value = (
        reaction_form.mana.value * 400 /
        (100 + reaction_form.mana_limit.value * 10)
    ) / reaction_form.birthday.value;
}

function calc_price(){
    var cost = price_form.cost.value;
    switch(+price_form.ex.value){
        case 0:
        break;
        case 1:
        break;
        case 2:
        break;
        case 3:
        break;
    }
    switch(+price_form.state.value){
        case 0:
        break;
        case 1:
            cost = cost * 120 / 100;
        break;
            cost = cost / 2;
        case 2:
        break;
        case 3:
            cost = cost / 5;
        break;
    }
    var lv = price_form.lv.value;
    var limit = lv * 250 + 5000;
    if(cost/3 < limit){
        limit =cost / 3;
    }
    cost = cost * (100+lv+5)/1000;
    cost < 0 ? cost=1:0;
    if(cost > limit){
        cost = limit;
    }
    price_form.value_.value=cost;
}