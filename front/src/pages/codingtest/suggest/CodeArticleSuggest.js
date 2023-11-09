import React from "react";

function CodeArticleSuggest() {
    const [uparticle, setUparticle] = React.useState(0);
    const [downarticle, setDownarticle] = React.useState(0);

    return<>

        <div style={{textAlign:'center',height:'50px'}}>
            <div style={{width:'50px',height:'auto',display:'inline-block',border:'1px solid #2CA8FF'}}>
                <button
                    style={{border:'none',backgroundColor:'white', width:'100%',height:'40px'}}
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
                    style={{border:'none',backgroundColor:'white', width:'100%',height:'40px'}}
                    onClick={()=>{setDownarticle(downarticle+1,alert('비추천'))}}
                >
                    <p style={{fontSize:'13px',height:'30px',display:'block'}}>{downarticle}
                        <i className="now-ui-icons ui-2_like" style={{transform:'rotateX(180deg)',display:'block'}}></i>
                    </p>
                </button>
            </div>
        </div>
        </>
}

export default CodeArticleSuggest;