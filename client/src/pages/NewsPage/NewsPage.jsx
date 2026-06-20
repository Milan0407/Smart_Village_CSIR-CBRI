import {
  useEffect,
  useState,
} from "react";

import MainLayout
  from "../../layouts/MainLayout";

import {
  getAllNews,
} from "../../services/news.service";

import FeaturedNews
  from "./components/FeaturedNews";

import NewsGrid
  from "./components/NewsGrid";

  import {
  getPublicAnnouncements,
} from "../../services/announcement.service";

import FeaturedAnnouncement
from "./components/FeaturedAnnouncement";

import AnnouncementGrid
from "./components/AnnouncementGrid";

const NewsPage =
  () => {
    const [
      news,
      setNews,
    ] = useState([]);

    const [
  announcements,
  setAnnouncements,
] = useState([]);


useEffect(() => {
  const loadData =
    async () => {

      const newsData =
        await getAllNews();

      const announcementData =
        await getPublicAnnouncements();

      setNews(newsData);

      setAnnouncements(
        announcementData
      );
    };

  loadData();
}, []);

const featuredAnnouncement =
  announcements.find(
    (item) =>
      item.isFeatured
  ) ||
  announcements[0];

    const featured =
      news.find(
        (item) =>
          item.isFeatured
      );

    return (
      <>
       <MainLayout>

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-5xl font-bold mb-12">
            News & Updates
          </h1>

         <FeaturedAnnouncement
  announcement={
    featuredAnnouncement
  }
/>

<FeaturedNews
  article={featured}
/>

<h2
  className="
    text-3xl
    font-bold
    mt-16
    mb-8
  "
>
  Latest News
</h2>

<NewsGrid
  news={news}
/>

<h2
  className="
    text-3xl
    font-bold
    mt-20
    mb-8
  "
>
  Announcements
</h2>

<AnnouncementGrid
  announcements={
    announcements
  }
/>

        </div>

        </MainLayout>
      </>
    );
  };

export default NewsPage;