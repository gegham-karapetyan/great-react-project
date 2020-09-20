//էս ֆունկցիան օգտագործում եմ setState-ի մեջ; քանի որ arr.push()-ը վերադարձնումա
//ավեացված էլեմենտը ստիպված պտի մի հատ էլ arr.slice() անեինք, իսկ էս ձևով կարիք չկա:
//դու ինչ կարծիքի ես Մասիս ջան;

const pushInArray = function (arr,...items){
    arr.push(...items);
    return arr
}
export default pushInArray