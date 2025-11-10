import {Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="title">
      <h1>For My Beloved</h1>

      <div className="TableOptions">
        <table border="5">
          <thead>
            <tr>
              <th>Letters</th>
              <th>Pictures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/letter" className="coraline-image"></Link>
              </td>
              <td>
                <Link to="/pictures" className="wybie-image"></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="note-box">
        <h2>Note</h2>
        <p>
          Even in the other world Id still find you glowing brighter than any
          button eyed dream
        </p>
      </div>
    </div>
  );
}

export default App;
