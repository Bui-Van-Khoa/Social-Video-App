import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import {
  Category,
  Create,
  Feed,
  NavBar,
  Search,
  VideoPin,
  VideoPinDetail
} from "../Components";
import { Routes, Route } from "react-router-dom";
import { categories } from "../data";


import { firebaseApp } from "../firebase-config";
import { getFirestore } from "firebase/firestore";
import { getAllFeeds } from "../utils/fetchData";
import Spinner from "../Components/Spinner";
import UserProfile from "../Components/UserProfile";


const Home = ({ user }) => {
  return (
    <>
      <NavBar user={user} />

      <Flex>
        <Flex
          direction={"column"}
          justifyContent="start"
          alignItems={"center"}
          width="5%"
        >
          {categories &&
            categories.map((data) => <Category key={data.id} data={data} />)}
        </Flex>

        <Flex
          width={"95%"}
          px={4}
          justifyContent="center"
          alignItems={"center"}
          paddingX={4}
        >
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/category/:categoryId" element={<Feed />} />
            <Route path="/create" element={<Create />} />
            <Route path="/videoDetail/:videoId" element={<VideoPinDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/userDetail/:userId" element={<UserProfile />} />
          </Routes>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
