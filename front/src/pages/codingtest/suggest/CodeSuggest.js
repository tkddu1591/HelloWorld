import React from "react";

function CodeSuggest() {
    const [uparticle, setUparticle] = React.useState(0);
    const [downarticle, setDownarticle] = React.useState(0);
    const [upanswer, setUpanswer] = React.useState(0);
    const [downanswer, setDownanswer] = React.useState(0);


    return<>

    <div style={{textAlign:'center',height:'50px'}}>
        <div style={{width:'50px',height:'auto',display:'inline-block',border:'1px solid #2CA8FF'}}>
            <button
                style={{border:'none',backgroundColor:'white', width:'100%',height:'40px'}}
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
                style={{border:'none',backgroundColor:'white', width:'100%',height:'40px'}}
                onClick={()=>{setDownanswer(downanswer+1,alert('답변 비추천'))}}
            >
                <p style={{fontSize:'13px',height:'30px',display:'block'}}>{downanswer}
                    <i className="now-ui-icons ui-2_like" style={{transform:'rotateX(180deg)',display:'block'}}></i>
                </p>
            </button>
        </div>
    </div>
        </>
}

export default CodeSuggest;