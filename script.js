const root = document.getElementById('root');

function Box({className,children,style}){
  return <div className={`box ${className}`}  style={{...style,fontStyle:'italic'}} >{children} lightbox</div>
}

const element = (
  <>
<Box  className="box--small" children="small" style={{backgroundColor:'pink'}}/>
<Box  className="box--md" children="medium" style={{backgroundColor:'blue',color:'#fff'}}/>
<Box  className="box--lg"  style={{backgroundColor:'#000',color:'#fff'}}>Large</Box>
</>
);

ReactDOM.render(element, root);
