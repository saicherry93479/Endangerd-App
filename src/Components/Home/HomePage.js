import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import Adopt from "../Adopts/Adopt";
import Event from "../Events/Event";
import { getEvents, getUser } from "../Firebase/firebaseMethods";
import Fourth from "../Fourth/Fourth";
import { NavHeader } from "../OnBoard/NavbarStyle";
import Profile from "../Profile/Profile";
import { LoadingPage } from "../UtilsPageStyle";
import NavBar from "./NavBar";

export const HomeContext = createContext();
var Pages = [<Profile />, <Event />, <Adopt />, <Fourth />];
const HomePage = () => {
  const { user, setUser, loading, setLoading } = useContext(userContext);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [addEvent, setAddEvent] = useState(false);
  const [addGroup, setGroup] = useState(false);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents(user.username)
      .then((res) => {
        if (res !== "fail") {
          setEvents(res);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    console.log("called the homepage ", addEvent, " ", addGroup);
    if (user.logedIn === false) {
      navigate("/");
    }
  }, []);

  return (
    <HomeContext.Provider
      value={{ addEvent, setAddEvent, addGroup, setGroup, events, setEvents }}
    >
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
          <NavBar
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          {Pages[currentIndex]}
        </div>
      )}
    </HomeContext.Provider>
  );
};

export default HomePage;
