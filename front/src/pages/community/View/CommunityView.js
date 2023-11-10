import React, {useState} from 'react';
import '../../../css/community/view.css';
import { Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import ArticleTagList from "./Article/ArticleTagList";
import ArticleContent from "./Article/ArticleContent";
import ArticleTopBtns from "./Article/ArticleTopBtns";
import ArticleHeader from "./Article/ArticleHeader";
import ArticleBottomBtns from "./Article/ArticleBottomBtns";
import ReplyBox from "./ReplyBox";
import CommentWriter from "./Comment/CommentWriter";
import CommentList from "./Comment/CommentList";
import CommentOption from "./Comment/CommentOption";

function CommunityView() {
	let navigate = useNavigate();
	let [popup, setPopup] = useState('');
	return (
		<>
			<Container style={{ userSelect: 'none' }} onClick={()=>{if(popup==='user')setPopup('')}}>
				<Row>
					<Col col={12}>
						<div className="view" style={{ marginTop: '80px' }}>
							<div className="Article layout_content">
								<div className="article_wrap">
									<ArticleTopBtns></ArticleTopBtns>
									<div className="ArticleContentBox" style={{ marginBottom: '100px' }}>
										<ArticleHeader></ArticleHeader>
										<div className="article_container">
											<ArticleContent></ArticleContent>
											<ArticleTagList></ArticleTagList>
											<ArticleBottomBtns></ArticleBottomBtns>
											<ReplyBox></ReplyBox>
											<div className={'CommentBox'}>
												<CommentOption></CommentOption>
												<CommentList  popup={popup} setPopup={setPopup}></CommentList>
												<CommentWriter></CommentWriter>
											</div>
											{/*<div className="RelatedArticles"></div>
											<div className="PopularArticles"></div>
											<div className={"article_writer"}></div>
											<div className={"ReplyBox"}></div>
											<div className={"CommentBox"}></div>*/}
										</div>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default CommunityView;