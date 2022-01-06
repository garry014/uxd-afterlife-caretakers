global = {
    hasBeneficiary: false,
    specifyShares:false,
    AssetsBeneficiary:false,
    hasWitness:false,
    AddWitness:false,
    hasSpouse:false
}
document.getElementById("cash_type").style.display="none";
document.getElementById("real_estate_type").style.display="none";
document.getElementById("bank_type").style.display="none";
document.getElementById("other_asset_type").style.display="none";

function setBeneficiary(inHasBeneficiary){
    //console.log("hello");
    global.hasBeneficiary = inHasBeneficiary;
    if(global.hasBeneficiary){
        document.getElementById("bDetails").style.display = "block";
    }
    else{
        document.getElementById("bDetails").style.display = "none";
    }
}
function setWitness(inHasWitness){
    global.hasWitness = inHasWitness
    if(global.hasWitness){
        document.getElementById("wDetails").style.display = "block";
        document.getElementById("wNDetails").style.display = "none";
    }
    else{
        document.getElementById("wDetails").style.display = "none";
        document.getElementById("wNDetails").style.display = "block";
    }
}
function toggleShares(){
    //console.log("hello");
    global.specifyShares = !global.specifyShares;
    if(global.specifyShares){
        document.getElementById("specifyShareContainer").style.display = "block";
        
    }
    else{
        document.getElementById("specifyShareContainer").style.display = "none";
    }
}
function toggleWitness(){
    //console.log("hello");
    global.AddWitness = !global.AddWitness;
    if(global.AddWitness){
        document.getElementById("wForm").style.display = "block";
        
    }
    else{
        document.getElementById("wForm").style.display = "none";
    }
}
function toggleSpouse(){
    //console.log("hello");
    global.hasSpouse = !global.hasSpouse;
    if(global.hasSpouse){
        document.getElementById("sDetails").style.display = "block";
        
    }
    else{
        document.getElementById("sDetails").style.display = "none";
    }
}
function toggleBeneficiary(AssetsBeneficiaryL){
    global.AssetsBeneficiary = AssetsBeneficiaryL
    if(global.AssetsBeneficiary){
        document.getElementById("bDetails").style.display = "block";
        
    }
    else{
        document.getElementById("bDetails").style.display = "none";
    }
}
// for the specific gift section
var select = document.getElementById("gift_type");
var value = select.options[select.selectedIndex].value;
console.log(value)
// if(value == "1"){
//     document.getElementById("cash_type").style.display="block";

// }
// else if(value == "2"){
    
//     document.getElementById("real_estate_type").style.display="block";

// }
// else if(value == 3){
//     document.getElementById("bank_type").style.display="block";

// }
// else{
//     document.getElementById("other_asset_type").style.display="block";

// }
if(value == 1){
    document.getElementById("cash_type").style.display="block";

}
else if(value == 2){
    
    document.getElementById("real_estate_type").style.display="block";

}
else if(value == 3){
    document.getElementById("bank_type").style.display="block";

}
else{
    document.getElementById("other_asset_type").style.display="block";

}