import React from 'react';
import {Card, CardImg,CardImgOverlay,CardBody,CardText,CardTitle,ListGroup, ListGroupItem, BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link } from 'react-router-dom';



    
        
    function RenderComments({comments}){
        if(comments!=null){
            const Comment=comments.map((com)=>{
                return(
                    <ListGroup>
                        <ListGroupItem>{com.comment}</ListGroupItem>
                        <ListGroupItem>--{com.author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</ListGroupItem>
                    </ListGroup>
                );
            });
            return(  
                <div>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>                           
                        {Comment}     
                    </ul>
                </div>
            )
        }
        else{
            return(<div></div>)
        }

    }
    const DishDetail=(props)=> {
        
        if(props.dish==null){
            return(<div></div>)
        }
        else

        return(
            <div className='container'>
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
            <div className='row'>
                <div key={props.dish.id} className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" object src={props.dish.image} alt={props.dish.name} />                        
                    <CardBody>
                        <CardTitle heading>{props.dish.name}</CardTitle>  
                        <CardText>{props.dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <RenderComments comments={props.comments} />
                </div>
                
            </div>
            </div>
        )
    }


export default DishDetail;

