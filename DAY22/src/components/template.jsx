const Template =({templates,setMeme}) =>{
  return (
     <div classname="template"> 
     {templates.map((template) =>(
          <div key={template.id} className="unique" onClick={()=>
          setMeme(template)}>
            <div className="image" style={{backgroundImage:`url(${template.url})`}} ></div>
          </div>
        ))} 
        </div>
  );
};

export default Template;
