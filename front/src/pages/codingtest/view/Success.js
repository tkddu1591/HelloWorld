import {CardTitle} from "reactstrap";

function Success(){
    return<>
        <CardTitle tag="h2" style={{marginTop: '-10px', borderBottom: '1px dashed #E6E6FA',fontSize:'40px'}}>
            실패!
        </CardTitle>
        <CardTitle tag="h5" style={{marginTop: '-10px', borderBottom: '1px dashed #E6E6FA',fontSize:'20px'}}>
            Compiler runtime error, info: "cpu_time": 0, "real_time": 2, "memory": 0, "signal": 10,
            "exit_code": 0, "error": 0, "result": 5
        </CardTitle>
    </>
}

export default Success;