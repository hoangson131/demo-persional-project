import { Link, Route, useParams } from "react-router-dom";

<Route
  // this path will match URLs like
  // - /teams/hotspur
  // - /teams/real
  path="/frofile/:teamId"
  // the matching param will be available to the loader
  loader={({ params }) => {
    console.log(params.teamId); // "hotspur"
  }}
  // and the action
  action={({ params }) => {}}
  element={<Team />}
/>;

// and the element through `useParams`
function Team() {
  let params = useParams();
  console.log(params.teamId); // "hotspur"
}
function Notification() {
  const products ={
    id: 1,
    title:'Product 1',
}
  return ( 
    <div>
      <Link to={`/products/${products.id}`}>Notifications page</Link>
    </div>
   );
}

export default Notification;