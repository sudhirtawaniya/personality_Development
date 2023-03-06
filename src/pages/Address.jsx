import { Link } from "react-router-dom";

export default function Address({subparent,current}) {
    return <div className="flex flex-end float-right">
    <Link to="/">Home</Link>{subparent&&<><Link to={subparent}>{subparent}</Link>/</>}{current&&<><Link >{current}</Link></>}
    </div>
}