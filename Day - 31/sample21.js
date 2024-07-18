/*
import {fun1,fun2} from "./sample22.js"
fun1("Sai Vardhan");
fun2()
*/
//Renaimg for importing
/*
import {fun1 as func1,fun2 as func2} from "./sample22.js"
func1("Sai Vardhan");
func2();
*/
//Renaming for exporting
import * as expfiles from "./sample22.js"
expfiles.sample1("Sai Vardhan");
expfiles.sample2();