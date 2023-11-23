import {Col, Modal, ModalBody, Row} from "reactstrap";
import React, {useState} from "react";
import {UploadDropzone} from "react-uploader";
import {Uploader} from "uploader";
import {changeDTO} from "../../../../store/changeDTO";
const options = {
    apiKey: "free", // Get API keys from: www.bytescale.com

    maxFileCount: 1,

    // When `showFinishButton: false` (default) combined with `multi: false` (default) or `maxFileCount: 1`:
    // - Modals will close immediately after the upload completes.
    // - Dropzones will allow the user to keep removing/re-uploading the file.
    //   Use `onUpdate` for dropzones to handle each upload, and to close the dropzone if required.
    showFinishButton: true,

    styles: {
        colors: {
            primary: "#377dff"
        },
        width:  {
            width: "100%"
        }
    }
}
// Get production API keys from Bytescale
const uploader = Uploader({
    apiKey: "free"
});



const MyDropzone = ({ isObject, setFileName, fileName, setFileURL, fileURL, setModal, modal, uploader }) => {
    const options = {/* ... */};

    const handleUpdate = (files) => {
        if (isObject) {
            changeDTO(setFileName, fileName, files.map(x => x.originalFile.originalFileName));
            changeDTO(setFileURL, fileURL, files.map(x => x.fileUrl));
        } else {
            setFileName(files.map(x => x.originalFile.originalFileName));
            setFileURL(files.map(x => x.fileUrl));
        }
        setModal(!modal)
    };

    return (
        <UploadDropzone
            options={options}
            onUpdate={handleUpdate}
            onComplete={() => setModal(!modal)}
            width="600px"
            height="375px"
            uploader={uploader}
        />
    );
};

function FileUpload({setModal, modal, setFileName, setFileURL, isObject = false, fileName, fileURL, value}) {


    const MyUploadedFiles = ({files}) => files.map(file => {
        // Save 'filePath' to your DB, and construct URLs using UrlBuilder:
        const {filePath, accountId} = file;
        // Build an image transformation URL for the uploaded file.
        // Remove 'options' to get the URL to the original file:
        let UrlBuilder;
        const fileUrl = UrlBuilder.url({
            filePath,
            accountId,
            options: {
                transformation:       "preset",
                transformationPreset: "thumbnail"
            }
        });
        return setModal(!modal)
    })
    const [files, setFiles] = useState([])
    return <div>

        <h5><span className={'red'}>*</span> 썸네일</h5>

            <div className={'filebox'}>

                <input className="upload-name" value={value==undefined?'썸네일':value} onClick={() => {
                    setModal(!modal)
                }}/>
                <label htmlFor="file" style={{marginTop: '8px'}} className={'fileFind'} onClick={() => {
                    setModal(!modal)
                }}>파일찾기</label>
            </div>
            {/*<FileUploader handleChange={handleChangeFile} name="file" types={fileTypes} label={'썸네일 이미지를 올려주세요'}/>*/}
            <Modal isOpen={modal} toggle={() => setModal(false)}>
                <div className="modal-header justify-content-center">
                    <button className="close" type="button" onClick={() => setModal(false)}>
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <h4 className="title title-up">썸네일 업로드</h4>
                </div>
                <ModalBody>
                    <div>{files.length
                        ? <MyUploadedFiles files={files}/>
                        : <MyDropzone
                            isObject={isObject}
                            setFileName={setFileName}
                            fileName={fileName}
                            setFileURL={setFileURL}
                            fileURL={fileURL}
                            setModal={setModal}
                            modal={modal}
                            uploader={uploader}
                        />
                    }</div>
                </ModalBody>
            </Modal>
        </div>
}

export default FileUpload