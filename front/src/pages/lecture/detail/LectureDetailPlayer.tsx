import React, {Component} from "react";
import ReactPlayer from "react-player";

interface LectureDetailPlayerProps {
    timeCheck?: Array<{ time: number; title: string }>;
}

class LectureDetailPlayer extends Component<LectureDetailPlayerProps> {
    private player: any;

    constructor(props) {
        super(props);
        this.player = React.createRef();
    }

    seekToTime = (timeInSeconds) => {
        if (this.player.current) {
            this.player.current.seekTo(timeInSeconds, 'seconds');
        }
    };

    render() {
        const {timeCheck} = this.props;
        return (
            <>
                <div style={{position: 'relative', paddingTop: '56.25%', marginBottom:'20px'}}>
                    <ReactPlayer
                        style={{position: "absolute", top: 0, left: 0, width: '100%', height: '100%'}}
                        className="player"
                        url={"https://www.youtube.com/watch?v=O9r7GHPCYE0"}
                        width='100%'
                        height='100%'
                        playing={false}
                        muted={false}
                        controls={true}
                        ref={this.player}
                        fallback={<i className="now-ui-icons loader_gear spin" style={{fontSize:'50px'}}></i>}
                    />
                </div>


                {timeCheck?.map((item, index) => (
                    <p key={item.time} >
                        <span onClick={() => this.seekToTime(item.time)} style={{color:'#3366ff',cursor:"pointer"}}>{item.time / 60}:{item.time % 60}</span> {item.title}
                    </p>
                ))}
            </>
        );
    }
}

export default LectureDetailPlayer;