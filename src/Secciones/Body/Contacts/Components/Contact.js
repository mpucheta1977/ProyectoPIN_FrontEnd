const Contact  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputName" className="form-label">Name</label>
                <input onChange={props.handleChange} type="text" className="form-control" id="name" value={props.contactInfo.name}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input onChange={props.handleChange} type="email" className="form-control" id="email" value={props.contactInfo.email}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">Phone</label>
                <input onChange={props.handleChange} type="text" className="form-control" id="phone" value={props.contactInfo.phone} />
            </div>
            <div className="mb-3">
                <label for="exampleInputTextArea" className="form-label">Message</label>
                <input onChange={props.handleChange} type="textarea" className="form-control" id="message" value={props.contactInfo.message} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={props.disableEnviar}>Submit</button>
        </form>
    )
};

export default Contact;