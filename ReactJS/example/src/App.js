import { useState, useEffect } from "react";
//import getApis from "./apis.json";
import Search from "./components/Search";
import ApiItem from "./components/ApiItem";
import Alert from "./components/Alert";
import Loading from "./components/Loading";

import "./style.scss";

function App() {
  const [search, setSearch] = useState("");
  const [apis, setApis] = useState([]);
  const [loading, setLoading] = useState(true);

  const bookmarkItems = [1, 2];

  useEffect(() => {
    fetch("https://5fd4aa8fe9cda40016f5c48f.mockapi.io/apis")
      .then((res) => res.json())
      .then((data) =>
        setApis(
          data.map((api) => {
            if (bookmarkItems.includes(api.id)) {
              api.bookmark = true;
            }
            return api;
          })
        )
      );
  }, []);

  const bookmarks = apis.filter((api) => api.bookmark === true);
  const filteredApis = apis.filter((api) =>
    api.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleBookmark = (id) => {
    setApis(
      apis.map((api) => {
        if (api.id === id) {
          api.bookmark = !api.bookmark;
        }
        return api;
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <div className="App">
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          <h3>
            Kullanılacak ücretsiz API'lerin <br /> toplu listesi yazılım ve web geliştirme.
          </h3>
          <Search
            search={search}
            setSearch={setSearch}
            placeholder="Find development, games, images APIs"
          />
          <div className="container">
            <h4>Bu haftanın öne çıkan API'leri</h4>
            <div className="api-list">
              {filteredApis.map((api) => (
                <ApiItem
                  toggleBookmark={toggleBookmark}
                  key={api.id}
                  data={api}
                />
              ))}
              {filteredApis.length === 0 && <Alert message="API not found." />}
            </div>
          </div>
          <div className="container">
            <h4>Your Bookmarks</h4>
            <div className="api-list">
              {bookmarks.map((api) => (
                <ApiItem
                  toggleBookmark={toggleBookmark}
                  key={api.id}
                  data={api}
                />
              ))}
              {bookmarks.length === 0 && (
                <Alert message="There is no item on your bookmarks" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
