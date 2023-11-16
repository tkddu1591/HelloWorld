import React from "react";
import ReactQuill, { Quill } from "react-quill";
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from "quill-image-resize-module-react";
import axios from "axios";

// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
Quill.register('modules/imageDrop', ImageDrop);
Quill.register("modules/imageResize", ImageResize);

const quillRef = React.useRef<ReactQuill>("");
const CustomUndo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
        <path
            className="ql-stroke"
            d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
        />
    </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
        <path
            className="ql-stroke"
            d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
        />
    </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
    this.quill.history.undo();
}
function redoChange() {
    this.quill.history.redo();
}


/*// 패키지 참조
const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

// app 생성
const app = express();

// 미들웨어 사용
app.use(express.json()); // json 데이터 파서
app.use(express.urlencoded({ extended: false })); // 내부 url 파서 사용
app.use(express.static(path.join(__dirname + '/public'))); // 정적 파일 위치 설정

app.use(cors()); // 우선 cors 무조곤 허용

// 서버 테스트용 '/' 라우터
app.get('/', (req, res) => {
    res.json({ msg: 'OK' });
});

// multer 설정
const upload = multer({
    storage: multer.diskStorage({
        // 저장할 장소
        destination(req, file, cb) {
            cb(null, 'public/uploads');
        },
        // 저장할 이미지의 파일명
        filename(req, file, cb) {
            const ext = path.extname(file.originalname); // 파일의 확장자
            console.log('file.originalname', file.originalname);
            // 파일명이 절대 겹치지 않도록 해줘야한다.
            // 파일이름 + 현재시간밀리초 + 파일확장자명
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    // limits: { fileSize: 5 * 1024 * 1024 } // 파일 크기 제한
});

// 하나의 이미지 파일만 가져온다.
app.post('/img', upload.single('img'), (req, res) => {
    // 해당 라우터가 정상적으로 작동하면 public/uploads에 이미지가 업로드된다.
    // 업로드된 이미지의 URL 경로를 프론트엔드로 반환한다.
    console.log('전달받은 파일', req.file);
    console.log('저장된 파일의 이름', req.file.filename);

    // 파일이 저장된 경로를 클라이언트에게 반환해준다.
    const IMG_URL = `http://localhost:4050/uploads/${req.file.filename}`;
    console.log(IMG_URL);
    res.json({ url: IMG_URL });
});

// 포트는 임의로 4050으로 사용
app.listen(4050, () => {
    console.log('4050번 포트에서 대기 중~');
});*/
const imageHandler = ()=>{
    console.log("이미지 핸들러");
    //input type= file DOM을 만든다.
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); //toolbar 이미지를 누르게 되면 이 부분이 실행된다.
    /*이미지를 선택하게 될 시*/
    input.onchange = async () => {
        /*이미지 선택에 따른 조건을 다시 한번 하게 된다.*/
        const file = input.files ? input.files[0] : null;
        /*선택을 안하면 취소버튼처럼 수행하게 된다.*/
        if (!file) return;
        /*서버에서 FormData형식으로 받기 때문에 이에 맞는 데이터형식으로 만들어준다.*/
        const formData = new FormData();
        formData.append("profile", file);
        /*에디터 정보를 가져온다.*/
        let quillObj = quillRef.current?.getEditor();
        /*에디터 커서 위치를 가져온다.*/
        const range = quillObj.getSelection();
        try {
            /*서버에다가 정보를 보내준 다음 서버에서 보낸 url을 imgUrl로 받는다.*/
            const res = await axios.post(
                "api주소",
                formData
            );
            const imgUrl = res.data;
            /*에디터의 커서 위치에 이미지 요소를 넣어준다.*/
            quillObj?.insertEmbed(range.index, "image", `${imgUrl}`);
        } catch (error) {
            console.log(error);
        }
    };


}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida",
    "nanumsquare",
    "buri",
    "gangwon",
    "happiness",
    "npsFontBold",
    "jalnanGothic",
    "pretendard"
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            undo: undoChange,
            redo: redoChange,
        },
    },
    imageResize: {
        // https://www.npmjs.com/package/quill-image-resize-module-react 참고
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize", "Toolbar"],
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
};

// Formats objects for setting up the Quill editor
export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "code-block"
];

// Quill Toolbar component
export const QuillToolbar = () => (
    <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-font" defaultValue="arial">
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      <option value="nanumsquare">나눔</option>
      <option value="buri">부리</option>
          <option value="gangwon">강원</option>
          <option value="happiness">해피</option>
          <option value="npsFontBold">국민연금체</option>
          <option value="jalnanGothic">잘난체</option>
          <option value="pretendard">프리텐다드</option>
      </select>
      <select className="ql-size" defaultValue="medium">
        <option value="extra-small">Size 1</option>
        <option value="small">Size 2</option>
        <option value="medium">Size 3</option>
        <option value="large">Size 4</option>
      </select>
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </span>
        <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
        <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>
        <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" />
    </span>
        <span className="ql-formats">
      <select className="ql-align" />
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
        <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span>
        <span className="ql-formats">
      <button className="ql-formula" />
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
        <span className="ql-formats">
      <button className="ql-undo">
        <CustomUndo />
      </button>
      <button className="ql-redo">
        <CustomRedo />
      </button>
    </span>
    </div>
);

export default QuillToolbar;