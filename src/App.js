import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import { publicRoutes } from "~/routes";
// import Content from "~/layouts/Content/Content";
// import Heading from "~/layouts/Header/Heading";
import { DefaultLayout } from "~/Layouts";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null ) {
              Layout = Fragment
            }
            return (
              <Route
                // loader={({params})=> {
                //   console.log(params.id);
                // }}
                // action={({params})=>{}}

                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
