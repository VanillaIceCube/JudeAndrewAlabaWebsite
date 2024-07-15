// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

// function Home() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>About Page</h1>
//         <p>This is the about page.</p>
//         <Link to="/">Go back to Home</Link>
//       </header>
//     </div>
//   );
// }

// function App() {
//   console.log("Hello World")
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           {/* Catch-all route */}
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  console.log("Hello World")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;