function commafy(value) {
  if (value === "0") return value;
  let output = "";
  let decimal = "";
  let neg = false;


  if (value.includes(".")){
    output = value.substring(0 , value.indexOf("."))
    decimal = value.substring(value.indexOf("."));

  }else{
    output = value;
  }
  if (parseFloat(value) < 0){
      neg = true;
      output = output.substring(1);
  }

  return neg ? "-" + parseFloat(output).toLocaleString() + decimal : parseFloat(output).toLocaleString() + decimal;

};

export default commafy;
