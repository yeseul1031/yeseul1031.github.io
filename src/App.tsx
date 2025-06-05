import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BlogInfo from "./components/BlogInfo";
import PostList from "./components/pages/PostList";
import Post from "./components/pages/Post";
import { ContextProvider } from "./contexts/Context";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Routes>
        {/* 홈: BlogInfo */}
        <Route path="/" element={<BlogInfo />} />
        <Route path="/blog/" element={<BlogInfo />} />

        {/* 공부기록: 네이버 블로그 포스트만 */}
        <Route path="/blog/study" element={<PostList />} />

        {/* 소개: BlogInfo */}
        <Route path="/blog/about" element={<BlogInfo />} />

       
      </Routes>
      <Footer />
    </ContextProvider>
  );
}

export default App;
