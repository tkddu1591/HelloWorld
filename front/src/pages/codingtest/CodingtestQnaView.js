import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef} from "react";
import Slider from "nouislider";
import CodingTestHeader from "./CodingtestHeader";

// reactstrap components
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink, Breadcrumb, BreadcrumbItem
} from "reactstrap";
import UserPopup from "../../components/Lecture/UserPopup";



const code = 'const a = 0;';







function CodingtestQnaView({popup, setPopup}){

    let popupSetting= {
        top: 20,
        marginLeft: 0,
        marginRight: 50
    }



    const code = 'import java.io.BufferedReader;\n' +
        'import java.io.IOException;\n' +
        'import java.io.InputStreamReader;\n' +
        'import java.util.StringTokenizer;\n' +
        '\n' +
        'public class Main {\n' +
        '\n' +
        '\tpublic static void main(String[] args) throws IOException {\n' +
        '\t\tBufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n' +
        '\t\tStringTokenizer st = new StringTokenizer(br.readLine());\n' +
        '\t\t\n' +
        '\t\tint n = Integer.parseInt(st.nextToken());\n' +
        '\t\tint m = Integer.parseInt(st.nextToken());\n' +
        '\t\tint a ,b;\n' +
        '\t\tint arr[] = new int [n];\n' +
        '\t\t\n' +
        '\t\tfor (int i=0; i<n ; i++) {\n' +
        '\t\t\tarr[i]=i+1;\n' +
        '\t\t}\n' +
        '\t\t\n' +
        '\t\tfor (int i=0; i<m ; i++) {\n' +
        '\t\t\tStringTokenizer st2 = new StringTokenizer(br.readLine());\n' +
        '\t\t\ta=Integer.parseInt(st2.nextToken())-1;\n' +
        '\t\t\tb=Integer.parseInt(st2.nextToken())-1;\n' +
        '\t\t\tfor (int j=a; j<=b; j++,b--) {\n' +
        '\t\t\t\tint temp = arr[j];\n' +
        '\t\t\t\tarr[j]=arr[b];\n' +
        '\t\t\t\tarr[b]=temp;\n' +
        '\t\t\t}\n' +
        '\t\t\t}\n' +
        '\t\t\n' +
        '\t\t\n' +
        '\t\tfor (int i=0; i<n;i++) {\n' +
        '\t\t\tSystem.out.print(arr[i]+" ");\n' +
        '\t\t}\n' +
        '\t\t\n' +
        '\t}\n' +
        '\t\n' +
        '}';

    const arr= code.split("\n");

    const [uparticle, setUparticle] = React.useState(0);
    const [downarticle, setDownarticle] = React.useState(0);
    const [upanswer, setUpanswer] = React.useState(0);
    const [downanswer, setDownanswer] = React.useState(0);


    return<>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <script src="./CodeMirror.js"></script>
                <div style={{marginTop:'-40px'}}>
                    <Card style={{ width: "80%",height:'auto',display:'block',margin:'0 auto' }}>
                        <CardBody>

                            <CardTitle tag="h4"  style={{marginTop:'-10px'}}>이거 어케풀어용??</CardTitle>
                            <div style={{borderBottom:'1px dashed #E6E6FA'}}>
                                {popup === 'user' && <UserPopup popupSetting={popupSetting}></UserPopup>}
                                <p style={{fontSize: '12px', color: 'gray', margin: 0}}
                                ><span style={{cursor: "pointer"}} onClick={() => {
                                    setPopup('user')
                                }}>사용자</span> / 2023-10-10 18:26</p>
                            </div>
                            <CardText style={{marginTop:'10px'}}>
                                <div>
                                    ㅠㅠㅠㅠ 넘어려워용 ㅠㅠㅠㅠㅠ(질문글 내용)
                                </div>
                                <Breadcrumb>
                                    <BreadcrumbItem active >
                                        {arr}

                                    </BreadcrumbItem>
                                </Breadcrumb>

                            </CardText>
                            <div style={{textAlign:'center',height:'50px'}}>
                                <div style={{width:'50px',height:'auto',display:'inline-block',border:'1px solid #2CA8FF'}}>
                                    <button
                                        style={{border:'none',backgroundColor:'white', width:'100%',height:'auto'}}
                                        onClick={()=>{setUparticle(uparticle+1,alert('추천'))}}
                                    >
                                        <p style={{fontSize:'13px',height:'30px',display:'block'}}>{uparticle}
                                            <i className="now-ui-icons ui-2_like" style={{display:'block'}}></i>
                                        </p>
                                    </button>
                                </div>

                                <div style={{display:'inline-block',width:'10px'}}></div>

                                <div style={{width:'50px',height:'auto',display:'inline-block' ,border:'1px solid red'}}>
                                    <button
                                        style={{border:'none',backgroundColor:'white', width:'100%',height:'auto'}}
                                        onClick={()=>{setDownarticle(downarticle+1,alert('비추천'))}}
                                    >
                                        <p style={{fontSize:'13px',height:'30px',display:'block'}}>{downarticle}
                                            <i className="now-ui-icons ui-2_like" style={{transform:'rotateX(180deg)',display:'block'}}></i>
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <div style={{height:'20px'}}></div>

                    <Card style={{  width: "80%",height:'100%',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4" style={{marginTop:'-10px'}}>
                            <div style={{borderBottom:'1px dashed #E6E6FA'}}>
                                <div style={{borderBottom:'1px dashed #E6E6FA'}}>
                                    {popup === 'user' && <UserPopup popupSetting={popupSetting}></UserPopup>}
                                    <p style={{fontSize: '12px', color: 'gray', margin: 0}}
                                    ><span style={{cursor: "pointer"}} onClick={() => {
                                        setPopup('user')
                                    }}>사용자</span> / 2023-10-10 18:26</p>
                                </div>
                            </div>
                            </CardTitle>
                            <form style={{marginTop:'10px'}}>
                                <Breadcrumb>
                                    <BreadcrumbItem active >

                                        가나다라마바사(답변내용)

                                    </BreadcrumbItem>
                                </Breadcrumb>

                            <div style={{display:'inline-block',marginTop:'30px',width:'100%'}}>
                                    <a style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>
                                       수정
                                    </a>
                            </div>
                            </form>
                            <div style={{textAlign:'center',height:'50px'}}>
                                <div style={{width:'50px',height:'auto',display:'inline-block',border:'1px solid #2CA8FF'}}>
                                    <button
                                        style={{border:'none',backgroundColor:'white', width:'100%',height:'auto'}}
                                        onClick={()=>{setUpanswer(upanswer+1,alert('답변추천'))}}
                                    >
                                        <p style={{fontSize:'13px',height:'30px',display:'block'}}>{upanswer}
                                            <i className="now-ui-icons ui-2_like" style={{display:'block'}}></i>
                                        </p>
                                    </button>
                                </div>

                                <div style={{display:'inline-block',width:'10px'}}></div>

                                <div style={{width:'50px',height:'auto',display:'inline-block' ,border:'1px solid red'}}>
                                    <button
                                        style={{border:'none',backgroundColor:'white', width:'100%',height:'auto'}}
                                        onClick={()=>{setDownanswer(downanswer+1,alert('답변 비추천'))}}
                                    >
                                        <p style={{fontSize:'13px',height:'30px',display:'block'}}>{downanswer}
                                            <i className="now-ui-icons ui-2_like" style={{transform:'rotateX(180deg)',display:'block'}}></i>
                                        </p>
                                    </button>
                                </div>
                            </div>

                        </CardBody>
                    </Card>

                    <div style={{height:'20px'}}></div>

                    <Card style={{  width: "80%",height:'100%',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4" style={{marginTop:'-10px',borderBottom:'1px dashed #E6E6FA'}}>답변작성</CardTitle>
                            <form>

                               <textarea cols="30" rows="20" style={{width:'100%',height:'auto',border:'1px solid #E6E6FA'}} placeholder=" 답변으로 등록할 내용을 입력하세요"></textarea>
                                <div style={{display:'inline-block',marginTop:'30px',width:'100%'}}>
                                    <a style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>
                                        등록
                                    </a>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                    <div style={{height:'50px'}}></div>



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

        </div></>
}
export default CodingtestQnaView;