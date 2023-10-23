import ModuleList from "../Modules/ModuleList";
import "./index.css";


function Home() {
  return (
    <div className="row">
        <div className="col-9">
            {/* <h2>Home</h2> */}
            <ModuleList />
        </div>
        <div className="col-3">
        <h5 style={{color: 'gray'}}>Course Status</h5>
                            <div class="d-grid gap-2 d-md-block">
                                <button class="btn btn-primary joint" type="button">
                                    Unpublish</button>
                                <button class="btn btn-primary joint" type="button" id="published">Published</button>
                            </div>
                            <ul class="list-group cs" style={{marginTop: '20px'}}>
                                <li class="list-group-item cs-list"><a href="#">Import Existing Content</a></li>
                                <li class="list-group-item cs-list"><a href="#">Import From Commons</a>
                                </li>
                                <li class="list-group-item cs-list"><a href="#">Choose Home Page</a></li>
                                <li class="list-group-item cs-list"><a href="#">View Course Stream</a></li>
                                <li class="list-group-item cs-list"><a href="#">New Announcement</a></li>
                                <li class="list-group-item cs-list"><a href="#">New Analytics</a></li>
                                <li class="list-group-item cs-list"><a href="#">View Course Notifications</a></li>
                            </ul>
                            <h5 style={{marginTop: '20px'}}>To Do</h5>
                            <hr />
                            <ul className="list-group grade">
                                <li className="list-group-item">Grade A1 - ENV + HTML</li>
                            </ul>

                            <h5 style={{marginTop: '20px'}}>Coming Up</h5>
                            <hr />
                            <ul className="list-group coming-up">
                                <li class="list-group-item">Lecture<br /> <span
                                        style={{color: 'lightgrey'}}>CS5610.1261.5423</span><br />
                                    <span style={{color:'lightgrey'}}> Sep 11 at 11.45p</span><br />
                                </li><br />
                                <li class="list-group-item">CS5610 06 SP 23<br /> <span
                                        style={{color: 'lightgrey'}}>CS5610.1261.5423</span><br />
                                    <span style={{color: 'lightgrey'}}> Sep 11 at 11.45p</span><br />
                                </li><br />
                                <li class="list-group-item">CS5610 Web Development<br /> <span
                                        style={{color: 'lightgrey'}}>CS5610.1261.5423</span><br />
                                    <span style={{color: 'lightgrey'}}> Sep 11 at 11.45p</span><br />
                                </li><br />
                                <li class="list-group-item" style={{fontSize: 'small'}}> 12 more in the next week ...</li>

                            </ul>
        </div>
    </div>
  );
}
export default Home;