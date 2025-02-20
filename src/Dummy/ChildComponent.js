function ChildComponent({ title,getPost }) {

    function sendDataPost(){
        getPost(title.title);
    }

  return (
    <div className="col-1 mb-2 mt-2">
      <button className="btn btn-primary" onClick={() => sendDataPost()}>{title.id}</button>
    </div>
  );
}

export default ChildComponent;
