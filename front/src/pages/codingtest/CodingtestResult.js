import IndexNavbar from "../../components/Navbars/IndexNavbar";
import CodingTestHeader from "./Header/CodingtestHeader";
// reactstrap components
import {
    Card,
    CardBody,
    CardTitle,
} from "reactstrap";
import {Link} from "react-router-dom";
import CodeMirrorSample from "./codemirror/CodeMirrorSample";
import CodeAside from "./aside/CodeAside";
import Success from "./view/Success";

function CodingtestResult() {

    return <>

        <IndexNavbar/>
        <div className="wrapper">
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <CodeAside></CodeAside>
                <div style={{marginTop: '-40px'}}>
                    <Card style={{width: "60%", height: '100%', display: 'block', margin: '0 auto'}}>
                        <CardBody>
                            <Success></Success>
                            <form>
                                <CodeMirrorSample></CodeMirrorSample>
                                <div style={{display: 'inline-block', marginTop: '30px', width: '100%'}}>
                                <Link to="/codingtest/view" style={{
                                    float: 'right',
                                    width: '100px',
                                    backgroundColor: '#2CA8FF',
                                    color: 'white',
                                    border: '1px solid white',
                                    textAlign:'center'
                                }}>문제화면으로
                                </Link>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                    <div style={{height: '50px'}}></div>
                </div>

                {/*<Carousel />*/}
                {/*<Pagination />*/}
                {/* <Images />

          <Navbars />
          <Tabs />
          <SignUp />
          <Notifications />
          <Typography />
          <Javascript />

          <NucleoIcons />
          <CompleteExamples />

          <Examples />
          <Download />*/}
            </div>

        </div>
    </>
}

export default CodingtestResult;