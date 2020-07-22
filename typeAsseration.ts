let definatlyNotString : any = "I am a string";

let stringLength = (<string> definatlyNotString).length;

let strLength = (definatlyNotString as string).length;