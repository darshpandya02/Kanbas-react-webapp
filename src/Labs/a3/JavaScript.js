import Add from "./Add";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ES5Functions from "./ES5Functions";
import FunctionParenthesisandParameters from "./FunctionParenthesisAndParameters";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import PathParameters from "./PathParameters";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";

function JavaScript() {
console.log("Hello World!");

    return (
        <div className="JavaScript">
            <h3>JavaScript</h3>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ES5Functions />
            <ArrowFunctions />
            <ImpliedReturn />
            <FunctionParenthesisandParameters />
            <WorkingWithArrays />
        </div>
    )
}

export default JavaScript;