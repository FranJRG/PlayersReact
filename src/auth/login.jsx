

export default function Login(){
 
    return(
        <div className="add-player">
            <form className="container mt-5">
                <h1>Sing In</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Email:</label>
                    <input type="text" className="form-control" name="email"  />
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Username:</label>
                    <input type="number" className="form-control" name="login" />
                </div>

                <button type="submit" className="btn btn-primary">Access</button>
            </form>

        </div>
    )

}