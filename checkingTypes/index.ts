import { Bear } from './bear.model'

const bear = new Bear(3);

if(bear instanceof Bear){
    console.log("bear is instanceof Bear")
}