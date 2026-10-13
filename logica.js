let num1=Number(prompt("Ingrese un número: "));
let num2=Number(prompt("Ingrese un número: "));
let num3=Number(prompt("Ingrese un número: "));

function ordenarNumeros(num1,num2,num3){
    let mayor;
    let centro;
    let menor;
    if(num1===num2 && num2===num3){
        console.log("Todos los números son iguales")
        return;
    }else if(num1>=num2 && num1>=num3){
        mayor=num1
        if(num1===num2){
            centro=num2;
            menor=num3
        }else if(num1===num3){
            centro=num3
            menor=num2
        }else if(num2>num3){
            centro=num2;
            menor=num3;
            }else{
            centro=num3;
            menor=num2;
        }
    }else if(num2>=num1 && num2>=num3){
        mayor=num2
        if(num2===num1){
            centro=num1;
            menor=num3
        }else if(num2===num3){
            centro=num3;
            menor=num1;
        }else if(num1>num3){
            centro=num1;
            menor=num3;
        }
        else{
            centro=num3;
            menor=num1
        }
    }else{
        mayor=num3
        if(num3===num1){
            centro=num1;
            menor=num2;
        }else if(num3===num2){
            centro=num2;
            menor=num1;
        }else if(num1>num2){
            centro=num1;
            menor=num2
        }else{
            centro=num2;
            menor=num1
        }
    }
    console.log(mayor,centro,menor);
    console.log(menor,centro,mayor);

}
ordenarNumeros(num1,num2,num3)