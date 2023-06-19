import { View, Text, Alert, SafeAreaView, StatusBar } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import TopBar from "../topBar/topBar";
import Swipes from "../imageSwaper/Swipes";
import axios from "axios";
import styles from "./home.style";
import BottomBar from "../bottomBar/bottomBar";
import { useDispatch } from "react-redux";
import { userAdded } from "../../redux/reducers/selectedUsersSlice";
export default function Home() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipesRef = useRef(null);
  const dispatch = useDispatch();
  async function fetchUsers() {
    try {
      const { data } = await axios.get(
        "https://randomuser.me/api/?gender=female&results=50"
      );
      setUsers(data.results);
    } catch (error) {
      console.log(error);
      Alert.alert("Error getting users", "", [
        { text: "Retry", onPress: () => fetchUsers() },
      ]);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function handleLike(user) {
    console.log("like", { user });
    let use = {
      id:user.cell,
      img: user.picture.large,
      age: user.dob.age,
      name: user.name.first,
      city: user.location.city,
    };

    dispatch(userAdded(use));
    nextUser();
  }

  function handlePass() {
    console.log("pass");
    nextUser();
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  function handleLikePress() {
    swipesRef.current.openLeft();
  }
  function handlePassPress() {
    swipesRef.current.openRight();
  }
  return (
    <SafeAreaView className="">
      <View>
        {users.length > 1 &&
          users.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
          )}
      </View>
      <BottomBar
        handleLikePress={handleLikePress}
        handlePassPress={handlePassPress}
      />
      <TopBar />
      <StatusBar />
    </SafeAreaView>
  );
}
