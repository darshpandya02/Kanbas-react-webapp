import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexandLength";
import Destructing from "./Destructing";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import JsonStringify from "./JsonStringify";
import MapFunction from "./MapFunction";
import Spread from "./Spread";
import TemplateLiterals from "./TemplateLiterals";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    
    let variableArray1 = [
       functionScoped,   blockScoped,
       constant1,        numberArray1,   stringArray1
    ];
    const constant2 = "Working with Arrays"
    console.log(constant2);
    console.log(functionScoped);
    console.log(blockScoped);
    console.log(constant1);
    console.log(numberArray1);
    console.log(stringArray1);
    console.log(variableArray1);

    return(
        <div>
            <h2>Working with Arrays</h2>
            numberArray1 = {numberArray1};<br />
            stringArray1 = {stringArray1};<br />
            variableArray1 = {variableArray1};<br />
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunction />
            <JsonStringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <TemplateLiterals />
            <House />
            <Spread />
            <Destructing />
            <FunctionDestructing />
        </div>
    )
}

export default WorkingWithArrays;