import IndexNavbar from "../../components/Navbars/IndexNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import React, {createRef, useEffect} from "react";
import {
    Button, Card, CardBody, CardHeader, CardLink, CardSubtitle, CardText, CardTitle, CarouselItem,
    Col,
    Container,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink,
    Row, TabContent, TabPane
} from "reactstrap";
import Slider from "nouislider";
import CodingTestHeader from "./CodingtestHeader";
import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"

let editor = new EditorView({
    extensions: [basicSetup, javascript()],
    parent: document.body
})

function BasicElements() {
    const [leftFocus, setLeftFocus] = React.useState(false);
    const [rightFocus, setRightFocus] = React.useState(false);
    let pageHeader = createRef();
    React.useEffect(() => {
        if (
            !document
                .getElementById("sliderRegular")
                .classList.contains("noUi-target")
        ) {
            Slider.create(document.getElementById("sliderRegular"), {
                start: [50],
                connect: [true, false],
                step: 0.5,
                range: {min: 0, max: 100},
            });
        }
        if (
            !document.getElementById("sliderDouble").classList.contains("noUi-target")
        ) {
            Slider.create(document.getElementById("sliderDouble"), {
                start: [20, 80],
                connect: [false, true, false],
                step: 1,
                range: {min: 0, max: 100},
            });
        }
    });
}
g
function CodingtestView(){
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    return<>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <div>
                    <div>문제내용
                        <div> 문제 descript<br/>
                            <p>descript 내용</p>
                        </div>
                        <div>문제 input<br/>
                            <p>input 내용</p>
                        </div>
                        <div>문제 output<br/>
                            <p>output 내용</p>
                        </div>
                        <div>sample input<br/>
                            <textarea required> sample input 내용</textarea>
                        </div>
                        <div>sample output<br/>
                            <textarea required> sample output 내용</textarea>
                        </div>
                        <div>hint<br/>
                            <textarea required> hint 내용</textarea>
                        </div>




                    </div>
                    <div>정답적는부분
                        <div>코드미러로 해결할것</div>
                    </div>
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
            <DarkFooter/>
        </div></>
}
export default CodingtestView;